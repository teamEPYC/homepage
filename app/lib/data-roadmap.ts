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
          title: "Compiler & Toolchain",
          items: [
            {
              id: "basic-compiler",
              title: "Write basic contracts in Rust",
              content: "For the first time, developers can now write a full Miden accountm a note and transaction script in Rust, and successfully compile them all the way down to Miden Assembly.",
              grid: 2
            },
            {
              id: "use-midenup",
              title: "midenup",
              content: "midenup is the the Miden toolchain installer. It installs all components to test, run and interact with Miden programs, locally and on the network",
              grid: 3
            },
            {
              id: "testing-framework",
              title: "Integrated testing framework",
              content: "A comprehensive integrated testing framework for Miden smart contracts to improve development workflow and code quality.",
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
              content: "Support the ability for users to submit proven batches of transactions (rather than individual transactions). This enables atomic execution of multiple transactions - that is, all transactions in a batch must be applied to the chain state as a single unit.",
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
              content: "Implement robust retry mechanisms for failed network transactions to improve reliability and user experience. This includes exponential backoff, circuit breakers, and intelligent retry logic.",
              grid: 2
            },
            {
              id: "fpi-network-tx",
              title: "FPI and public notes for network tx",
              content: "Implement FPI (Foreign Procedure Invocation) for network transactions to allow network notes and accounts to read foreign account data (oracles) during transaction execution. Also, allow issuance of public and network notes as a result of network transactions.",
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
              content: "Introduce a new address format. Accounts can have several addresses and encode interface and public key information into the address. This will improve the security and anonymity of private transactions on the Miden network.",
              grid: 2
            },
            {
              id: "private-note-distribution-v12",
              title: "Canonical private note distribution",
              content: "Implement reliable, secure and encrypted distribution mechanisms for private notes.",
              grid: 3
            }
          ]
        },
        {
          id: "private-multisig-support",
          title: "Private multi-sig support",
          items: [
            {
              id: "multisig-auth-component",
              title: "Multisig auth component",
              content: "Add protocol support for private multi-signature wallets with transaction introspection. The core is to allow the Transaction Kernel to result in a proposed TransactionSummary instead of a proof. The summary can then be signed by the threshold.",
              grid: 2
            },
            {
              id: "public-multisig",
              title: "Public multisig",
              content: "End-to-end multi-sig support on Miden including a user-friendly interface. There is a server for offchain communication to orchestrate the signing process.",
              grid: 3
            },
            {
              id: "private-state-management",
              title: "Private Multisig",
              content: "Implement private state management capabilities to allow secure private multi-sigs with customisable signature thresholds per procedure - really cool stuff.",
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
              title: "Asynchronous tx execution",
              content: "Implement asynchronous transaction execution to improve performance and user experience. This will allow for better handling of complex account operations and key management workflows.",
              grid: 2
            },
            {
              id: "named-storage-slots",
              title: "Named storage slots",
              content: "Implement named storage slots for better account organization and add support for synchronizing large accounts efficiently to improve performance and user experience.",
              grid: 3
            },
            {
              id: "general-purpose-auth",
              title: "General purpose authentication & basic social recovery",
              content: "Add general purpose authentication mechanisms and basic social reovery for enhanced account security and flexibility.",
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
              title: "Standards for fungible tokens + NFTs",
              content: "Develop comprehensive standards for fungible and non-fungible tokens to ensure interoperability and consistency across the Miden ecosystem.",
              grid: 3
            },
            {
              id: "programmable-assets",
              title: "Programmable assets",
              content: "Develop programmable asset capabilities that allow for custom logic and behavior within asset contracts - this will allow compliant and private stable coin payments",
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
              content: "Add ECDSA and Keccak precompiles (without proof generation) to support additional cryptographic operations and improve compatibility.",
              grid: 3
            },
            {
              id: "ecdsa-keccak-with-proof",
              title: "Full Precompile Support: ECDSA & Keccak",
              content: "Complete ECDSA and Keccak precompile implementation with full proof generation capabilities for enhanced security and compatibility.",
              grid: 5
            }
          ]
        },
        {
          id: "block-building-settlement",
          title: "Block building and settlement",
          items: [
            {
              id: "agglayer-contracts",
              title: "AggLayer bridge contracts",
              content: "Implement AggLayer contracts to connect Miden to Ethereum.",
              grid: 3
            },
            {
              id: "fast-block-building",
              title: "Fast block building",
              content: "Separate block proving and sequencing such that blocks can be constructed without requiring ZKPs validating the correctness of block construction. The ZKPs will be appended to the blocks at a later point in time, but before blocks are sent to the L1 ",
              grid: 4
            },
            {
              id: "batch-block-kernel",
              title: "Batch and Block MASM kernel & DA layer integration",
              content: "Implement batch/block kernel functionality using recursive verification for improved performance. Integrate AggLayer with Data Availability (DA) layer for improved scalability, security, and data availability guarantees.",
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
              title: "Add fees to protocol",
              content: "Implement a comprehensive fee structure for the Miden protocol to ensure sustainable network operation and incentivize validators and network participants.",
              grid: 2
            },
            {
              id: "process-fees-in-blocks",
              title: "Process fees in blocks",
              content: "Implement fee processing within blocks to ensure proper fee collection and distribution across the network.",
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
              title: "PLONKY3 instead of Winterfell",
              content: "Migrate from Winterfell to PLONKY3 proof system for improved performance, better security, and enhanced scalability.",
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