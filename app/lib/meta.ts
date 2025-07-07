export function buildMeta({
    title,
    description,
    url,
    image,
}: {
    title: string;
    description: string;
    url: string;
    image: string;
}) {
    return [
        { title },
        { name: "description", content: description },
        { rel: "canonical", href: url },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
    ];
}
