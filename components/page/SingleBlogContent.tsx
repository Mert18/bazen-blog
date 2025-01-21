"use client";
import { allPosts } from "@/.contentlayer/generated";
import useLanguage from "@/hooks/useLanguage";
import { ISingleBlogContent } from "@/util/types";
import { notFound } from "next/navigation";
import React from "react";
import PostHeader from "../post/PostHeader";
import { Mdx } from "@/mdx-components";
import Link from "next/link";
import { getLanguageText } from "@/util/functions.";
import ContentWrapper from "../ContentWrapper";

const SingleBlogContent = ({ params }: ISingleBlogContent) => {
  const language = useLanguage();

  function getPostFromParams(slug: string) {
    const post = allPosts
      .filter((post) => post.language === language)
      .find((p) => p._raw.flattenedPath.split("/").slice(1).join("/") === slug);
    if (!post) {
      notFound();
    }
    return post;
  }

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const post = getPostFromParams(params.slug);

  return (
    <ContentWrapper>
      <div className="flex flex-col justify-center items-center md:p-4 p-0 text-text">
        <div className="w-full">
          <PostHeader post={post} />

          <div className="flex flex-col justify-center items-start md:py-4 text-xs xl:text-sm overflow-auto bg-primary p-4 border border-secondary ">
            <Mdx code={post.body.code} />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => handleBackToTop()}>Back to Top</button>
            <div className="py-4">
              <Link href={getLanguageText("/tr", "/en")}>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default SingleBlogContent;
