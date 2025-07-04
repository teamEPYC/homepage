import type { ReactElement } from "react";

export type Frontmatter = {
  title: string;
  author: string;
  date: string;
  featured?: boolean;
};

export type Heading = {
  text: string;
  id: string;
};

export enum Category {
  Blog = "blog",
  Papers = "papers",
  Talks = "talks",
}

export type Article = Frontmatter & {
  slug: string;
  headings: Heading[];
};

export interface MDXModule {
  frontmatter: Frontmatter;
  default: (props: any) => ReactElement;
  headings: Heading[];
}

export interface CareerMDXModule {
  frontmatter: CareerFrontmatter;
  default: (props: any) => ReactElement;
  headings: Heading[];
}

export type CareerFrontmatter = {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  salary?: string;
  slug: string;
  headings: any[];
};

export type Career = CareerFrontmatter & {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  salary?: string;
  slug: string;
  headings: any[];
  component: (props: any) => React.ReactElement
}