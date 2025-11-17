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
      </Header>

      <div className="mt-16">
        <Header>
          <h3 className="font-semibold text-xl text-balance">
            The power of blockchain, built for business
          </h3>
        </Header>

        <ol className="flex flex-col gap-6 mt-6 text-sm">
          <li>
            <h4 className="mb-1 font-mono font-bold text-primary">
              Customizable Privacy
            </h4>
            <p>
              Miden gives builders the choice between public and private transactions, enabling a new class of business applications.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-mono font-bold text-primary">
              Quantum Secure
            </h4>
            <p>
              Built with post-quantum cryptography, Miden is designed to future-proof your business onchain.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-mono font-bold text-primary">
              Regulation Ready
            </h4>
            <p>
              With programmable privacy at its core, Miden is ready for a future of regulatory clarity.
            </p>
          </li>
        </ol>

        <div className="mt-8">
          <Link
            to="/developers"
            className="font-medium font-bold text-primary underline underline-offset-2"
          >
            START BUILDING →
          </Link>
        </div>
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
