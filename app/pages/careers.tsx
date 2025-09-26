import { Link } from "react-router";
import { Container, Wrapper } from "~/components/container";
import type { Career } from "~/lib/data";

export function PageCareers({ Jobs }: { Jobs: Career[] }) {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-4 [&_p]:text-black [&_h2]:text-black [&_p]:text-base [&_h2]:text-4xl [&_h2]:text-balance">
          <h2>CAREERS</h2>
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
                  <h4 className="uppercase transition-colors text-base !font-medium md:!font-normal text-black">
                    {item.title}
                  </h4>
                </span>

                <ul className="mt-1 text-primary text-xs flex flex-row gap-2">
                  <li>{item.department}</li>
                  <li>• {item.location}</li>
                  <li>• {item.type} </li>
                </ul>
              </Link>
            ))}
          </Wrapper>
        </div>
      </Container>
    </>
  );
}
