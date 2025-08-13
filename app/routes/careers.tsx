import { getJobs } from "~/lib/data-career";
import type { Route } from "./+types/careers";
import { PageCareers } from "~/pages/careers";
import { buildMeta } from "~/lib/meta";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const jobs = getJobs();
  return { jobs, url };
}

export function meta({ data }: Route.MetaArgs) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Miden Careers",
    description: "Check our open roles and join the Miden team to help shape the future of the Edge Blockchain.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

export default function RouteCareers({
  loaderData: { jobs },
}: Route.ComponentProps) {
  return <PageCareers Jobs={jobs} />;
}
