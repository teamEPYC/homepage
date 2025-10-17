import { useState } from "react";
import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import { IconPaper, IconTalk } from "~/components/icons";
import { ListItem } from "~/components/list";
import type { Article } from "~/lib/data";

const LIMIT = 10;

export function PageResources({
  posts,
  papers,
  talks,
  press,
}: {
  posts: Article[];
  papers: { label: string; link: string }[];
  talks: { label: string; link: string }[];
  press: { label: string; link: string }[];
}) {
  const [showMorePosts, setShowMorePosts] = useState(false);
  const [showMorePapers, setShowMorePapers] = useState(false);
  const [showMoreTalks, setShowMoreTalks] = useState(false);
  const [showMorePress, setShowMorePress] = useState(false);

  return (
    
    <div className="relative flex-1 gap-6 xl:grid grid-cols-[1fr_848px_1fr] w-full w-miden max-w-[calc(848px+256px+256px) xl:max-w-full">
      <ul className="hidden top-0 sticky xl:flex flex-col ml-auto p-6 py-12 w-full max-w-3xs h-fit font-mono text-muted-foreground mt-16">
        {[
          { id: "press", label: "Press" },
          { id: "blog", label: "Blog" },
          { id: "talks", label: "Talks" },
          { id: "papers", label: "Research papers" },
        ].map((heading) => (
          <li key={heading.id}>
            <Link
              to={`#${heading.id}`}
              className="block py-1.5 hover:text-black text-balance transition-colors"
            >
              {heading.label}
            </Link>
          </li>
        ))}
      </ul>

      <Container className="flex-1">
      <Header>
        <h2 className="text-28 font-medium text-black mb-8">Publications</h2>
      </Header>
        {
          press.length > 0 && (
            <div className="mb-6">
              <h2 id="press" className="mb-4 !font-mono !font-medium text-2xl">
                <a aria-hidden="true" tabIndex={-1} href="#press">
                  <span className="icon icon-link" />
                </a>
                Press
              </h2>
              <ul className="flex flex-col">
                {press
                  .slice(0, showMorePress ? press.length : LIMIT)
                  .map((item) => {
                    const match = item.label.match(/^\[(.*?)\]\s*(.*)$/);
                    const source = match ? match[1] : "";
                    const text = match ? match[2] : item.label;

                    return (
                      <li key={item.label}>
                        <ListItem
                          to={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h4 className="!font-normal text-muted-foreground">
                            {source && (
                              <span className="text-primary mr-1.5">
                                {source}
                              </span>
                            )}
                            {text}
                          </h4>
                        </ListItem>
                      </li>
                    );
                  })}
              </ul>
              {press.length > LIMIT && !showMorePress && (
                <button
                  type="button"
                  onClick={() => setShowMorePress(true)}
                  className="block my-3 text-left underline underline-offset-2 text-primary"
                >
                  {">>"} Explore all PRESS
                </button>
              )}
            </div>
          )
        }

        {posts.length > 0 && (
          <div className="mb-6">
            <h2 id="blog" className="mb-4 !font-mono !font-medium text-2xl ">
              <a aria-hidden="true" tabIndex={-1} href="#blog">
                <span className="icon icon-link" />
              </a>
              Blog
            </h2>
            <ul className="flex flex-col">
              {posts
                .slice(0, showMorePosts ? posts.length : LIMIT)
                .map((item, index) => (
                  <li key={item.slug}>
                    <ListItem
                      to={`/resource/blog/${item.slug}`}
                      prefetch="intent"
                    >
                      <time className="text-primary">{item.date}</time>
                      <h4 className="!font-normal text-muted-foreground">
                        {item.title}
                      </h4>
                    </ListItem>
                  </li>
                ))}
            </ul>
            {posts.length > LIMIT && !showMorePosts && (
              <button
                type="button"
                onClick={() => setShowMorePosts(true)}
                className="block my-3 text-left underline underline-offset-2 text-primary"
              >
                {">>"} Explore more articles
              </button>
            )}
          </div>
        )}


        {talks.length > 0 && (
          <div className="mb-6">
            <h2 id="talks" className="mb-4 !font-mono !font-medium text-2xl">
              <a aria-hidden="true" tabIndex={-1} href="#talks">
                <span className="icon icon-link" />
              </a>
              Talks
            </h2>
            <ul className="flex flex-col">
              {talks
                .slice(0, showMoreTalks ? talks.length : LIMIT)
                .map((item) => (
                  <li key={item.label}>
                    <ListItem
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center items-center h-5 text-primary">
                        <IconTalk className="size-3.5" />
                      </div>
                      <h4 className="!font-normal text-muted-foreground">
                        {item.label}
                      </h4>
                    </ListItem>
                  </li>
                ))}
            </ul>
            {talks.length > LIMIT && !showMoreTalks && (
              <button
                type="button"
                onClick={() => setShowMoreTalks(true)}
                className="block my-3 text-left underline underline-offset-2 text-primary"
              >
                {">>"} Explore all talks
              </button>
            )}
          </div>
        )}


        {papers.length > 0 && (
          <div className="mb-6">
            <h2 id="papers" className="mb-4 !font-mono !font-medium text-2xl">
              <a aria-hidden="true" tabIndex={-1} href="#papers">
                <span className="icon icon-link" />
              </a>
              Research papers
            </h2>
            <ul className="flex flex-col">
              {papers
                .slice(0, showMorePapers ? papers.length : LIMIT)
                .map((item) => (
                  <li key={item.label}>
                    <ListItem
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center items-center h-5 text-primary">
                        <IconPaper className="size-3.5" />
                      </div>
                      <h4 className="!font-normal text-muted-foreground ">
                        {item.label}
                      </h4>
                    </ListItem>
                  </li>
                ))}
            </ul>
            {papers.length > LIMIT && !showMorePapers && (
              <button
                type="button"
                onClick={() => setShowMorePapers(true)}
                className="block my-3 text-left underline underline-offset-2 text-primary"
              >
                {">>"} Continue your research
              </button>
            )}
          </div>
        )}

      </Container>
    </div>
  );
}
