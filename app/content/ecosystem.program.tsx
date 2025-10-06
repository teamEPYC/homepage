import { motion } from "motion/react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";
import { getEcosystem } from "~/lib/ecosystem.server";
import type { Route } from "./+types/ecosystem.program";
import { buildMeta } from "~/lib/meta";
import type { LoaderData } from "~/lib/data";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname.split("/");

  const slug = pathname.pop();
  if (!slug) {
    return new Response("Not found", { status: 404 });
  }

  const category = pathname[pathname.length - 1];
  if (!category) {
    return new Response("Not found", { status: 404 });
  }

  const data = getEcosystem(slug);
  if (!data) {
    throw new Response("Not found", { status: 404 });
  }

  return { data, url };
}

export function meta({ data }: { data: LoaderData }) {
  const canonical = data.url.origin + data.url.pathname;
  return buildMeta({
    title: "Miden Pioneers",
    description:
      "Learn about the Miden Pioneer Program, supporting early builders with technical, financial, and business resources to create real-world applications on Miden.",
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

export default function Layout({ loaderData: { data } }: Route.ComponentProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <main className="flex flex-col mx-auto md:px-12 w-full min-h-dvh text-sm">
      <Navigation />
      <div className="my-12">
        <div className="relative gap-6 xl:grid grid-cols-[1fr_848px_1fr] w-full w-miden max-w-[calc(848px+256px+256px) xl:max-w-full font-dm-mono">
          <ul className="hidden top-0 sticky xl:flex flex-col ml-auto p-6 w-full max-w-3xs h-fit text-muted-foreground">
            <li>
              <Link
                to="ecosystem"
                className="flex items-center gap-1 py-1.5 overflow-hidden hover:text-black text-balance transition-colors"
                onMouseEnter={() => {
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
              >
                <motion.span className="block bg-white size-4">↵</motion.span>
                <motion.span
                  className="block"
                  transition={{
                    duration: isHovering ? 0.4 : 0.2,
                  }}
                  initial={{ opacity: 0, x: "-20%" }}
                  animate={{
                    opacity: isHovering ? 1 : 0,
                    x: isHovering ? 0 : "-20%",
                  }}
                >
                  <motion.span
                    className="block truncate uppercase"
                    initial={{ width: 65 }}
                    animate={{ width: isHovering ? 65 : 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    Go back
                  </motion.span>
                </motion.span>
              </Link>
            </li>
            {data.headings.map((heading) => (
              <li key={heading.id}>
                <Link
                  to={`/ecosystem/program/${data.slug}#${heading.id}`}
                  className="block py-1.5 hover:text-black text-balance transition-colors"
                >
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mb-3 px-6 w-full">
            <div className="[&_span.author]:block prose-h1:m-0 [&_span.author]:mt-1 prose-h2:mt-6 [&_span.author]:mb-3 prose-h2:mb-3 prose-h3:mb-3 prose-h1:first:pt-0 prose-headings:pt-6 [&_span.author]:pb-3 prose-h2:pb-3 prose-h3:pb-3 [&h1>a]:border-b prose-img:w-full max-w-full [&_*]:max-w-[600px] font-dm-mono [&_span.author]:font-mono [&h1>a]:font-mono prose-h1:font-semibold prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-semibold text-sm prose-h4:text-base prose-h3:text-xl prose-h2:text-2xl prose-h1:text-4xl prose-h1:text-balance leading-[170%] prose [&_h1]:uppercase">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
