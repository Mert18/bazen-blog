import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <Link
      className="hover:underline w-full h-full flex justify-start items-center text-text"
      href={`/posts${post.slug}`}
    >
      <div className="py-8 px-2">
        <div className="flex w-full md:flex-row flex-col md:items-start items-center">
          {post.image && (
            <Image
              src={post.image}
              alt="Lycians pixel art"
              width={250}
              height={250}
              className="mr-4 border border-secondary md:mb-0 mb-4 rounded-md"
            />
          )}
          <div className="flex flex-col justify-start w-full">
            <h1 className="font-bold text-base md:text-xl lg:text-2xl mb-4">
              {post.title}
            </h1>
            <p className="text-xs lg:text-sm my-2">{post.description}</p>
            <p className="text-xs lg:text-sm my-2 text-accent">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
