"use client";
import React from "react";
import { allPosts } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "../../../mdx-components";
import Link from "next/link";
import PostCard from "../../../components/post/PostCard";

function getPostFromParams(slug) {
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);
  if (!post) {
    notFound();
  }
  return post;
}

const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Post = ({ params }) => {
  const post = getPostFromParams(params.post);
  return (
    <div className="">
      <PostCard post={post} />

      <div className="my-4">
        <Mdx code={post.body.code} />
      </div>
      <div className="flex flex-col justify-between items-start text-xs">
        <button onClick={() => handleBackToTop()} className="hover:text-accent">
          Back to Top
        </button>
        <Link href="/" className="hover:text-accent">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Post;
