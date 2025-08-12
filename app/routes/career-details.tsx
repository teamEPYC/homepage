import PageCareerDetails from "~/pages/career-details";
import { getJob, getJobComponent } from "~/lib/data-career";
import type { Route } from "./+types/career-details";
import { buildMeta } from "~/lib/meta";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) throw new Response("Not Found", { status: 404 });

  const job = getJob(slug);
  if (!job) throw new Response("Not Found", { status: 404 });

  return { job, slug, url };
}

export function meta({ data }: Route.MetaArgs) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Miden | Hiring",
    description: "Miden | Description",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

export default function RouteCareerDetails({
  loaderData,
}: Route.ComponentProps) {
  const { job, slug } = loaderData;
  const component = getJobComponent(slug);

  if (!component) {
    return <div>Component missing</div>;
  }

  return <PageCareerDetails job={{ ...job, component }} />;
}
