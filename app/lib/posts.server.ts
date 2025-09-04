import type { Article, MDXModule } from "./data";

function parseDDMMYY(d: string): Date {
  const [dd, mm, yy] = d.split(".");
  const year = yy.length === 2 ? 2000 + Number(yy) : Number(yy);
  return new Date(year, Number(mm) - 1, Number(dd));
}

export function getPosts(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    "../content/resource.blog.*.mdx",
    { eager: true },
  );

  const posts = Object.entries(modules).map(([path, mod]) => {
    const id = path
      .replace("../content/resource.blog.", "")
      .replace(".mdx", "");

    return {
      ...mod.frontmatter,
      slug: id,
      headings: mod.headings,
      component: mod.default,
    } as Article;
  });

  // sort newest → oldest
  return (posts ?? []).sort(
    (a, b) => parseDDMMYY(b.date).getTime() - parseDDMMYY(a.date).getTime()
  );
}

const format = (dateStr: string): string => {
  const [day, month, year] = dateStr.split(".");
  return `${`20${year}`}-${month}-${day}`;
};

export function getFeaturedPosts(): Article[] {
  const allPosts = getPosts();
  return allPosts
    .filter((post) => post.featured)
    .sort(
      (a, b) =>
        new Date(format(b.date)).getTime() - new Date(format(a.date)).getTime(),
    );
}

export function getRelatedPosts(slug: Article["slug"]): Article[] {
  const allPosts = getPosts();
  return allPosts
    .filter((post) => post.featured)
    .filter((post) => slug !== post.slug)
    .sort(
      (a, b) =>
        new Date(format(b.date)).getTime() - new Date(format(a.date)).getTime(),
    );
}

export function getPost(slug: string): Article | undefined {
  const allPosts = getPosts();
  return allPosts.find((post) => post.slug === slug);
}
