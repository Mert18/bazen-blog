"use client";
import React from "react";

import useLanguage from "@/hooks/useLanguage";
import ValkCard from "../valk/ValkCard";
import { allPosts, Post } from "@/.contentlayer/generated";

const HighlightedValk = () => {
  const language = useLanguage();
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];

    return allPosts
      .filter((post) => post.language === language && post.category === "valk")
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
