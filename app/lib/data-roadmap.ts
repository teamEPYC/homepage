export const roadmapData: RoadmapData = {
  versions: [
    {
      version: "v0.9",
      releaseState: "released",
      releaseDate: "20 May 2025",
      features: [
        {
          title: "Network accounts: ",
          description: "Accounts publicly visible onchain",
          status: "complete"
        },
        {
          title: "Storage map hashing: ",
          description: "Keys are hashed before insertion for safer storage",
          status: "complete"
        },
        {
          title: "Batch and block updates: ",
          description: "Blocks and batches now include transaction headers",
          status: "complete"
        },
        {
          title: "Developer tools: ",
          description: "Improved validation, debugging, and structured VM errors",
          status: "complete"
        }
      ]
    },    
    {
      version: "v0.10",
      releaseState: "released",
      releaseDate: "8 Jul 2025",
      features: [
        {
          title: "Advanced authentication: ",
          description: "Programmable auth stack with in-kernel deltas and per-procedure thresholds",
          status: "complete"
        },
        {
          title: "Flexible note construction: ",
          description: "Create and modify notes directly from scripts",
          status: "complete"
        },
        {
          title: "P2IDE notes: ",
          description: "New note type replacing P2IDR with time-locked notes",
          status: "complete"
        },
        {
          title: "ScriptBuilder: ",
          description: "Simplified API for building transactions and notes",
          status: "complete"
        }
      ]
    },
    {
      version: "v0.11",
      releaseState: "released",
      releaseDate: "26 Aug 2025",
      blogPostUrl: "/resource/blog/testnet-september-2025",
      features: [
        {
          title: "New address format: ",
          description: "Add Address struct for routing private notes to private accounts",
          status: "complete"
        },
        {
          title: "Private multisig: ",
          description: "First multisig component for shared control over private accounts",
          status: "complete"
        },
        {
          title: "Transaction summaries: ",
          description: "Enable offchain review and signing of state changes",
          status: "complete"
        },
        {
          title: "Async execution: ",
          description: "Non-blocking transaction flow for safer key handling",
          status: "complete"
        },
        {
          title: "Rust compiler: ",
          description: "Write and compile contracts and scripts in Rust",
          status: "complete"
        }
      ]
    },    
    {
      version: "v0.12",
      releaseState: "released",
      releaseDate: "13 Nov 2025",
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
          description: "Collection and storage of transaction data",
          status: "complete"
        },
        {
          title: "Address format: ",
          description: "New address format with public keys and interface info",
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
      releaseDate: "late Dec 2025",
      features: [
        {
          title: "Separate block building and proving: ",
          description: "Increase transaction throughput to 500 TPS",
          status: "not-begun"
        },
        {
          title: "User-defined batches: ",
          description: "Allow atomic transaction chains",
          status: "in-progress"
        },
        {
          title: "Agglayer bridging: ",
          description: "Bridge assets to Ethereum and Agglayer chains",
          status: "in-progress"
        },
        {
          title: "Network transaction improvements: ",
          description: "Public note creation and oracle calls",
          status: "in-progress"
        },
        {
          title: "Full Rust compiler: ",
          description: "Write any in-protocol code directly in Rust",
          status: "in-progress"
        },
        {
          title: "Long-running clients: ",
          description: "Clients sync automatically and react to events",
          status: "in-progress"
        }
      ]
    },
    {
      version: "v0.14",
      releaseState: "upcoming",
      releaseDate: "early Feb 2026",
      features: [
        {
          title: "Private multisig: ",
          description: "Integration of the Private State Management module",
          status: "not-begun"
        },
        {
          title: "Programmable assets: ",
          description: "Enable compliant, private stablecoins",
          status: "not-begun"
        },
        {
          title: "Agglayer settlement: ",
          description: "Block proof verification using the Agglayer",
          status: "not-begun"
        },
        {
          title: "midenup improvements: ",
          description: "Integrated testing and debugging in midenup",
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
      releaseState: "upcoming",
      releaseDate: "late Mar 2026",
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
