"use client";
import { allPosts, Post } from "@/.contentlayer/generated";
import React from "react";
import PostCard from "../post/PostCard";
import useLanguage from "@/hooks/useLanguage";
import ContentWrapper from "../ContentWrapper";

const BlogContent = () => {
  const language = useLanguage();

  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];
    return allPosts
      .filter((post) => post.language === language && post.category !== "valk")
      .sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split("/").map(Number);
        const [dayB, monthB, yearB] = b.date.split("/").map(Number);

        const dateA = new Date(yearA, monthA - 1, dayA).getTime();
        const dateB = new Date(yearB, monthB - 1, dayB).getTime();

        return dateB - dateA;
      });
  };

  return (
    <ContentWrapper>
      {sortedPosts().map((post) => {
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
    </ContentWrapper>
  );
};

export default BlogContent;
