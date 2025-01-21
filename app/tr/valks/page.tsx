import React from 'react'
import { Post, allPosts } from "@/.contentlayer/generated";
import ValkCard from '@/components/valk/ValkCard';

export const metadata = {
  title: "bazen.blog | valks",
  description: "A Software Engineering Blog, walk conversations with myself.",
};

const Valks = () => {
  const sortedValks = () => {
    if (!allPosts) return [] as Post[];
    return allPosts
      .filter((post) => {
        return post.language === "tr" && post.category === "valk";
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
    <div>
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
    </div>
  );
}

export default Valks