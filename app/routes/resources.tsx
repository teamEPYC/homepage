import { getPosts } from "~/lib/posts.server";
import { PageResources } from "~/pages/resources";
import type { Route } from "./+types/resources";
import { buildMeta } from "~/lib/meta";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const posts = getPosts();

  return {
    posts,
    url,
  };
}

export function meta({ data }: Route.MetaArgs) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Miden Publications",
    description:
      "Watch talks, read blog posts, and explore research papers from the Miden team.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

export const press = [
  {
    label: "[Fortune Crypto] Andreessen Horowitz leads $25 million bet on Miden, a former Meta engineer’s privacy blockchain",
    link: "https://fortune.com/crypto/2025/04/29/miden-a16z-privacy-blockchain-polygon-labs?utm_source=miden&utm_medium=website",
  },
  {
    label: "[The Block] Polygon spin-off Miden raises $25 million in seed funding for privacy-focused blockchain",
    link: "https://www.theblock.co/post/352342/polygon-miden-funding-blockchainhttps://www.theblock.co/post/352342/polygon-miden-funding-blockchain?utm_source=miden&utm_medium=website",
  },
  {
    label: "[CoinDesk] Polygon spin-off Miden secures $25M to bring speed, privacy to institutional giants",
    link: "https://www.coindesk.com/tech/2025/04/29/polygon-spin-off-miden-secures-25m-to-bring-speed-privacy-to-institutional-giants?utm_source=miden&utm_medium=website",
  },
  {
    label: "[Decrypt] Miden spins out from Polygon Labs, raises $25M to launch own chain",
    link: "https://decrypt.co/316869/miden-spins-out-from-polygon-labs-raises-25m-to-launch-own-chain?utm_source=miden&utm_medium=website",
  },
  {
    label: "[The Street] Miden raises $25M after spinning out from Polygon Labs",
    link: "https://www.thestreet.com/crypto/markets/miden-raises-25m-after-spinning-out-from-polygon-labs?utm_source=miden&utm_medium=website",
  },
  {
    label: "[Cointelegraph] A16z leads $25M funding for Miden blockchain project",
    link: "https://cointelegraph.com/news/miden-raises-25m-to-scale-zk-blockchain-after-polygon-spinout?utm_source=miden&utm_medium=website",
  },
  {
    label: "[crypto.news] Miden raises $25m to launch ‘Edge Blockchain’ for private, scalable apps",
    link: "https://crypto.news/miden-raises-25m-to-launch-edge-blockchain-for-private-scalable-apps?utm_source=miden&utm_medium=website",
  },
  {
    label: "[The Defiant] Miden secures $25M seed funding led by a16z, Hack VC, and 1kx for ZK-Rollup on Ethereum",
    link: "https://thedefiant.io/news/blockchains/miden-secures-25m-seed-funding-led-a16z-hack-vc-1kx-zk-rollup-on-ethereum-01e3c7ae?utm_source=miden&utm_medium=website",
  },
];

export const papers = [
  {
    label:
      "Generalized Indifferentiable Sponge and its Application to Polygon Miden VM",
    link: "https://eprint.iacr.org/2024/911",
  },
  {
    label: "XHash: Efficient STARK-friendly Hash Function",
    link: "https://eprint.iacr.org/2023/1045",
  },
  {
    label: "Rescue-Prime Optimized",
    link: "https://eprint.iacr.org/2022/1577",
  },
  {
    label: "Lattice-Based Cryptography in Miden VM",
    link: "https://eprint.iacr.org/2022/1041",
  },
  {
    label: "STARK-based Signatures from the RPO Permutation",
    link: "https://eprint.iacr.org/2024/1553",
  },
  {
    label: "A note on adding zero-knowledge to STARKs",
    link: "https://eprint.iacr.org/2024/1037",
  },
  {
    label: "Arithmetization Oriented Encryption",
    link: "https://eprint.iacr.org/2023/1668",
  },
];

export const talks = [
  {
    label:
      "Polygon Miden: A New VM for the ZK Future | Avail Whiteboard Series",
    link: "https://www.youtube.com/watch?v=QuLhkaszLtA&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=1&t=1s",
  },
  {
    label: "Privacy Scales Better by Dominik Schmid, Polygon | L2con Brussels",
    link: "https://www.youtube.com/watch?v=gmamoa8N_N0",
  },
  {
    label:
      "ZK Day at SBC - Workshop by Paul-Henry Kajfasz, Senior Protocol Engineer at Polygon Miden",
    link: "https://www.youtube.com/watch?v=RdeIx4LHb2A",
  },
  {
    label:
      "Provable Compliance on Polygon Miden and beyond / Anne-Grace Kleczewski",
    link: "https://www.youtube.com/watch?v=t6NQ8nFDMvg",
  },
  {
    label:
      "Mass adoption with private and asynchronous blockchains, by Bobbin Threadbare of Polygon Miden",
    link: "https://www.youtube.com/watch?v=pfX6T29TolY",
  },
  {
    label:
      "ZK HACK IV - Provable State Changes: Polygon Miden Transaction Kernel",
    link: "https://www.youtube.com/watch?v=V4fzsti11qU&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=7",
  },
  {
    label:
      "Miden & the Future of Privacy Preserving Protocols presented by Paul-Henry Kajfasz of Polygon Miden",
    link: "https://www.youtube.com/watch?v=GC4jR2rh-5U&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=13&t=3s",
  },
  {
    label: "09 Miden VM architecture overview",
    link: "https://www.youtube.com/watch?v=mO5ZDrjtb3I&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=17",
  },
  {
    label: "Miden: Ethereum Extended",
    link: "https://www.youtube.com/watch?v=FEh7mYASia4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=21",
  },
  {
    label: "Bobbin Threadbare - Miden VM: the heart of Polygon Miden",
    link: "https://www.youtube.com/watch?v=S2NfpC8cJog&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=18&t=1137s",
  },
  {
    label:
      "Polygon Miden: Extending Ethereum’s Feature Set | Dominik Schmid (April 2023)",
    link: "https://www.youtube.com/watch?v=jMTMidok9sA&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=19",
  },
  {
    label:
      "ZK7: Miden VM: a STARK-friendly VM for blockchains - Bobbin Threadbare – Polygon",
    link: "https://www.youtube.com/watch?v=81UAaiIgIYA&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=16",
  },
  {
    label:
      "ZK8: The power of multiset checks in STARK-based VMs - grjte - Polygon Miden",
    link: "https://www.youtube.com/watch?v=PA8jT_POYUo&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=2",
  },
  {
    label:
      "ZK9: AirScript - a simple and efficient way to write AIR constraints",
    link: "https://www.youtube.com/watch?v=PA8jT_POYUo&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=2",
  },
  {
    label: "ZK10: Optimizing recursive STARK verification in Polygon Miden VM",
    link: "https://www.youtube.com/watch?v=uL2J31dQfLI&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=4",
  },
  {
    label: "zkStudyClub: AirScript presented by Bobbin Threadbare",
    link: "/phklive/awesome-miden/blob/main",
  },
  {
    label:
      "ZK Whiteboard Sessions - Module Four: SNARKs vs STARKs with Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=qUrA97TG2YU&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=6",
  },
  {
    label:
      "ZK Whiteboard Sessions – Module Nine: Introduction to zkRollups with Barry Whitehat",
    link: "https://www.youtube.com/watch?v=lJS4z2n4P1E&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=8",
  },
  {
    label:
      "ZK Whiteboard Sessions – Module Eight: Achieving Decentralised Private Computation",
    link: "https://www.youtube.com/watch?v=_oW29AOKWTs&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=9",
  },
  {
    label:
      "ZK Whiteboard Sessions – Module Seven: Zero Knowledge Virtual Machines (zkVM) with grjte",
    link: "https://www.youtube.com/watch?v=GRFPGJW0hic&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=10",
  },
  {
    label:
      "AirScript: a DSL for writing AIR constraints | Bobbin Threadbare | PROGCRYPTO",
    link: "https://www.youtube.com/watch?v=UxCW33hvnfc&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=11",
  },
  {
    label:
      "StarkWare Sessions 23 | AirScript: A DSL for Writing AIR Constraints | Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=8Rk2DOD4ba8&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=12",
  },
  {
    label: "Recursion in the Miden VM, by Augusto Hack of Polygon Miden",
    link: "https://www.youtube.com/watch?v=P1ZM6Ead6fo&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=14",
  },
  {
    label:
      "Polygon Miden VM | Avail's Hot Take Series: The Execution Race (EthDenver)",
    link: "https://www.youtube.com/watch?v=fl51Cer7-bY&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=15",
  },
  {
    label:
      "Using a Hybrid UTXO and Account-based State Model in a ZK Rollup by Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=TEPY19-hie4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=20",
  },
  {
    label: "Polygon Miden - a STARK based ZK Rollup",
    link: "https://www.youtube.com/watch?v=pLu7XeEN-f4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=22",
  },
  {
    label: "Episode 210: The Road to STARKs and Miden with Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=cpGb6daIKm4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=23",
  },
];

export default function RouteResources({
  loaderData: { posts },
}: Route.ComponentProps) {
  return <PageResources posts={posts} papers={papers} talks={talks} press={press} />;
}
