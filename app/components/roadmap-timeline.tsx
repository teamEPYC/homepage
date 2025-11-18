import { RoadmapVersion } from "./roadmap-version";
import type { RoadmapVersion as RoadmapVersionType } from "~/lib/data-roadmap";

interface RoadmapTimelineProps {
  versions: RoadmapVersionType[];
}

export function RoadmapTimeline({ versions }: RoadmapTimelineProps) {
  if (versions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No roadmap versions available.</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-[841px]" role="list" aria-label="Miden development roadmap timeline">
      <div
        className="hidden lg:block absolute top-4 bottom-0 w-[1px] bg-black/20 left-[38%]"
        aria-hidden="true"
      />

      <div>
        {versions.map((version, index) => (
          <RoadmapVersion
            key={version.version}
            version={version}
            isLast={index === versions.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

