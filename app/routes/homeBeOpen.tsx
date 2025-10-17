import {
  Logo1kx,
  LogoA16zcrypto,
  LogoDelta,
  LogoFinality,
  LogoHackVC,
  LogoMHVentures,
  LogoP2Ventures,
  LogoSymbolicCapital,
} from "~/components/logo";
import { PageHomeBeOpen, type Investor } from "~/pages/homepageBeOpen";
import { buildMeta } from "~/lib/meta";
import type { LoaderData } from "~/lib/data";

export function loader({ request }: { request: Request }): LoaderData {
  const url = new URL(request.url);

  return {
    meta: buildMeta({
      title: "Miden",
      description:
        "Miden grants applications the power to scale with public and private transactions.",
      url,
    }),
  };
}

export function meta({ data }: { data: LoaderData }) {
  return data.meta;
}

const items: Investor[] = [
  {
    icon: <LogoA16zcrypto />,
    label: "A16zcrypto",
    size: "large",
    link: "https://a16zcrypto.com/",
  },
  {
    icon: <Logo1kx />,
    label: "1k(x)",
    size: "large",
    link: "https://1kx.network/",
  },
  {
    icon: <LogoHackVC />,
    label: "HackVC",
    size: "large",
    link: "https://www.hack.vc/",
  },
  {
    icon: <LogoFinality />,
    label: "Finality",
    size: "large",
    link: "https://finality.capital/",
  },
  {
    icon: <LogoSymbolicCapital />,
    label: "Symbolic Capital",
    size: "small",
    link: "https://symbolic.capital/",
  },
  {
    icon: <LogoDelta />,
    label: "Delta",
    size: "small",
    link: "https://deltafund.io/",
  },
  {
    icon: <LogoMHVentures />,
    label: "MH Ventures",
    size: "small",
    link: "https://www.mhventures.io/",
  },
  {
    icon: <LogoP2Ventures />,
    label: "P2 Ventures",
    size: "small",
    link: "https://www.p2v.ventures/",
  },
];

export default function RouteHomeBeOpen() {
  return <PageHomeBeOpen items={items} />;
}
