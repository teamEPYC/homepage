import type { Career, CareerMDXModule } from "./data";

export function getJobs(): Career[] {
    const modules = import.meta.glob<CareerMDXModule>(
        "../content/careers/career.*.mdx",
        { eager: true },
    );

    const jobs = Object.entries(modules).map(([path, mod]) => {
        const id = path
            .replace("../content/careers/career.", "")
            .replace(".mdx", "");

        return {
            ...mod.frontmatter,
            slug: id,
            headings: mod.headings,
            component: mod.default,
        };
    });

    return jobs ?? [];
}


export function getJob(slug: string): Career | undefined {
    const allJobs = getJobs();
    const job = allJobs.find((job) => job.slug === slug);
    return job;
}

export function getJobComponent(slug: string): ((props: any) => React.ReactElement) | undefined {
    const modules = import.meta.glob<CareerMDXModule>(
        "../content/careers/career.*.mdx",
        { eager: true }
    );

    const key = `../content/careers/career.${slug}.mdx`;
    const mod = modules[key];
    return mod?.default;
}
