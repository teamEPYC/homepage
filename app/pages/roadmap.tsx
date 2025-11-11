import { Container, Header } from "~/components/container";
import { RoadmapTimeline } from "~/components/roadmap-timeline";
import { roadmapData } from "~/lib/data-roadmap";

export function PageRoadmap() {
  return (
    <div className="flex-1">
      <Container className="max-w-[1248px]">
        <div className="border-b !border-black/10 md:border-b-0 pb-4 mb:pb-0 mb-4 md:mb-6 flex flex-col gap-4 [&_p]:text-muted-foreground [&_p]:text-sm md:[&_p]:text-base [&_h1]:!text-5xl [&_h2]:!text-32 [&_h3]:!text-2xl [&_h2]:text-balance [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h1]:!font-semibold [&_h2]:!font-semibold [&_h3]:!font-bold md:text-center">
          <h2 className="leading-none border-t md:border-b !border-black/5 pt-6 md:pt-2 md:pb-2">Miden Roadmap</h2>
          <p>The Miden roadmap outlines major milestones and active areas of development across upcoming versions.</p>
        </div>

        <RoadmapTimeline versions={roadmapData.versions} />
      </Container>
    </div>
  );
}