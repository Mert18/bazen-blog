"use client";
import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";
import PostHeader from "../post/PostHeader";
import { Mdx } from "@/mdx-components";
import Link from "next/link";
import { getLanguageText } from "@/util/functions.";
import useLanguage from "@/hooks/useLanguage";
import { ISingleValkContent } from "@/util/types";
import ContentWrapper from "../ContentWrapper";

const SingleValkContent = ({ params }: ISingleValkContent) => {
  const language = useLanguage();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function getPostFromParams(valk: string) {
    const post = allPosts
      .filter((post) => post.language === language && post.category === "valk")
      .find((p) => p._raw.flattenedPath);
    if (!post) {
      notFound();
    }
    return post;
  }

  const post = getPostFromParams(params.valk);
  return (
    <ContentWrapper>
      <div className="flex flex-col justify-center items-center md:p-4 p-0 text-text">
        <div className="w-full">
          <PostHeader post={post} />

          <div className="flex flex-col justify-center items-start md:py-4 xl:text-sm overflow-auto bg-primary p-4">
            <Mdx code={post.body.code} />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => handleBackToTop()}>
              {getLanguageText("Üste Çık", "Back to Top")}
            </button>
            <div className="py-4">
              <Link href={getLanguageText("/tr", "/en")}>
                {getLanguageText("Ana Sayfaya Dön", "Back to Home")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default SingleValkContent;
