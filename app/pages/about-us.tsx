import { href, Link } from "react-router";
import { Container, Header, Wrapper } from "~/components/container";
import Newsletter from "~/components/newsletter";

export function PageAboutUs() {
    return (
        <Container>
            <Header className="text-black [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h3]:text-2xl [&_p]:text-black">
                <h2>ABOUT</h2>
                <p>
                    Miden grants applications the power to scale with public and private transactions.
                </p>
                <p>
                    By pushing execution and state to the edge, on the client side, Miden overcomes the limitations of scalability, privacy and safety that hold back traditional blockchains.
                </p>
                <h3 className="mt-2">THE TEAM</h3>
                <p>The Miden team is a collective of engineers, cryptographers, and product thinkers pushing zero-knowledge tech to the edge — enabling secure, client-side execution without compromise.</p>
                <div className="mb-6 md:mb-10">
                    <img src="/images/about-us.png" alt="The Miden team" className="w-full object-contain" />
                </div>

                <div className="border-t !border-gray-300/60 pt-8 pb-2">
                    <h3 className="mb-6">MEDIA KIT</h3>
                    <p className="mb-6">A quick places for you to find brand and media assets</p>

                    <div className="mt-6">
                        <a href="#" className="text-primary/90 hover:text-primary italic underline text-base font-medium">CLICK HERE</a>
                    </div>
                </div>

                <div className="border-t !border-gray-300/60 pt-8 pb-2">
                    <h3 className="mb-6">CAREERS</h3>
                    <p className=" mb-6">We're always looking for the best talent in engineering, content, and research! Explore open roles and contribute to the future of the blockchain</p>
                    <div className="mt-6">
                        <a href="#" className="text-primary/90 hover:text-primary italic underline text-base font-medium">OPEN ROLES</a>
                    </div>
                </div>

                <div className="border-t !border-gray-300/60 pt-8 pb-2">
                    <h3 className="mb-6">CONTACT US</h3>
                    <p className=" mb-6">
                        Have any questions that you don't see answered here? Then please reach out to the team by emailing
                        <a href="mailto:contact@miden.team" className="text-primary/90 hover:text-primary font-medium"> contact@miden.team </a>
                        and put your reason for contacting in there.
                    </p>
                </div>

                <Newsletter />

            </Header>


        </Container>
    );
}
