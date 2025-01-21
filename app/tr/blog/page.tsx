import React from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/post/PostCard";

export const metadata = {
  title: "bazen.blog | blog",
  description: "A Software Engineering Blog, Blog section",
};

type MonthMapping = {
  [key: string]: number;
};

const monthMapping: MonthMapping = {
  Ocak: 1,
  Şubat: 2,
  Mart: 3,
  Nisan: 4,
  Mayıs: 5,
  Haziran: 6,
  Temmuz: 7,
  Ağustos: 8,
  Eylül: 9,
  Ekim: 10,
  Kasım: 11,
  Aralık: 12,
};

function parseTurkishDate(dateStr: string) {
  const [day, monthName, year] = dateStr.split(" ");
  const month = monthMapping[monthName];
  return new Date(parseInt(year), month, parseInt(day));
}

const Blog = () => {
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];
    return allPosts
      .filter((post) => post.language === "tr" && post.category !== "valk")
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
