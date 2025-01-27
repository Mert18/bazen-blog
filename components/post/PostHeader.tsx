"use client";
import { getLanguageText } from "@/util/functions.";
import Image from "next/image";
import React from "react";

const PostHeader = ({ post }: any) => {
  return (
    <div className="p-4 bg-primary-lighter my-2 ">
      <div className="flex flex-col justify-center items-start py-4">
        <h1 className="font-bold text-xl">{post.title}</h1>
        <p className="py-4">{post.description}</p>

        {post.category === "valk" && (
          <>
            <p className="lg:text-sm my-2">
              {post.steps} {getLanguageText("Adım", "Steps")}
            </p>
            <p className="lg:text-sm my-2">{post.distance}</p>
            <p className="lg:text-sm my-2">{post.duration}</p>
          </>
        )}
        {post.category !== "valk" && (
          <p className="text-accent font-bold">{post.date}</p>
        )}
      </div>
      {post.image && (
        <div className="flex justify-center items-center border-2 border-secondary bg-white opacity-50">
          <Image
            src={post.image}
            width={900}
            height={600}
            alt={post.title}
            className="w-full object-cover pointer-events-none "
          />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
