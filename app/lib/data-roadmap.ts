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
      version: "v0.9",
      releaseState: "released",
      releaseDate: "May 20, 2025",
      blogPostUrl: "#",
      features: [
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        },
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        }
      ]
    },
    {
      version: "v0.10",
      releaseState: "upcoming",
      releaseDate: "May 20, 2026",
      features: [
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "in-progress"
        },
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts",
          status: "in-progress"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "not-begun"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "not-begun"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "not-begun"
        }
      ]
    },
    {
      version: "v0.11",
      releaseState: "planned",
      releaseDate: "TBD",
      features: [
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of"
        },
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts"
        }
      ]
    },
    {
      version: "v0.9",
      releaseState: "released",
      releaseDate: "May 20, 2025",
      blogPostUrl: "#",
      features: [
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        },
        {
          title: "Network accounts:",
          description: "introduced the concept of network accounts",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        },
        {
          title: "Note execution checker:",
          description: "implemented ability to check which notes out of a set of",
          status: "complete"
        }
      ]
    }
  ]
};
