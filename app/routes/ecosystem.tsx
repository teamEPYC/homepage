import {
  LogoLinum,
  LogoLeo,
  LogoZoro,
  LogoWalnut,
  LogoQash,
  LogoDome,
  LogoInicio,
  LogoNethermind,
  LogoMidenbrowserwallet,
} from "~/components/logo";
import { PageEcosystem } from "~/pages/ecosystem";
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
    title: "Miden Ecosystem",
    description:
      "Explore projects and partners building real-world applications on top of Miden.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

const items = [
  {
    icon: <LogoDome className="size-6" />,
    label: "Dome",
    description: "Compliant Onchain Mixer",
    link: "https://github.com/arcane-finance-defi/miden-bridge-mono",
  },
  {
    icon: <LogoQash className="size-6" />,
    label: "Qash",
    description: "Programmable Private Payments",
    link: "https://www.qash.finance/",
  },
  {
    icon: <LogoInicio className="size-6" />,
    label: "Inicio Labs",
    description: "Private Multisig Solution",
    link: "https://github.com/inicio-labs/miden-multi-sig",
  },
  {
    icon: <LogoZoro className="size-6" />,
    label: "Zoro",
    description: "Public/Private Oracle-informed AMM",
    link: "https://www.nabla.fi/",
  },
  {
    icon: <LogoMidenbrowserwallet className="size-6" />,
    label: "Miden Browser Wallet",
    description: "In-browser Wallet for Easy Payments",
    link: "https://midenbrowserwallet.com/",
  },
  {
    icon: <LogoLinum className="size-6" />,
    label: "Linum Labs",
    description: "Compliant Dark Pool Using MPC",
    link: "https://www.linumlabs.com/",
  },
  {
    icon: <LogoWalnut className="size-6" />,
    label: "Walnut",
    description: "Miden Playground (WIP)",
    link: "https://github.com/walnuthq/miden-playground",
  }, 
  {
    icon: <LogoLeo className="size-6" />,
    label: "Demox Labs",
    description: "Wallet and WebClient SDK",
    link: "https://miden.fi/",
  },
  {
    icon: <LogoNethermind className="size-6" />,
    label: "Nethermind",
    description: "Private Transport Bus",
    link: "https://github.com/0xMiden/miden-private-transport",
  }, 
];

export default function RouteEcosystem() {
  return <PageEcosystem items={items} />;
}
