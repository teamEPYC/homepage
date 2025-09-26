export type RoadmapItem = {
  id: string;
  title: string;
  content: string;
  grid: number;
};

export type RoadmapCategory = {
  id: string;
  title: string;
  items: RoadmapItem[];
};

export type RoadmapVersion = {
  categories: RoadmapCategory[];
};

export type RoadmapData = {
  versions: Record<string, RoadmapVersion>;
};

export const roadmapData: RoadmapData = {
  versions: {
    "v0.11": {
      categories: [
        {
          id: "compiler & toolchain",
          title: "Compiler & toolchain",
          items: [
            {
              id: "basic-compiler",
              title: "Rust compiler for basic scripts",
              content: "First usable Rust-to-MASM compiler. Provides support for writing Miden accounts, notes, and transaction scripts in Rust and compiling them into working Miden Assembly code.",
              grid: 2
            },
            {
              id: "use-midenup",
              title: "midenup installer",
              content: "Toolchain installer for Miden. Provides all components needed to test, run, and interact with Miden programs locally or on the network.",
              grid: 3
            },
            {
              id: "testing-framework",
              title: "Integrated testing framework",
              content: "Built-in framework for testing Miden scripts. Improves workflow and code quality.",
              grid: 5
            }
          ]
        },
        {
          id: "transactions",
          title: "Transactions",
          items: [
            {
              id: "atomic-transaction-chains",
              title: "Atomic transaction chains",
              content: "Support for proven batches of transactions instead of single transactions. Enables atomic execution, where all transactions in a batch are applied to chain state as a single unit.",
              grid: 2
            }
          ]
        },
        {
          id: "network-transactions",
          title: "Network transactions",
          items: [
            {
              id: "retry-strategies",
              title: "Retry strategies",
              content: "Robust retry mechanisms for failed network transactions. Includes exponential backoff, circuit breakers, and intelligent retry logic to improve reliability and user experience.",
              grid: 2
            },
            {
              id: "fpi-network-tx",
              title: "FPI & public notes",
              content: "Foreign Procedure Invocation in network transactions (i.e., using public notes), allowing accounts to read external data during execution. Also includes issuance of public and network notes as transaction outputs.",
              grid: 3
            },
          ]
        },
        {
          id: "private-note-distribution",
          title: "Private note distribution",
          items: [
            {
              id: "new-address-format",
              title: "New address format",
              content: "Address format with support for multiple addresses per account, embedding interface and public key information. Improves security and anonymity of private transactions.",
              grid: 2
            },
            {
              id: "private-note-distribution-v12",
              title: "Canonical private note distribution",
              content: "Reliable, secure, and encrypted distribution mechanisms for private notes.",
              grid: 3
            }
          ]
        },
        {
          id: "private-multisig-support",
          title: "Private multisig support",
          items: [
            {
              id: "multisig-auth-component",
              title: "Multisig auth component",
              content: "Protocol support for private multisig wallets with transaction introspection. The Transaction Kernel outputs a proposed TransactionSummary instead of a proof, which can then be signed by the threshold.",
              grid: 2
            },
            {
              id: "public-multisig",
              title: "Public multisig",
              content: "End-to-end multisig support on Miden, including a user-friendly interface. Includes an off-chain communication server to orchestrate the signing process.",
              grid: 3
            },
            {
              id: "private-state-management",
              title: "Private multisig",
              content: "Private state management for secure multisigs with customizable signature thresholds per procedure.",
              grid: 4
            },
          ]
        },
        {
          id: "accounts-key-management",
          title: "Accounts",
          items: [
            {
              id: "async-tx-execution",
              title: "Asynchronous transaction execution",
              content: "Asynchronous transaction execution for improved performance and user experience. Enables better handling of complex account operations and key management workflows.",
              grid: 2
            },
            {
              id: "named-storage-slots",
              title: "Named storage slots",
              content: "Named storage slots for clearer account organization, with support for synchronizing large accounts efficiently. Improves performance and user experience.",
              grid: 3
            },
            {
              id: "general-purpose-auth",
              title: "General purpose authentication & basic social recovery",
              content: "General purpose authentication mechanisms and basic social recovery for enhanced account security and flexibility.",
              grid: 4
            },
          ]
        },
        {
          id: "asset-improvements",
          title: "Assets",
          items: [
            {
              id: "standards-fungible-nfts",
              title: "Standards for fungible tokens & NFTs",
              content: "Standards for fungible and non-fungible tokens to ensure interoperability and consistency across the Miden ecosystem.",
              grid: 3
            },
            {
              id: "programmable-assets",
              title: "Programmable assets",
              content: "Programmable asset capabilities with custom logic and behavior in asset contracts. Enables compliant and private stablecoin payments.",
              grid: 4
            }
          ]
        },
        {
          id: "signing-hashing",
          title: "Signing & hashing",
          items: [
            {
              id: "ecdsa-keccak-no-proof",
              title: "Precompile support (no proof): ECDSA & Keccak",
              content: "ECDSA and Keccak precompiles without proof generation. Expands cryptographic operations and improves compatibility.",
              grid: 3
            },
            {
              id: "ecdsa-keccak-with-proof",
              title: "Full precompile support: ECDSA & Keccak",
              content: "Complete ECDSA and Keccak precompiles with proof generation. Enhances security and compatibility.",
              grid: 5
            }
          ]
        },
        {
          id: "block-building-settlement",
          title: "Block building & settlement",
          items: [
            {
              id: "agglayer-contracts",
              title: "Agglayer bridge contracts",
              content: "Agglayer contracts to connect Miden to Ethereum.",
              grid: 3
            },
            {
              id: "fast-block-building",
              title: "Fast block building",
              content: "Separation of block proving and sequencing so blocks can be constructed without immediate ZKP validation. Proofs are appended before blocks are sent to L1.",
              grid: 4
            },
            {
              id: "batch-block-kernel",
              title: "Batch-and-block MASM kernel & DA layer integration",
              content: "Kernel functionality at the batch and block levels using recursive verification. Integration of Agglayer with a Data Availability (DA) layer for scalability, security, and data availability guarantees.",
              grid: 5
            },
          ]
        },
        {
          id: "fees-v1",
          title: "Fees v1",
          items: [
            {
              id: "add-fees-to-protocol",
              title: "Protocol fees",
              content: "Comprehensive fee structure for the Miden protocol to support sustainable network operation and incentivize participants.",
              grid: 2
            },
            {
              id: "process-fees-in-blocks",
              title: "Fee processing in blocks",
              content: "In-block fee collection and distribution across the network.",
              grid: 3
            }
          ]
        },
        {
          id: "proof-system",
          title: "Proof system",
          items: [
            {
              id: "plonky3-instead-winterfell",
              title: "Plonky3 (replacing Winterfell)",
              content: "Migration from Winterfell to the Plonky3 proof system for improved performance, security, and scalability.",
              grid: 4
            }
          ]
        }
      ]
    },
    "v0.12": {
      categories: []
    },
    "v0.13": {
      categories: []
    },
    "v0.14": {
      categories: []
    }
  }
};