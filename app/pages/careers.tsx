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
            We’re building the future of private, scalable computation on the edge.
          </p>
          <p>We are looking for engineers who are looking for a place that will challenge them. We expect you to be able to turn around a medium-hard-level ticket in a few days, scope appropriately, have tight review cycles, and ship.</p>
        </div>

        <div className="mt-4 md:mt-10">
          <Wrapper>
            {Jobs.map((item) => (
              <Link
                key={item.slug}
                className="group flex flex-col justify-between py-4 border-t !border-gray-300/60"
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
