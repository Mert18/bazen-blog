import React from "react";
import { Post, allPosts } from "../../.contentlayer/generated";
import PostCard from "./PostCard";

const monthMapping = {
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

function parseTurkishDate(dateStr) {
  const [day, monthName, year] = dateStr.split(" ");
  const month = monthMapping[monthName];
  return new Date(parseInt(year), month, parseInt(day));
}

const Posts = () => {
  const sortedPosts = () => {
    if (!allPosts) return [];
    return allPosts.sort((a, b) => {
      const dateA = parseTurkishDate(a.date);
      const dateB = parseTurkishDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  };

  return (
    <div>
      {sortedPosts().map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
