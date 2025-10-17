import { motion } from "motion/react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { ListItem } from "~/components/list";
import { Navigation } from "~/components/navigation";
import type { Article } from "~/lib/data";
import { getEcosystem } from "~/lib/ecosystem.server";
import { getPaper } from "~/lib/papers.server";
import { getPost, getRelatedPosts } from "~/lib/posts.server";
import { getTalk } from "~/lib/talks.server";
import type { Route } from "./+types/resource";
import { buildMeta } from "~/lib/meta";

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

  let data: Article | undefined;

  switch (category) {
    case "blog": {
      data = getPost(slug);
      break;
    }
    case "papers": {
      data = getPaper(slug);
      break;
    }
    case "talks": {
      data = getTalk(slug);
      break;
    }
    case "ecosystem": {
      data = getEcosystem(slug);
      break;
    }
    default:
      throw new Response("Not found", { status: 404 });
  }
  if (!data) {
    throw new Response("Not found", { status: 404 });
  }

  const relatedPosts = getRelatedPosts(data.slug);

  return {
    data,
    category,
    relatedPosts,
    url: url,
  };
}

export function meta({ data }: Route.MetaArgs) {
  const { data: article } = data;
  const canonical = data.url.origin + data.url.pathname;

  return buildMeta({
    title: article?.title,
    description: article?.description,
    url: canonical,
    image: `${data.url.origin}/images/miden.webp`,
  });
}

export default function Layout({
  loaderData: { data, category, relatedPosts },
}: Route.ComponentProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <main className="flex flex-col mx-auto md:px-6 w-full min-h-dvh text-sm">
        <Navigation />
        <div className="my-12">
          <div className="relative gap-6 xl:grid grid-cols-[1fr_848px_1fr] w-full w-miden max-w-[calc(848px+256px+256px) xl:max-w-full font-inter">
            <ul className="hidden top-0 sticky xl:flex flex-col ml-auto p-6 w-full max-w-3xs h-fit text-muted-foreground">
              <li>
                <Link
                  to="/publications"
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
                      className="block truncate"
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
                    to={`/resource/${category}/${data.slug}#${heading.id}`}
                    className="block py-1.5 hover:text-black text-balance transition-colors"
                  >
                    {heading.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 w-full">
              <div className="[&_span.author]:block prose-h1:m-0 [&_span.author]:mt-1 prose-h2:mt-6 [&_span.author]:mb-3 prose-h2:mb-3 prose-h3:mb-3 prose-h1:first:pt-0 prose-headings:pt-6 [&_span.author]:pb-3 prose-h2:pb-3 prose-h3:pb-3 [&h1>a]:border-b prose-img:w-full max-w-full [&_*]:max-w-[800px] font-inter [&_span.author]:font-mono [&h1>a]:font-mono prose-h1:!font-sans prose-h2:!font-sans prose-h3:!font-sans prose-h4:!font-sans prose-h1:!font-semibold prose-h2:!font-semibold prose-h3:!font-bold prose-h4:!font-semibold text-sm prose-code:text-sm prose-code:font-inter prose-h1:!text-4xl prose-h2:!text-2xl prose-h3:!text-xl prose-h4:!text-lg prose-h1:text-balance leading-[170%] prose">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Container className="my-0 mb-12 text-sm">
        <h3 className="my-3 my-b font-mono font-medium">More blogs</h3>
        <ul className="flex flex-col">
          {relatedPosts.map((item) => (
            <li key={item.slug}>
              <ListItem to={`/resource/blog/${item.slug}`} prefetch="intent">
                <time className="text-primary">{item.date}</time>
                <h4 className="!font-normal text-muted-foreground truncate">
                  {item.title}
                </h4>
              </ListItem>
            </li>
          ))}
        </ul>
        <Link
          prefetch="intent"
          to="/publications"
          className="block my-3 underline underline-offset-2"
        >
          {">>"} Explore more articles
        </Link>
      </Container>
      <Footer />
    </>
  );
}
