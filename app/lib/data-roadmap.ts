export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'complete' | 'in-progress' | 'not-begun';
  phase: 'pre-mainnet' | 'mainnet';
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
    "compiler & toolchain": {
      id: "compiler & toolchain",
      title: "Compiler & Toolchain",
      items: [
        {
          id: "midenup-installer",
          title: "Midenup Installer",
          description: "This milestone will allow the midenup installer to download instead of being Midendown",
          category: "Compiler + Toolchain",
          status: 'complete',
          phase: 'pre-mainnet',
          developmentStatus: "IN ACTIVE DEVELOPMENT BUT TESTABLE",
          developmentNote: "Active development is underway. Please check back for updates.",
          githubRepo: "https://github.com/0xPolygonMiden/midenup",
        },
        {
          id: "full-compiler",
          title: "Full Compiler",
          description: "Complete Rust-to-MASM compiler with advanced features and optimizations for production use.",
          category: "Compiler + Toolchain",
          status: 'complete',
          phase: 'pre-mainnet',
          githubRepo: "https://github.com/0xPolygonMiden/miden",
        },
        {
          id: "integrated-testing",
          title: "Integrated Testing",
          description: "Built-in framework for testing Miden scripts. Improves workflow and code quality.",
          category: "Compiler + Toolchain",
          status: 'complete',
          phase: 'pre-mainnet',
          githubRepo: "https://github.com/0xPolygonMiden/miden",
        },
        {
          id: "advanced-optimizations",
          title: "Advanced Optimizations",
          description: "Performance optimizations and advanced compiler features for production deployment.",
          category: "Compiler + Toolchain",
          status: 'in-progress',
          phase: 'pre-mainnet',
          developmentStatus: "IN ACTIVE DEVELOPMENT",
          developmentNote: "Currently being developed and tested."
        },
        {
          id: "production-ready",
          title: "Production Ready",
          description: "Full production-ready compiler with all features and comprehensive testing.",
          category: "Compiler + Toolchain",
          status: 'not-begun',
          phase: 'mainnet'
        },
        {
          id: "midenup-installer",
          title: "Midenup Installer",
          description: "This milestone will allow the midenup installer to download instead of being Midendown",
          category: "Compiler + Toolchain",
          status: 'in-progress',
          phase: 'pre-mainnet',
          developmentStatus: "IN ACTIVE DEVELOPMENT BUT TESTABLE",
          developmentNote: "Active development is underway. Please check back for updates.",
          githubRepo: "https://github.com/0xPolygonMiden/midenup",
        },
      ]
    },
    "standards and components": {
      id: "standards and components",
      title: "Standards and Components",
      items: [
        {
          id: "core-standards",
          title: "Core Standards",
          description: "Establish core standards for Miden components and interoperability.",
          category: "Standards and Components",
          status: 'complete',
          phase: 'pre-mainnet',
          githubRepo: "https://github.com/0xPolygonMiden/miden",
        },
        {
          id: "component-library",
          title: "Component Library",
          description: "Comprehensive library of reusable Miden components and modules.",
          category: "Standards and Components",
          status: 'complete',
          phase: 'pre-mainnet',
          githubRepo: "https://github.com/0xPolygonMiden/miden",
        },
        {
          id: "interoperability",
          title: "Interoperability",
          description: "Standards and tools for cross-platform interoperability.",
          category: "Standards and Components",
          status: 'in-progress',
          phase: 'pre-mainnet',
          developmentStatus: "IN ACTIVE DEVELOPMENT",
          developmentNote: "Currently being developed and tested."
        },
        {
          id: "documentation",
          title: "Documentation",
          description: "Comprehensive documentation and developer guides.",
          category: "Standards and Components",
          status: 'not-begun',
          phase: 'pre-mainnet'
        },
        {
          id: "certification",
          title: "Certification Program",
          description: "Component certification and validation program.",
          category: "Standards and Components",
          status: 'not-begun',
          phase: 'mainnet'
        }
      ]
    },
    "network & bridging": {
      id: "network & bridging",
      title: "Network & Bridging",
      items: [
        {
          id: "testnet-launch",
          title: "Testnet Launch",
          description: "Public testnet launch with core network functionality.",
          category: "Network & Bridging",
          status: 'complete',
          phase: 'pre-mainnet',
          githubRepo: "https://github.com/0xPolygonMiden/miden",
        },
        {
          id: "bridge-protocols",
          title: "Bridge Protocols",
          description: "Cross-chain bridging protocols and infrastructure.",
          category: "Network & Bridging",
          status: 'complete',
          phase: 'pre-mainnet',
          githubRepo: "https://github.com/0xPolygonMiden/miden",
        },
        {
          id: "network-optimization",
          title: "Network Optimization",
          description: "Performance optimizations and scalability improvements.",
          category: "Network & Bridging",
          status: 'in-progress',
          phase: 'pre-mainnet',
          developmentStatus: "IN ACTIVE DEVELOPMENT",
          developmentNote: "Currently being developed and tested."
        },
        {
          id: "mainnet-preparation",
          title: "Mainnet Preparation",
          description: "Final preparations and security audits for mainnet launch.",
          category: "Network & Bridging",
          status: 'not-begun',
          phase: 'pre-mainnet'
        },
        {
          id: "mainnet-launch",
          title: "Mainnet Launch",
          description: "Full mainnet launch with all features and production readiness.",
          category: "Network & Bridging",
          status: 'not-begun',
          phase: 'mainnet'
        }
      ]
    }
  }
};