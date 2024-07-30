"use client";
import { useMDXComponent } from "next-contentlayer/hooks";

export function Mdx({ code }) {
  const Component = useMDXComponent(code);
  return <Component />;
}
