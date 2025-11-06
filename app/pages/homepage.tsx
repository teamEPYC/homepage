import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import Newsletter from "~/components/newsletter";
import { cn } from "~/lib/utils";

export type Investor = {
  icon: React.ReactNode;
  label: string;
  size?: "large" | "small";
  link?: string;
};

export function PageHome({
  items,
}: {
  items: Investor[];
}) {
  return (
    <Container className="flex-1 !mb-6">
      <Header>
        <h2>Practical privacy for the future of finance</h2>
        <p>
          Miden is the programmable privacy network for the next generation of compliant finance.
        </p>
        <p>
          By moving execution and state offchain, Miden lets applications scale while keeping data private 
          and secure for real-world financial use.
        </p>
        <Link
          to="/developers"
          className="font-medium text-primary underline underline-offset-2"
        >
          Start building →
        </Link>
      </Header>

      <div className="mt-16">
        <Header>
          <h3 className="font-mono font-medium text-xl text-balance">
            The way blockchains were always meant to work
          </h3>
        </Header>
        <ol className="flex flex-col gap-4 md:gap-6 mt-6 text-sm">
          <li>
            <h4 className="mb-1 font-bold text-primary">It scales</h4>
            <p>
              Miden allows users to execute and prove their own transactions
              with client-side proving, and the network only verifies proofs. 
              No global re-execution, no bottlenecks.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-bold text-primary">It’s private</h4>
            <p>
            Unlike public chains where users’ data and transactions are visible, 
            Miden gives applications programmable privacy that can be tailored to 
            any regulatory model.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-bold text-primary">It’s safe</h4>
            <p>
            Privacy reduces exposure by limiting what’s ever made public. Combined 
            with Rust-based contracts and native account abstraction, Miden enables 
            secure application development.
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-16">
        <Header>
          <h3 className="font-mono font-semibold text-xl text-balance">
            Our investors
          </h3>
        </Header>
        <ul className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-6">
          {items.map((item) => (
            <li
              key={item.label}
              className={cn(
                "flex items-center justify-center w-full h-24 border",
                item.size === "large" && "h-44",
              )}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ) : (
                item.icon
              )}
            </li>
          ))}
        </ul>
      </div>


      <Newsletter />
    </Container>
  );
}
