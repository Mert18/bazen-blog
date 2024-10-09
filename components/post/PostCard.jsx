import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <Link
      className="hover:underline h-full flex justify-start items-center text-text"
      href={`/posts${post.slug}`}
    >
      <div className="flex flex-col items-start my-1">
        <h1 className="text-base">
          {post.title}
        </h1>
        <p className="text-base text-accent">{post.date}</p>
      </div>
    </Link>
  );
};

export default PostCard;
