import { PageRoadmap } from "~/pages/roadmap";
import type { Route } from "../+types/root";
import { buildMeta } from "~/lib/meta";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  return {
    url,
  };
}

export function meta({ data }: Route.MetaArgs) {
  const canonical = data.url.origin + data.url.pathname;

  return buildMeta({
    title: "Roadmap – Miden",
    description:
      "Miden is a privacy-focused execution layer for the modular blockchain stack.",
    url: canonical,
    image: `${data.url.origin}/images/home.png`,
  });
}

export default function RouteRoadmap() {
  return <PageRoadmap />;
}
