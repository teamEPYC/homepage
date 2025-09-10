import { ChevronLeft, ChevronRight } from "lucide-react";

interface RoadmapVersionNavProps {
  versions: string[];
  currentVersion: string;
  onVersionChange: (version: string) => void;
  roadmapData: any;
  activeItem?: string | null;
}

export function RoadmapVersionNav({
  versions,
  currentVersion,
  onVersionChange,
  roadmapData,
  activeItem,
}: RoadmapVersionNavProps) {
  const currentIndex = versions.indexOf(currentVersion);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === versions.length - 1;

  const handlePrevious = () => {
    if (!isFirst) {
      onVersionChange(versions[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      onVersionChange(versions[currentIndex + 1]);
    }
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className={`grid grid-cols-5 gap-0 overflow-hidden ${activeItem ? '' : 'border-b !border-black/5'}`}>
          <div className={`col-span-1 p-4 bg-muted/20 min-h-88 ${activeItem ? '' : 'border-r !border-black/5'}`}>
            <div className="flex items-center justify-center">
              <div className="w-28 h-10 flex items-center justify-center">
                <img src="/images/roadmap-logo.svg" alt="Roadmap Logo" className="w-full object-contain" width={107} height={40} />
              </div>
            </div>
          </div>

          {versions.map((version) => {
            const versionData = roadmapData.versions[version];
            const hasContent = versionData.categories.some((category: any) => category.items.length > 0);
            const isCurrent = version === currentVersion;

            return (
              <button
                key={version}
                onClick={() => onVersionChange(version)}
                className={`
                  col-span-1 p-4 transition-colors
                  ${activeItem ? '' : 'border-r !border-black/5 last:border-r-0'}
                  ${isCurrent
                    ? 'text-primary'
                    : 'text-muted-foreground/60'
                  }
                `}
                aria-label={`Version ${version}`}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-sm uppercase tracking-wider">
                    {version}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between mb-6 px-4">
        <button
          onClick={handlePrevious}
          disabled={isFirst}
          className={`p-2 rounded-full transition-colors ${isFirst
            ? 'text-muted-foreground/50 cursor-not-allowed'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          aria-label="Previous version"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">M</span>
          </div>
          <span className="font-medium text-lg">{currentVersion}</span>
        </div>

        <button
          onClick={handleNext}
          disabled={isLast}
          className={`p-2 rounded-full transition-colors ${isLast
            ? 'text-muted-foreground/50 cursor-not-allowed'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          aria-label="Next version"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
