import { Link } from "react-router";
import type { RoadmapVersion } from "~/lib/data-roadmap";

interface RoadmapVersionProps {
  version: RoadmapVersion;
  isLast: boolean;
}

const MAX_FEATURES_DISPLAY = 6;

function calculateProgress(version: RoadmapVersion): number | null {
  if (version.releaseState === "planned") return null;

  const totalFeatures = version.features.length;
  if (totalFeatures === 0) return 0;

  const completedFeatures = version.features.filter(
    (f) => f.status === "complete"
  ).length;

  return Math.round((completedFeatures / totalFeatures) * 100);
}

function getReleaseDateInfo(version: RoadmapVersion) {
  if (version.releaseState === "released") {
    return {
      text: `Released on ${version.releaseDate}`,
      color: "text-green-2",
    };
  }

  if (version.releaseState === "upcoming") {
    return {
      text: `Set to release ${version.releaseDate}`,
      color: "text-blue-2",
    };
  }

  return {
    text: "Planned release date: TBD",
    color: "text-black/40",
  };
}

export function RoadmapVersion({ version }: RoadmapVersionProps) {
  const progress = calculateProgress(version);
  const dateInfo = getReleaseDateInfo(version);
  const displayFeatures = version.features.slice(0, MAX_FEATURES_DISPLAY);

  return (
    <article
      className="border-b !border-black/10 md:border-b-0 pb-4 md:pb-2 mb-4 md:mb-16 md:flex relative items-center justify-between text-2xl"
      aria-label={`Roadmap version ${version.version}`}
    >
      <div className="flex-shrink-0 flex-1 md:text-right mb-4 md:mb-0 md:pr-8 lg:pr-0 lg:mr-3">
        <h3 className="text-2xl md:text-32 font-bold text-black">
          {version.version}
        </h3>
        <p
          className={`text-xs md:text-base font-medium ${dateInfo.color}`}
          aria-label={`Release date: ${dateInfo.text}`}
        >
          {dateInfo.text}
        </p>
      </div>

      <div className="hidden lg:block w-full max-w-[217px] relative after:absolute after:top-1/2 after:left-0 after:w-full after:h-[1px] after:bg-black/20 after:z-0 after:content-['']">
        <div
          className="w-8 h-8 bg-primary rounded-[4px] m-auto relative z-[2]"
          aria-hidden="true"
        />
      </div>

      <div className="flex-1 relative w-full md:min-w-[388px]">
        <div className="bg-white border !border-black/20 rounded-[0.5px]">
          <ul className="space-y-2 md:space-y-3 list-disc py-4 px-2 pl-8">
            {displayFeatures.map((feature, index) => (
              <li
                key={`${version.version}-feature-${index}-${feature.title}`}
                className={` text-black text-sm md:text-base ${index !== displayFeatures.length - 1 ? "mb-4" : ""}`}
              >
                <span className="font-bold text-sm md:text-base leading-none">
                  {feature.title}
                </span>
                {feature.description}
              </li>
            ))}
          </ul>

          {version.releaseState === "released" && version.blogPostUrl && (
            <div className="py-4 px-2 text-center flex justify-center border-t !border-black/20">
              <Link
                to={version.blogPostUrl}
                target="_blank"
                className="text-sm text-black font-medium underline"
                aria-label={`Read blog post about ${version.version} release`}
              >
                Learn more by reading the blog post here
              </Link>
            </div>
          )}

          {version.releaseState === "planned" && (
            <div className="py-1 px-2 text-center border-t !border-black/20 bg-dark-gray-2">
              <p
                className="text-xs font-medium text-black"
                aria-label="Expected features for planned version"
              >
                Expected Features
              </p>
            </div>
          )}
        </div>

        {progress !== null && (
          <div
            className="relative border !border-black/10 bg-dark-gray-2 h-4 w-full"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="absolute h-4 top-[-1px] bg-primary z-[2]"
              style={{ width: `${progress}%` }}
            >
              <div
                className="h-full rounded transition-all duration-300"
                aria-hidden="true"
              >
                <p
                  className="text-center text-xs text-white h-full"
                  aria-label={`${progress}% complete`}
                >
                  {progress}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
