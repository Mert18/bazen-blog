"use client";
import React from "react";

import useLanguage from "@/hooks/useLanguage";
import ValkCard from "../valk/ValkCard";
import { allPosts, Post } from "@/.contentlayer/generated";

const HighlightedValk = () => {
  const language = useLanguage();
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];

    return allPosts.filter(
      (post) => post.language === language && post.category === "valk"
    );
  };

  return (
    <div>
      {sortedPosts()
        .slice(0, 1)
        .map((post) => {
          return (
            <ValkCard
              key={post.title}
              title={post.title}
              description={post.description}
              date={post.date}
              link={post._raw.flattenedPath}
              category={post.category}
              image={post.image ?? null}
              valk={post.slug}
              steps={post.steps ?? ""}
              distance={post.distance ?? ""}
              duration={post.duration ?? ""}
            />
          );
        })}
    </div>
  );
};

export default HighlightedValk;
