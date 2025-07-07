import { getFeaturedPosts } from "~/lib/posts.server";
import { PageResources } from "~/pages/resources";
import type { Route } from "./+types/resources";
import { buildMeta } from "~/lib/meta";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const posts = getFeaturedPosts();

  return {
    posts,
    url,
  };
}

export function meta({ data }: Route.MetaArgs) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Resources – Miden",
    description:
      "Miden is a privacy-focused execution layer for the modular blockchain stack.",
    url: canonical,
    image: `${data.url.origin}/images/home.png`,
  });
}

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
  return <PageResources posts={posts} papers={papers} talks={talks} />;
}
