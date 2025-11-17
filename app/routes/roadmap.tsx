import { PageRoadmap } from "~/pages/roadmap";
import { buildMeta } from "~/lib/meta";
import type { LoaderData } from "~/lib/data";

export function loader({ request }: { request: Request }): LoaderData {
  const url = new URL(request.url);
  return {
    url,
  };
}

export function meta({ data }: { data: LoaderData }) {
  const canonical = data.url.origin + data.url.pathname;

  return buildMeta({
    title: "Miden Roadmap",
    description:
      "Follow Miden's progress and see what's coming next from network upgrades to developer tooling improvements.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

export default function RouteRoadmap() {
  return <PageRoadmap />;
}
