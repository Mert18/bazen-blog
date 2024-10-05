"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Paragraph from "./components/post/Paragraph";
import Quote from "./components/post/Quote";

export function Mdx({ code }) {
  const Component = useMDXComponent(code);
  return <Component components={{ Paragraph, Quote }} />;
}
