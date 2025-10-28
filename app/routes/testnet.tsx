import { PageTestnet } from "~/pages/testnet";
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
    title: "Miden Testnet",
    description:
      "Run transactions on the Miden Testnet and explore how execution at the edge delivers privacy and scalability.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

const items = [
  {
    label: "Midenscan",
    description:
      "Explore accounts, transaction details, and notes on the Miden block explorer.",
    link: {
      href: "https://testnet.midenscan.com/",
      label: "Explorer",
    },
  },
  {
    label: "Miden faucet",
    description: "Get Miden testnet tokens and start building  with Miden.",
    link: {
      href: "https://faucet.testnet.miden.io/",
      label: "Faucet",
    },
  },
  {
    label: "Miden wallet",
    description: "Install the Miden wallet and experience client-side proving.",
    link: {
      href: "https://chromewebstore.google.com/detail/miden-wallet/ablmompanofnodfdkgchkpmphailefpb",
      label: "Wallet",
    },
  },
];

export default function RouteTestnet() {
  return <PageTestnet items={items} />;
}
