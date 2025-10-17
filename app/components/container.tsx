import type { HtmlHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export function Container(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      className={cn("my-6 mt-12 md:my-12 px-6 flex-1 w-miden", props.className)}
    >
      {props.children}
    </section>
  );
}

export function Header(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <header
      {...props}
      className={cn(
        "w-miden flex flex-col gap-4 md:gap-6 [&_p]:text-muted-foreground [&_p]:text-sm [&_h1]:!text-5xl [&_h2]:!text-4xl [&_h3]:!text-2xl [&_h2]:text-balance [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h1]:!font-semibold [&_h2]:!font-semibold [&_h3]:!font-bold",
        props.className,
      )}
    >
      {props.children}
    </header>
  );
}

export function Wrapper(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <div {...props} className={cn("w-wrapper", props.className)}>
      {props.children}
    </div>
  );
}
