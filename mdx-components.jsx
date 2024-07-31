"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Paragraph from "./components/post/Paragraph";

export function Mdx({ code }) {
  const Component = useMDXComponent(code);
  return <Component components={{ Paragraph }} />;
}
