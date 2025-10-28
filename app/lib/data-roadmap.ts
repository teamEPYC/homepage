export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'complete' | 'in-progress' | 'not-begun';
  phase: 'pre-mainnet' | 'post-mainnet';
  developmentStatus?: string;
  developmentNote?: string;
  githubRepo?: string;
};

export type RoadmapCategory = {
  id: string;
  title: string;
  items: RoadmapItem[];
};

export type RoadmapData = {
  items: Record<string, RoadmapCategory>;
};

export const roadmapData: RoadmapData = {
  items: {
    // -------------------------------------------------
    // Compiler & Toolchain
    // -------------------------------------------------
    "compiler & toolchain": {
      id: "compiler & toolchain",
      title: "Compiler & Toolchain",
      items: [
        {
          id: "midenup-installer",
          title: "Midenup installer",
          description:
            "Installs all components needed to test, run, and interact with Miden programs locally or on the network.",
          category: "Compiler & Toolchain",
          status: "complete",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/midenup"
        },
        {
          id: "full-compiler",
          title: "Full compiler",
          description:
            "The compiler targets the complete transaction kernel API so builders can write anything allowed by the protocol in Rust.",
          category: "Compiler & Toolchain",
          status: "complete",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/compiler/issues/304"
        },
        {
          id: "miden-debug",
          title: "Miden debug",
          description:
            "Debugger, Debug Adapter Protocol support, and richer debug info to reconstruct local variables at every program point.",
          category: "Compiler & Toolchain",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-debug"
        },
        {
          id: "integrated-testing",
          title: "Integrated testing",
          description:
            "A testing framework for Miden programs to streamline development workflow and improve code quality.",
          category: "Compiler & Toolchain",
          status: "in-progress",
          phase: "post-mainnet"
        },
        {
          id: "improved-ergonomics",
          title: "Improved ergonomics",
          description:
            "Improves the Rust compiler and crates to reduce boilerplate and make APIs more intuitive.",
          category: "Compiler & Toolchain",
          status: "not-begun",
          phase: "post-mainnet"
        },
        {
          id: "u256-arithmetic",
          title: "u256 arithmetic",
          description:
            "Adds support for 256-bit arithmetic in the Rust compiler to enable advanced DeFi applications.",
          category: "Compiler & Toolchain",
          status: "not-begun",
          phase: "post-mainnet"
        }
      ]
    },

    // -------------------------------------------------
    // Standards & Components
    // -------------------------------------------------
    "standards & components": {
      id: "standards & components",
      title: "Standards & Components",
      items: [
        {
          id: "private-multisig",
          title: "Private multisig",
          description:
            "A multisig standard for private Miden accounts. Private state management keeps signers in sync and coordinates signing.",
          category: "Standards & Components",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/MultiSig"
        },
        {
          id: "fungible-and-non-fungible-standards",
          title: "Fungible & non-fungible standards",
          description:
            "Miden’s ERC-20 and ERC-721 equivalents, enabling private, parallel, and compliant token and NFT transfers.",
          category: "Standards & Components",
          status: "in-progress",
          phase: "pre-mainnet"
        },
        {
          id: "ecdsa-eddsa-authentication",
          title: "ECDSA & EdDSA authentication",
          description:
            "Transaction authentication via widely used ECDSA and EdDSA signature schemes.",
          category: "Standards & Components",
          status: "in-progress",
          phase: "pre-mainnet"
        }
      ]
    },

    // -------------------------------------------------
    // Core Protocol
    // -------------------------------------------------
    "core protocol": {
      id: "core protocol",
      title: "Core Protocol",
      items: [
        {
          id: "named-storage-slots",
          title: "Named storage slots",
          description: "Allows storage slots to be referenced by user-defined names.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/discussions/1394"
        },
        {
          id: "basic-fees",
          title: "Basic fees",
          description:
            "Processes transaction fees within blocks to ensure proper collection and distribution.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/issues/1689"
        },
        {
          id: "create-public-notes-in-network-transactions",
          title: "Create public notes in network transactions",
          description:
            "Enables network transactions to produce public notes that emit further network notes, allowing automatic chains of execution.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-node/issues/1159"
        },
        {
          id: "harden-network-tx",
          title: "Harden network tx",
          description:
            "Adds foreign procedure invocation and robust retry mechanisms to improve reliability and user experience.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-node/issues/1192"
        },
        {
          id: "programmable-assets",
          title: "Programmable assets",
          description:
            "Framework for programmable assets enabling private and compliant transfers, such as stablecoins with custom transfer rules.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/discussions/1068"
        },
        {
          id: "note-metadata-refactoring",
          title: "Note metadata refactoring",
          description:
            "Refactors note metadata and tag schemas for improved structure and performance.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/discussions/1449"
        },
        {
          id: "batch-and-block-kernel",
          title: "Batch & block kernel",
          description:
            "Implements Miden Assembly kernels to build batches and blocks as executable programs for the VM.",
          category: "Core Protocol",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/issues/1122"
        },
        {
          id: "updatable-code",
          title: "Updatable code",
          description: "Enables code within Miden accounts to be updated after deployment.",
          category: "Core Protocol",
          status: "not-begun",
          phase: "post-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/discussions/1771"
        },
        {
          id: "updatable-authentication",
          title: "Updatable authentication",
          description:
            "Allows authentication procedures within Miden accounts to be updated securely over time.",
          category: "Core Protocol",
          status: "not-begun",
          phase: "post-mainnet"
        }
      ]
    },

    // -------------------------------------------------
    // Network & Bridging
    // -------------------------------------------------
    "network & bridging": {
      id: "network & bridging",
      title: "Network & Bridging",
      items: [
        {
          id: "private-state-management",
          title: "Private state management",
          description:
            "Manages private account state across multiple signers, ensuring all participants can create valid transactions.",
          category: "Network & Bridging",
          status: "in-progress",
          phase: "pre-mainnet"
        },
        {
          id: "private-note-transport",
          title: "Private note transport",
          description:
            "Implements a canonical encrypted client-to-client transport for full private note data, since only commitments are stored onchain.",
          category: "Network & Bridging",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-note-transport"
        },
        {
          id: "agglayer-bridge",
          title: "Agglayer bridge",
          description:
            "Integrates Miden contracts with the Agglayer bridge to support minting and burning of bridged assets.",
          category: "Network & Bridging",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-base/discussions/1676"
        },
        {
          id: "settling-to-ethereum",
          title: "Settling to Ethereum",
          description:
            "Submits block proofs to the Agglayer for verification and posts results to Ethereum to ensure L2 state validity.",
          category: "Network & Bridging",
          status: "in-progress",
          phase: "pre-mainnet"
        }
      ]
    },

    // -------------------------------------------------
    // VM & Crypto
    // -------------------------------------------------
    "vm & crypto": {
      id: "vm & crypto",
      title: "VM & Crypto",
      items: [
        {
          id: "ecdsa-eddsa-precompiles",
          title: "ECDSA & EdDSA precompiles",
          description:
            "Adds precompiles for ECDSA and EdDSA. The VM routes signatures to a host structure for elliptic-curve operations.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-vm/pull/2277"
        },
        {
          id: "debugging-improvements",
          title: "Debugging improvements",
          description:
            "Introduces debugging tools and improvements for Miden Assembly and the Rust compiler.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-vm/issues/1776"
        },
        {
          id: "call-from-syscall",
          title: "Call from syscall",
          description:
            "Enables calls and creation of new contexts from the kernel context, required for programmable assets and rule-based faucets.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-vm/issues/1681"
        },
        {
          id: "parallel-trace-generation",
          title: "Parallel trace generation",
          description:
            "Parallelizes trace generation to speed up proof creation.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-vm/issues/1558"
        },
        {
          id: "recursive-verification",
          title: "Recursive verification",
          description:
            "Runs the verifier inside the VM to generate a proof that verifies multiple smaller proofs.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet"
        },
        {
          id: "plonky3-migration",
          title: "Plonky3 migration",
          description:
            "Migrates from Winterfell to the Plonky3 proving library to improve performance and compatibility.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet",
          githubRepo: "https://github.com/0xMiden/miden-vm/tree/zz/migrate-plonky3"
        },
        {
          id: "precompile-proving",
          title: "Precompile proving",
          description: "Implements a dedicated VM for precompile proving.",
          category: "VM & Crypto",
          status: "in-progress",
          phase: "pre-mainnet"
        }
      ]
    },

    // -------------------------------------------------
    // Ecosystem Applications
    // -------------------------------------------------
    "ecosystem applications": {
      id: "ecosystem applications",
      title: "Ecosystem Applications",
      items: [
        {
          id: "private-payroll",
          title: "Private payroll",
          description: "Enables compliant private payroll and related financial applications.",
          category: "Ecosystem Applications",
          status: "in-progress",
          phase: "pre-mainnet"
        },
        {
          id: "private-hfamm",
          title: "Private hfAMM",
          description: "Implements a dark AMM (automated market maker) on Miden.",
          category: "Ecosystem Applications",
          status: "in-progress",
          phase: "pre-mainnet"
        },
        {
          id: "dome",
          title: "Dome",
          description: "Ecosystem application under exploration.",
          category: "Ecosystem Applications",
          status: "in-progress",
          phase: "pre-mainnet"
        }
      ]
    }
  }
};
