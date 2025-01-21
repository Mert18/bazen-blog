import React from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/post/PostCard";

export const metadata = {
  title: "bazen.blog | blog",
  description: "A Software Engineering Blog, Blog section",
};

const Blog = () => {
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];
    return allPosts
      .filter((post) => post.language === "en" && post.category !== "valk")
      .sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split("/").map(Number);
        const [dayB, monthB, yearB] = b.date.split("/").map(Number);

        const dateA = new Date(yearA, monthA - 1, dayA).getTime();
        const dateB = new Date(yearB, monthB - 1, dayB).getTime();

        return dateB - dateA;
      });
  };

  return (
    <div>
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
    </div>
  );
};

export default Blog;
