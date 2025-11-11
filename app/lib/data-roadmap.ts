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
          description: "Canonical transport layer for private notes",
          status: "complete"
        },
        {
          title: "ECDSA signatures: ",
          description: "Support for signing transactions using ECDSA",
          status: "complete"
        },
        {
          title: "Basic guardrails: ",
          description: "Collection and storage of underlying transaction data",
          status: "complete"
        },
        {
          title: "Address format: ",
          description: "New address format including public keys and interface information",
          status: "complete"
        },
        {
          title: "midenup: ",
          description: "Miden toolchain installer and project scaffolding",
          status: "complete"
        }
      ]
    },
    {
      version: "v0.13",
      releaseState: "upcoming",
      releaseDate: "12 Jan 2026",
      features: [
        {
          title: "Separate block building and proving: ",
          description: "Increases transaction throughput to 500 TPS",
          status: "not-begun"
        },
        {
          title: "User-defined batches: ",
          description: "Allows atomic transaction chains",
          status: "in-progress"
        },
        {
          title: "Agglayer bridging: ",
          description: "Bridge assets to Ethereum and Agglayer chains",
          status: "in-progress"
        },
        {
          title: "Network transaction improvements: ",
          description: "Public note creation and oracle calls for network transactions",
          status: "in-progress"
        },
        {
          title: "Full Rust compiler: ",
          description: "Write any code allowed in-protocol directly in Rust",
          status: "in-progress"
        },
        {
          title: "Long-running clients: ",
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
          title: "Private multisig: ",
          description: "Integration of the Private State Management module for private multisigs",
          status: "not-begun"
        },
        {
          title: "Programmable assets: ",
          description: "Enable creation of compliant, private stablecoins",
          status: "not-begun"
        },
        {
          title: "Agglayer settlement: ",
          description: "Block proof verification using the Agglayer",
          status: "not-begun"
        },
        {
          title: "midenup improvements: ",
          description: "Integrated testing and debugging within midenup",
          status: "not-begun"
        },
        {
          title: "Transaction fees: ",
          description: "Expose transaction fees to users",
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
