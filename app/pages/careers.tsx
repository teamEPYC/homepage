import { Link } from "react-router";
import { Container, Wrapper } from "~/components/container";
import { ListItem } from "~/components/list";
import type { Career } from "~/lib/data";

export function PageCareers({ Jobs }: { Jobs: Career[] }) {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-6 [&_p]:text-muted-foreground [&_h2]:text-4xl [&_h2]:text-balance">
          <h2>Our Openings</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-6 font-bold">Hiring</div>
          <Wrapper>
            {Jobs.map((item, index) => (
              <Link
                key={item.slug}
                className="group flex flex-col justify-between py-6 border-t"
                to={`/career/${item.slug}`}
              >
                <span className="flex items-center gap-3">
                  <h4 className="group-hover:text-primary transition-colors">
                    {item.title} | {item.type}
                  </h4>
                </span>
                <p className="mt-4 text-muted-foreground">
                  Posted: {item.posted} | Department: {item.department} |
                  Experience: {item.experience} | Location: {item.location}
                </p>
              </Link>
            ))}
          </Wrapper>
        </div>
      </Container>
    </>
  );
}
