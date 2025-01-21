"use client";
import React from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "./PostCard";
import useLanguage from "@/hooks/useLanguage";

const HighlightedPost = () => {
  const language = useLanguage();
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];

    return allPosts.filter(
      (post) => post.language === language && post.category !== "valk"
    );
  };

  return (
    <div>
      {sortedPosts()
        .slice(0, 1)
        .map((post) => {
          return (
            <PostCard
              key={post.title}
              title={post.title}
              description={post.description}
              date={post.date}
              link={post._raw.flattenedPath}
              category={post.category}
              image={post.image ?? null}
              slug={post.slug}
            />
          );
        })}
    </div>
  );
};

export default HighlightedPost;
