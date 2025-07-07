import { useState } from "react";
import { Container } from "~/components/container";
import { ListItem } from "~/components/list";
import type { PressItem } from "~/routes/press-release";

interface PagePressReleaseProps {
  press?: PressItem[];
  podcasts?: PressItem[];
}

const LIMIT = 3;

export function PagePressRelease({
  press = [],
  podcasts = [],
}: PagePressReleaseProps) {
  const [showMorePress, setShowMorePress] = useState(false);
  const [showMorePodcasts, setShowMorePodcasts] = useState(false);
  return (
    <Container className="flex-1">
      {press.length > 0 && (
        <div className="mb-6">
          <h2 id="blog" className="mb-3 !font-mono !font-medium text-2xl">
            <a aria-hidden="true" tabIndex={-1} href="#blog">
              <span className="icon icon-link" />
            </a>
            Press
          </h2>
          <ul className="flex flex-col">
            {press
              .slice(0, showMorePress ? press.length : LIMIT)
              .map((item) => (
                <li key={item.link}>
                  <ListItem to={`${item.link}`} prefetch="intent">
                    <p>
                      <time className="text-primary">{item.date}</time> |{" "}
                      {item.category}
                    </p>
                    <h4>{item.title}</h4>
                  </ListItem>
                </li>
              ))}
          </ul>
          {press.length > LIMIT && !showMorePress && (
            <button
              type="button"
              onClick={() => setShowMorePress(true)}
              className="block my-3 text-left underline underline-offset-2"
            >
              {">>"} Explore more press
            </button>
          )}
        </div>
      )}

      {podcasts.length > 0 && (
        <div className="mb-6">
          <h2 id="blog" className="mb-3 !font-mono !font-medium text-2xl">
            <a aria-hidden="true" tabIndex={-1} href="#blog">
              <span className="icon icon-link" />
            </a>
            Podcasts
          </h2>
          <ul className="flex flex-col">
            {podcasts
              .slice(0, showMorePodcasts ? podcasts.length : LIMIT)
              .map((item) => (
                <li key={item.link}>
                  <ListItem to={`${item.link}`} prefetch="intent">
                    <p>
                      <time className="text-primary">{item.date}</time> |{" "}
                      {item.category}
                    </p>
                    <h4>{item.title}</h4>
                  </ListItem>
                </li>
              ))}
          </ul>
          {podcasts.length > LIMIT && !showMorePodcasts && (
            <button
              type="button"
              onClick={() => setShowMorePodcasts(true)}
              className="block my-3 text-left underline underline-offset-2"
            >
              {">>"} Explore more podcasts
            </button>
          )}
        </div>
      )}
    </Container>
  );
}
