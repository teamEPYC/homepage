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

export function PageHomeGeist({
  items,
}: {
  items: Investor[];
}) {
  return (
    <Container className="flex-1 !mb-6" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
      <Header>
        <h2 className="font-bold text-3xl text-balance" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif', fontWeight: '600', fontSize: '1.875rem' }}>Miden is the Edge Blockchain</h2>
        <p style={{ fontSize: '16px !important', fontWeight: 'normal !important', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif !important' }}>
          Miden grants applications the power to scale with public and private
          transactions.
        </p>
        <p style={{ fontSize: '16px !important', fontWeight: 'normal !important', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif !important' }}>
          By pushing execution and state to the edge, on the client side, Miden
          overcomes the limitations of scalability, privacy and safety that
          hold back traditional blockchains.
        </p>
        <Link
          to="/developers"
          className="font-medium text-primary underline underline-offset-2"
        >
          Start Building →
        </Link>
      </Header>

      <div className="mt-16">
        <h2 className="font-bold text-2xl text-balance" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif', fontWeight: '600', fontSize: '1.5rem' }}>
          The way blockchains were always meant to work
        </h2>
        <ol className="flex flex-col gap-4 md:gap-6 mt-6 text-base font-geist" style={{ fontSize: '16px' }}>
          <li>
            <h4 className="mb-1 font-bold text-primary" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>It scales</h4>
            <p style={{ fontSize: '16px !important', fontWeight: 'normal !important', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif !important' }}>
              Miden allows users to execute and prove their own transactions
              with client-side proving, removing the need for re-execution.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-bold text-primary" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>It's private</h4>
            <p style={{ fontSize: '16px !important', fontWeight: 'normal !important', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif !important' }}>
              With edge execution and self-custodied state control, users keep
              full control of their data and transaction details.
            </p>
          </li>
          <li>
            <h4 className="mb-1 font-bold text-primary" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>It's safe</h4>
            <p style={{ fontSize: '16px !important', fontWeight: 'normal !important', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif !important' }}>
              Miden enables safe smart contract development with Rust and
              built-in account abstraction, while also minimizing attack surface
              with native asset storage for user accounts.
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-16">
        <h2 className="font-bold text-2xl text-balance" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif', fontWeight: '600', fontSize: '1.5rem' }}>
          Our investors
        </h2>
        <ul className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-6 font-geist">
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
