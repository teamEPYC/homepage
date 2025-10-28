import { Link } from "react-router";
import { Container, Wrapper } from "~/components/container";
import type { Career } from "~/lib/data";

export function PageCareers({ Jobs }: { Jobs: Career[] }) {
  return (
    <>
      <div className="my-12 flex-1">
        <div className="relative gap-6 px-6 xl:grid grid-cols-[1fr_848px_1fr] w-full w-miden max-w-[calc(848px+256px+256px) xl:max-w-full">
          <ul className="hidden top-0 sticky xl:flex flex-col ml-auto px-6 w-full max-w-32 h-fit text-muted-foreground">
            <li>
              <Link to="/about" className="block py-1.5 hover:text-primary text-balance transition-colors">
                <span className="block">↵ Back</span>
              </Link>
            </li>
          </ul>
          <Container className="!m-0 px-0 xl:px-6">
            <div className="flex flex-col gap-4 [&_p]:text-black [&_h2]:text-black [&_p]:text-sm [&_h3]:text-xl [&_h2]:text-2xl [&_h2]:text-balance [&_h1]:text-28 font-mono [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h4]:!font-sans [&_h1]:!font-semibold [&_h2]:!font-semibold [&_h3]:!font-bold [&_h4]:!font-semibold">
              <h1>Careers</h1>
              <p>
                Miden is the edge blockchain – private by default, scalable, built for real-world builders.
              </p>
              <p>
                We don’t have active openings right now, but we’re always interested in hearing from exceptional people who want to help build the future of the internet for private finance.
              </p>
              <p>
                If you think you belong at Miden, share your background and tell us what you’d like to build.
              </p>
            </div>

            <div className="mt-4 md:mt-10">
              <Wrapper>
                {Jobs.map((item) => (
                  <Link
                    key={item.slug}
                    className="group flex flex-col justify-between py-4 border-t !border-gray-300/60 hover:bg-secondary transition-colors duration-300 hover:duration-100"
                    to={`/career/${item.slug}`}
                  >
                    <span className="flex items-center gap-3">
                      <h4 className="transition-colors text-sm !font-medium md:!font-normal text-black">
                        {item.title}
                      </h4>
                    </span>

                    <ul className="mt-1 text-primary text-xs flex flex-wrap flex-row gap-2">
                      <li>{item.department}</li>
                      <li>• {item.location}</li>
                      <li>• {item.type} </li>
                    </ul>
                  </Link>
                ))}
              </Wrapper>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
