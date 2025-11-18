import { Container} from "~/components/container";
import { RoadmapTimeline } from "~/components/roadmap-timeline";
import { roadmapData } from "~/lib/data-roadmap";

export function PageRoadmap() {
  return (
    <div className="flex-1">
      <Container>
        <div className="pb-4 mb-4 md:mb-6 flex flex-col gap-4 [&_p]:text-muted-foreground [&_p]:text-sm md:[&_p]:text-base [&_h1]:!text-5xl [&_h2]:!text-32 [&_h3]:!text-2xl [&_h2]:text-balance [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h1]:!font-semibold [&_h2]:!font-semibold [&_h3]:!font-bold max-w-[841px]">
          <h2 className="leading-none md:pb-0">Miden Roadmap</h2>
          <p>The Miden roadmap outlines major milestones and active areas of development across upcoming versions.</p>
        </div>

        <RoadmapTimeline versions={roadmapData.versions} />
      </Container>
    </div>
  );
}