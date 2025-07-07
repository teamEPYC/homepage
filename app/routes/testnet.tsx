import { PageTestnet } from "~/pages/testnet";
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
    title: "Testnet – Miden",
    description:
      "Miden is a privacy-focused execution layer for the modular blockchain stack.",
    url: canonical,
    image: `${data.url.origin}/images/home.png`,
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
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start building  with Miden.",
    link: {
      href: "https://faucet.testnet.miden.io/",
      label: "Faucet",
    },
  },
  {
    label: "Miden Wallet",
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
