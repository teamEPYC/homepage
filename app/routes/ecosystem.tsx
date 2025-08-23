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
  LogoReilabs
} from "~/components/logo";
import { PageEcosystem } from "~/pages/ecosystem";
import type { Partner } from "~/pages/ecosystem";

export type Item = (typeof items)[0];

export function meta() {
  return [{ title: "Ecosystem – Miden" }];
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
];

const partners: Partner[] = [
  { icon: <LogoLambdaclass />, label: "LambdaClass", size: "large", link: "https://lambdaclass.com/" },
  { icon: <LogoReilabs />, label: "Reilabs", size: "large", link: "https://reilabs.io/" },
  { icon: <LogoMassa />, label: "Massa Labas", size: "large", link: "https://massa.net/" },
  { icon: <LogoLeo />, label: "Demox Labs", size: "large", link: "https://www.miden.fi/" },
  { icon: <LogoNethermind />, label: "Nethermind", size: "large", link: "https://nethermind.io/" },
  { icon: <LogoOpenzeppelin />, label: "OpenZeppelin", size: "large", link: "https://www.openzeppelin.com//" },

];

export default function RouteEcosystem() {
  return <PageEcosystem items={items} partners={partners} />;
}
