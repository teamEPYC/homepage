import type { LoaderData } from "~/lib/data";
import { buildMeta } from "~/lib/meta";
import { PageAboutUs } from "~/pages/about-us";


export function loader({ request }: { request: Request }): LoaderData {
    const url = new URL(request.url);
    return {
        url,
    };
}

export function meta({ data }: { data: LoaderData }) {
    const canonical = data.url.origin + data.url.pathname;
    return buildMeta({
        title: "About Miden",
        description:
            "Learn about Miden’s mission, technology, and the team building the Edge Blockchain for scalable, privacy-preserving applications.",
        url: canonical,
        image: `${data.url.origin}/images/miden.webp`,
    });
}


export default function RouteAboutUs() {
    return <PageAboutUs />;
}
