import { Container, Header, Wrapper } from "~/components/container";
import {
  Item,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "~/components/list";
import type { Item as ItemType } from "~/routes/developers";

export function PageDevelopers({ items }: { items: ItemType[] }) {
  return (
    <Container>
      <Header className="">
        <h2>Why build on Miden?</h2>
        <p>
          Miden lets builders create applications that combine scalability, privacy and compliance, overcoming the limitations of traditional blockchains.
        </p>
        <p>
          With local proving, self-custodied state, and Rust-native contracts, Miden gives builders
          a flexible, safe canvas for creating applications that weren’t possible before.
        </p>
        <p>
          Explore, test, learn: here are the key resources to get you started.
        </p>
      </Header>

      <div className="mt-16">
        <Wrapper>
          {items.map((item) => (
            <Item
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.label}
            >
              <ItemHeader>
                <ItemTitle>{item.label}</ItemTitle>
              </ItemHeader>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))}
        </Wrapper>
      </div>
    </Container>
  );
}
