export type FeatureStatus = 'complete' | 'in-progress' | 'not-begun';

export type ReleaseState = 'released' | 'upcoming' | 'planned';

export type RoadmapFeature = {
  title: string;
  description: string;
  status?: FeatureStatus;
};

export type RoadmapVersion = {
  version: string;
  releaseState: ReleaseState;
  releaseDate: string;
  features: RoadmapFeature[];
  blogPostUrl?: string;
};

export type RoadmapData = {
  versions: RoadmapVersion[];
};

export const roadmapData: RoadmapData = {
  versions: [
    {
      version: "v0.12",
      releaseState: "released",
      releaseDate: "12 Nov 2025",
      features: [
        {
          title: "Private note routing: ",
          description: "a canonical transport layer for private notes",
          status: "complete"
        },
        {
          title: "ECDSA signatures: ",
          description: "signing transactions using ECDSA",
          status: "complete"
        },
        {
          title: "Basic guardrails: ",
          description: "implement collection and storage of underlying transaction data for transactions",
          status: "complete"
        },
        {
          title: "Address format: ",
          description: "a new Address format including public keys and interface information",
          status: "complete"
        },
        {
          title: "midenup: ",
          description: "Miden toolchain installer and project structure",
          status: "complete"
        }
      ]
    },
    {
      version: "v0.13",
      releaseState: "upcoming",
      releaseDate: "12 Jan 2025",
      features: [
        {
          title: "Separate block building and proving: ",
          description: "increasing transaction throughput to 500 TPS",
          status: "in-progress"
        },
        {
          title: "User defined-batches: ",
          description: "allowing atomic transaction chains",
          status: "in-progress"
        },
        {
          title: "AggLayer bridging: ",
          description: "bridge assets to Ethereum and AggLayer chains",
          status: "in-progress"
        },
        {
          title: "Network transaction improvement: ",
          description: "Public note creation and oracle calls for network transactions",
          status: "in-progress"
        },
        {
          title: "Full Rust compiler: ",
          description: "code anything that is allowed in-protocol in Rust",
          status: "in-progress"
        },
        {
          title: "Long running clients: ",
          description: "Miden clients can sync automatically and react to predefined events",
          status: "in-progress"
        }
      ]
    },
    {
      version: "v0.14",
      releaseState: "planned",
      releaseDate: "Feb 2026",
      features: [
        {
          title: "Private mutlisig: ",
          description: "integration of the private state management module for private multisigs",
          status: "not-begun"
        },
        {
          title: "Programmable assets: ",
          description: "build compliant, private stablecoins",
          status: "not-begun"
        },
        {
          title: "AggLayer settlement: ",
          description: "block proof verification using the AggLayer",
          status: "not-begun"
        },
        {
          title: "midenup improvements: ",
          description: "integrated testing and debugging using midenup",
          status: "not-begun"
        },
        {
          title: "Transaction fees: ",
          description: "exposing transaction fees to users",
          status: "not-begun"
        }
      ]
    },
    {
      version: "v0.15",
      releaseState: "planned",
      releaseDate: "Mar/Apr 2026",
      features: [
        {
          title: "Mainnet: ",
          description: "Mainnet launch",
          status: "not-begun"
        }
      ]
    }
  ]
};
