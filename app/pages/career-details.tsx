import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import type { Career } from "~/lib/data";

export default function PageCareerDetails({ job }: { job: Career }) {
  const Job = job;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="my-12">
      <div className="relative gap-6 px-6 xl:grid grid-cols-[1fr_848px_1fr] w-full w-miden max-w-[calc(848px+256px+256px) xl:max-w-full font-dm-mono">
        <ul className="hidden top-0 sticky xl:flex flex-col ml-auto px-6 w-full max-w-32 h-fit text-muted-foreground">
          <li>
            <Link to="/careers" className="block py-1.5 hover:text-primary text-balance transition-colors">
              <span className="block">↵ Back</span>
            </Link>
          </li>
        </ul>

        <div className="w-full">
          <div className="[&_span.author]:block prose-h1:m-0 [&_span.author]:mt-1 prose-h2:mt-8 [&_span.author]:mb-3 prose-h2:mb-4 prose-h2:pt-0 prose-h3:mb-3 prose-h1:first:pt-0 prose-headings:pt-6 [&_span.author]:pb-3 prose-h3:pb-3 [&_h1]:text-primary [&_h1]:text-2xl [&_h1]:md:text-xl [&_h1]:uppercase [&_h2]:text-primary [&_h2]:text-xl [&_h2]:uppercase [&_p]:text-black [&_p]:my-4 [&h1>a]:border-b prose-img:w-full max-w-full font-dm-mono prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium prose-h4:font-medium text-base prose-h4:text-base prose-h3:text-xl prose-h2:text-2xl prose-h1:text-4xl prose-h1:text-balance prose [&_p>span]:text-primary [&_p>span]:underline [&_strong]:font-medium [&_em>a]:text-primary [&_em]:mt-8 [&_em]:block [&_em>a]:no-underline md:mb-10">
            <h1>{Job.title}</h1>
            {Job.component && <Job.component />}
          </div>
        </div>
      </div>
    </div>
  );
}
