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
  LogoOpenzeppelin,
  LogoLambdaclass,
  LogoMassa,
  LogoReilabs,
  LogoLigero
} from "~/components/logo";
import { PageEcosystem } from "~/pages/ecosystem";
import { buildMeta } from "~/lib/meta";
import type { LoaderData } from "~/lib/data";
import type { Partner } from "~/pages/ecosystem";

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
    icon: <LogoQash className="size-6" />,
    label: "Qash",
    description: "Programmable Private Payments",
    link: "https://www.qash.finance/",
  },
  {
    icon: <LogoZoro className="size-6" />,
    label: "Zoro",
    description: "Public/Private Oracle-informed AMM",
    link: "https://zoroswap.com/",
  },
  {
    icon: <LogoMidenbrowserwallet className="size-6" />,
    label: "Miden Browser Wallet",
    description: "In-browser Wallet for Easy Payments",
    link: "https://midenbrowserwallet.com/",
  },
  {
    icon: <LogoLinum className="size-6" />,
    label: "Lumina Engine",
    description: "Institutional-grade Programmable Dark Pool",
    link: "https://www.luminaengine.ai/",
  },
  {
    icon: <LogoDome className="size-6" />,
    label: "Dome",
    description: "Compliant Onchain Mixer",
    link: "https://github.com/arcane-finance-defi/miden-bridge-mono",
  },
  {
    icon: <LogoInicio className="size-6" />,
    label: "Inicio Labs",
    description: "Private Multisig Solution",
    link: "https://github.com/0xMiden/MultiSig",
  },  
  {
    icon: <LogoWalnut className="size-6" />,
    label: "Walnut",
    description: "Miden Playground (WIP)",
    link: "https://github.com/walnuthq/miden-playground",
  }, 
];

const partners: Partner[] = [
  { icon: <LogoLambdaclass />, label: "LambdaClass", size: "large", link: "https://lambdaclass.com/" },
  { icon: <LogoNethermind />, label: "Nethermind", size: "large", link: "https://nethermind.io/" },
  { icon: <LogoOpenzeppelin />, label: "OpenZeppelin", size: "large", link: "https://www.openzeppelin.com/" },
  { icon: <LogoLigero />, label: "Ligero", size: "large", link: "https://ligero-inc.com/" },
  { icon: <LogoReilabs />, label: "Reilabs", size: "large", link: "https://reilabs.io/" },
  { icon: <LogoMassa />, label: "Massa Labs", size: "large", link: "https://massa.net/" },
  // { icon: <LogoLeo />, label: "Demox Labs", size: "large", link: "https://www.miden.fi/" },

];

export default function RouteEcosystem() {
  return <PageEcosystem items={items} partners={partners} />;
}
