"use client";
import { allPosts, Post } from "@/.contentlayer/generated";
import useLanguage from "@/hooks/useLanguage";
import React from "react";
import ValkCard from "../valk/ValkCard";
import ContentWrapper from "../ContentWrapper";

const ValksContent = () => {
  const language = useLanguage();
  const sortedValks = () => {
    if (!allPosts) return [] as Post[];
    return allPosts
      .filter((post) => {
        return post.language === language && post.category === "valk";
      })
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
      {sortedValks().map((post) => {
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
    </ContentWrapper>
  );
};

export default ValksContent;
