import { href, Link } from "react-router";
import { Container, Header, Wrapper } from "~/components/container";
import {
  Item,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "~/components/list";
import type { Item as ItemType } from "~/routes/ecosystem";
import { cn } from "~/lib/utils";

export type Partner = {
  icon: React.ReactNode;
  label: string;
  size?: "large" | "small";
  link?: string;
};

export function PageEcosystem({
  items,
  partners,
}: {
  items: ItemType[];
  partners: Partner[];
}) {
  return (
    <Container>
      <Header className="">
        <h2>Miden Pioneer program</h2>
        <p>
          The Miden Pioneer Program gives top teams critical support and funding
          to build the future of onchain economies.
        </p>
        <p>
          Created to expand the Miden ecosystem, this accelerator brings
          together venture funds, market makers, and technical support to help
          founders navigate the key stages of startup growth.
        </p>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              prefetch="intent"
              to={href("/ecosystem/program/pioneers")}
              className="text-primary underline underline-offset-2"
            >
              Learn more about our Pioneer program →{" "}
            </Link>
          </li>
          <li>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSep4KHHPR7N0Wp4kw9fcLl3w5oXtx8AooJOOYxBTY3WAtjSLA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              Apply to the Pioneer program →
            </Link>
            <br/><br/>
            <i>
              Note: we’re at full capacity at the moment and not onboarding new teams for now.
            </i>
          </li>
        </ul>
      </Header>

      <div className="mt-16">
        <Header>
          <h3 className="font-sans font-semibold text-2xl text-balance">
            Projects
          </h3>
        </Header>
        <br></br>
        <Wrapper>
          {items.map((item) => (
            <Item
              to={item.link}
              key={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ItemHeader>
                {item.icon}
                <ItemTitle>{item.label}</ItemTitle>
              </ItemHeader>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))}
        </Wrapper>
      </div>

      <div className="mt-16">
        <Header>
          <h3 className="font-sans font-semibold text-2xl text-balance">
            Partners
          </h3>
        </Header>
        <ul className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-6">
          {partners.map((p) => (
            <li
              key={p.label}
              className={cn(
                "flex items-center justify-center w-full h-24 border",
                p.size === "large" && "h-44",
              )}
            >
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                  aria-label={p.label}
                  title={p.label}
                >
                  {p.icon}
                </a>
              ) : (
                p.icon
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
