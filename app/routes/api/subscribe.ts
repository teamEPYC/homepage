import type { Route } from "./+types/subscribe";
import { z } from "zod";
import { data } from "react-router";

export async function action({ request, context }: Route.ActionArgs) {
  const env = context.cloudflare.env;
  const unknownData = Object.fromEntries((await request.formData()).entries());

  const parseResult = z.object({ email: z.email() }).safeParse(unknownData);

  if (!parseResult.success) {
    return Response.json({ error: parseResult.error }, { status: 400 });
  }

  const { email } = parseResult.data;

  const subscribeListId = parseInt(env.BREVO_SUBSCRIBE_LIST_ID);

  if (Number.isNaN(subscribeListId)) {
    console.log({
      msg: "Invalid subscribe list ID",
      subscribeListId: env.BREVO_SUBSCRIBE_LIST_ID,
    });

    return Response.json(
      { error: "Invalid subscribe list ID" },
      { status: 500 },
    );
  }

  const requestBody = {
    updateEnabled: true,
    email,
    listIds: [subscribeListId],
  };

  console.log(requestBody);
  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": env.BREVO_API_KEY,
    },
    body: JSON.stringify(requestBody),
  });

  const brevoData = await res.json();

  if (!res.ok) {
    return Response.json({ error: JSON.stringify(brevoData) }, { status: 400 });
  }

  return Response.json({ success: true, data: brevoData }, { status: 200 });
}
