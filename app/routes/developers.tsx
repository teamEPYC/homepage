import { PageDevelopers } from "~/pages/developers";
import type { Route } from "../+types/root";
import { buildMeta } from "~/lib/meta";

export type Item = (typeof items)[0];

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  return {
    url,
  };
}

export function meta({ data }: Route.MetaArgs) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Developers – Miden",
    description:
      "Miden is a privacy-focused execution layer for the modular blockchain stack.",
    url: canonical,
    image: `${data.url.origin}/images/home.png`,
  });
}

const items = [
  {
    label: "Docs",
    description: "Everything you need to get started building with Miden.",
    link: "https://0xmiden.github.io/miden-docs/",
  },
  {
    label: "Playground",
    description: "Start experimenting with Miden in your browser.",
    link: "https://miden-playground.pages.dev/",
  },
  {
    label: "Midenscan",
    description:
      "Explore accounts, transaction details, and notes on the Miden block explorer.",
    link: "https://testnet.midenscan.com/",
  },
  {
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start building with Miden.",
    link: "https://faucet.testnet.miden.io/",
  },
];

export default function RouteDevelopers() {
  return <PageDevelopers items={items} />;
}
