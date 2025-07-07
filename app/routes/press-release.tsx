import { PagePressRelease } from "~/pages/press-release";
import type { Route } from "./+types/press-release";
import { buildMeta } from "~/lib/meta";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const press = await import("../content/press-release/press.json");
  const podcasts = await import("../content/press-release/podcasts.json");
  return { press: press.default, podcasts: podcasts.default, url };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [];
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Press Release – Miden",
    description:
      "Miden is a privacy-focused execution layer for the modular blockchain stack.",
    url: canonical,
    image: `${data.url.origin}/images/home.png`,
  });
}

export interface PressItem {
  title: string;
  link: string;
  date: string;
  category: string;
}

interface LoaderData {
  press: PressItem[];
  podcasts: PressItem[];
}

export default function RoutePressRelease({
  loaderData,
}: Route.ComponentProps) {
  const { press, podcasts }: Partial<LoaderData> = loaderData || {};

  return <PagePressRelease press={press} podcasts={podcasts} />;
}
