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
    <div className="relative max-w-[977px] m-auto md:pt-5" role="list" aria-label="Miden development roadmap timeline">
      <div
        className="hidden lg:block absolute top-0 bottom-0 w-[1px] bg-black/20 left-[49.2%]"
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

