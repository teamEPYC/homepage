import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import Newsletter from "~/components/newsletter";

export function PageAboutUs() {
    return (
        <Container className="!mb-6">
            <Header className="text-black [&_p]:text-black">
                <h2>About</h2>
                <p>
                    Miden brings practical privacy to web3, combining high throughput, private transactions 
                    and verifiable computation.
                </p>
                <p>
                It’s designed to power the next generation of financial applications that demand both privacy 
                and compliance.
                </p>
                <h3 className="mt-2">The team</h3>
                <p>
                    We’re engineers, cryptographers and product thinkers focused on making privacy usable, turning advanced research into robust infrastructure for modern finance.
                </p>
                <div className="mb-6 md:mb-10">
                    <img src="/images/about-us.png" alt="The Miden team" className="w-full object-contain" width={800} height={169} />
                </div>



                <div className="border-t !border-gray-300/60 py-4 md:py-8 text-black [&_p]:text-sm [&_h3]:text-xl [&_h2]:text-2xl [&_h1]:text-28">
                    <h3 className="mb-4">Media kit</h3>
                    <p className="mb-4">A quick places for you to find brand and media assets.</p>

                    <div className="mt-6">
                        <Link to="https://drive.google.com/drive/folders/1jRxP0LtQHwO389h5vfysigNTSkuuGBKa?usp=drive_link" target="_blank" className="text-primary/90 hover:text-primary underline text-sm font-medium">Click here</Link>
                    </div>
                </div>

                <div className="border-t !border-gray-300/60 py-4 md:py-8 text-black [&_p]:text-sm [&_h3]:text-xl [&_h2]:text-2xl [&_h1]:text-28">
                    <h3 className="mb-4">Careers</h3>
                    <p className="mb-4">We're always looking for the best talent in engineering, content, and research! Explore open roles and contribute to the future of the blockchain.</p>
                    <div className="mt-6">
                        <Link to="/careers" prefetch="intent" className="text-primary/90 hover:text-primary underline text-sm font-medium">Open roles</Link>
                    </div>
                </div>

                <div className="border-t !border-gray-300/60 pt-8 text-black [&_p]:text-sm [&_h3]:text-xl [&_h2]:text-2xl [&_h1]:text-28">
                    <h3 className="mb-4">Contact us</h3>
                    <p>
                        Have any questions that you don't see answered here? Then please reach out to the team
                        by emailing <Link to="mailto:contact@miden.team" className="text-primary/90 underline hover:text-primary font-medium">contact@miden.team</Link> and
                        put your reason for contacting in there.
                    </p>
                </div>
            </Header>

            <Newsletter />


        </Container>
    );
}
