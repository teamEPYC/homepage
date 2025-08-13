import { PageDevelopers } from "~/pages/developers";
import { buildMeta } from "~/lib/meta";
import type { LoaderData } from "~/lib/data";

export type Item = (typeof items)[0];

export function loader({ request }: { request: Request }): LoaderData {
  const url = new URL(request.url);
  return {
    url,
  };
}

export function meta({ data }: { data: LoaderData }) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Miden Developers",
    description:
      "Build scalable apps on Miden with privacy-preserving smart contracts and built-in safety.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
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
