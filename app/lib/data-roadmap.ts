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
          id: "compiler",
          title: "Compiler",
          items: [
            {
              id: "compiler-v011",
              title: "Write acct, note, & tx script in Rust",
              content: "Implement robust compiler improvements to enable writing account, note, and transaction scripts directly in Rust. This will provide better developer experience and performance optimizations for Miden's smart contract system.",
              grid: 2
            },
            {
              id: "compiler-improvements",
              title: "Compiler improvements",
              content: "Major compiler improvements including better optimization passes, enhanced error reporting, and improved developer tooling experience.",
              grid: 3
            },
            {
              id: "use-midenup",
              title: "Use Midenup",
              content: "Integrate with Midenup for improved developer tooling experience and better development workflow.",
              grid: 3
            },
            {
              id: "testing-framework",
              title: "Integrated testing framework",
              content: "Develop a comprehensive integrated testing framework for Miden smart contracts to improve development workflow and code quality.",
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
              content: "Develop atomic transaction chains to ensure that multiple transactions can be executed as a single unit, providing better consistency and reliability for complex operations.",
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
              title: "FPI for network tx",
              content: "Implement FPI (Fast Payment Interface) for network transactions to improve speed and efficiency.",
              grid: 3
            },
            {
              id: "actor-based-tx",
              title: "Actor-based tx",
              content: "Introduce actor-based transaction models for improved scalability and performance.",
              grid: 3
            },
            {
              id: "public-notes-sending",
              title: "Public notes sending out",
              content: "Implement public notes sending capabilities for enhanced transparency and communication.",
              grid: 3
            },
            {
              id: "specify-notes-per-account",
              title: "Specify notes per given network account",
              content: "Add capability to specify and manage notes per network account for improved organization and transaction management.",
              grid: 4
            }
          ]
        },
        {
          id: "private-note-distribution",
          title: "Private note distribution",
          items: [
            {
              id: "new-address-format",
              title: "New address format",
              content: "Introduce a new address format that provides enhanced privacy features for note distribution. This will improve the security and anonymity of private transactions on the Miden network.",
              grid: 2
            },
            {
              id: "encryption",
              title: "Encryption",
              content: "Add comprehensive encryption support for private note distribution and implement secure distribution mechanisms for enhanced privacy.",
              grid: 3
            },
            {
              id: "private-note-distribution-v12",
              title: "Private note distribution",
              content: "Implement secure distribution mechanisms for enhanced privacy in note distribution.",
              grid: 3
            }
          ]
        },
        {
          id: "private-multisig-support",
          title: "Private multi-sig support",
          items: [
            {
              id: "get-transaction-summary",
              title: "Get transaction summary",
              content: "Add support for getting transaction summaries for enhanced security and transparency.",
              grid: 2
            },
            {
              id: "introspect-tx-runtime",
              title: "Introspect tx during runtime",
              content: "Implement transaction introspection capabilities during runtime for enhanced security and debugging.",
              grid: 2
            },
            {
              id: "multisig-auth-component",
              title: "Multisig auth component",
              content: "Add support for private multi-signature wallets with transaction introspection capabilities for enhanced security.",
              grid: 2
            },
            {
              id: "public-multisig",
              title: "Public multisig",
              content: "Extend multi-signature support to include public multi-signature wallets with enhanced security features and user-friendly interfaces.",
              grid: 3
            },
            {
              id: "private-state-management",
              title: "Private state management",
              content: "Implement private state management capabilities for enhanced privacy and security.",
              grid: 4
            },
            {
              id: "private-multisig-v13",
              title: "Private multisig",
              content: "Extend multi-signature support to include private multi-signature operations for enhanced security.",
              grid: 4
            }
          ]
        },
        {
          id: "accounts-key-management",
          title: "Accounts + key management improvements",
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
              content: "Implement named storage slots for better account organization and improved data management.",
              grid: 3
            },
            {
              id: "sync-large-accounts",
              title: "Sync large accounts",
              content: "Add support for synchronizing large accounts efficiently to improve performance and user experience.",
              grid: 3
            },
            {
              id: "general-purpose-auth",
              title: "General purpose authentication",
              content: "Add general purpose authentication mechanisms for enhanced account security and flexibility.",
              grid: 4
            },
            {
              id: "basic-social-recovery",
              title: "Basic social recovery",
              content: "Implement basic social recovery features for enhanced account security and user experience.",
              grid: 4
            }
          ]
        },
        {
          id: "asset-improvements",
          title: "Asset improvements",
          items: [
            {
              id: "standards-fungible-nfts",
              title: "Standards for fungible + NFTs",
              content: "Develop comprehensive standards for fungible and non-fungible tokens to ensure interoperability and consistency across the Miden ecosystem.",
              grid: 3
            },
            {
              id: "programmable-assets",
              title: "Programmable assets",
              content: "Develop programmable asset capabilities that allow for custom logic and behavior within asset contracts.",
              grid: 4
            }
          ]
        },
        {
          id: "block-building-settlement",
          title: "Block building and settlement",
          items: [
            {
              id: "agglayer-contracts",
              title: "AggLayer contracts",
              content: "Implement AggLayer contracts for improved scalability and enhanced performance.",
              grid: 3
            },
            {
              id: "test-bridging",
              title: "Test bridging",
              content: "Implement and test bridging functionality for improved interoperability.",
              grid: 3
            },
            {
              id: "recursive-verification",
              title: "Recursive verification",
              content: "Add recursive verification capabilities for enhanced security and performance.",
              grid: 3
            },
            {
              id: "fast-block-building",
              title: "Fast block building",
              content: "Implement fast block building algorithms and optimizations to reduce block construction time and improve network throughput.",
              grid: 4
            },
            {
              id: "bridge-to-ethereum",
              title: "Bridge to Ethereum",
              content: "Implement a secure bridge to Ethereum for improved interoperability and performance.",
              grid: 5
            },
            {
              id: "batch-block-kernel",
              title: "Batch/block kernel",
              content: "Develop batch/block kernel functionality for improved performance and efficiency.",
              grid: 5
            },
            {
              id: "agglayer-da-integration",
              title: "AggLayer + DA layer integration",
              content: "Integrate AggLayer with Data Availability (DA) layer for improved scalability, security, and data availability guarantees.",
              grid: 5
            }
          ]
        },
        {
          id: "signing-hashing",
          title: "Signing & hashing",
          items: [
            {
              id: "ecdsa-keccak-no-proof",
              title: "ECDSA & Keccak (precompile no proof)",
              content: "Add ECDSA and Keccak precompiles (without proof generation) to support additional cryptographic operations and improve compatibility.",
              grid: 3
            },
            {
              id: "agglayer-contracts-signing",
              title: "AggLayer contracts",
              content: "Integrate signing and hashing operations with AggLayer contracts for improved scalability and performance.",
              grid: 4
            },
            {
              id: "ecdsa-keccak-with-proof",
              title: "ECDSA & Keccak (precompile proof)",
              content: "Complete ECDSA and Keccak precompile implementation with full proof generation capabilities for enhanced security and compatibility.",
              grid: 5
            }
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
