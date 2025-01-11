import FotorafShowcase from "@/components/fotoraf/FotorafShowcase";
import HighlightedPost from "@/components/post/HighlightedPost";
import HighlightedValk from "@/components/post/HighlightedValk";
import MorePosts from "@/components/post/MorePosts";
import MoreValks from "@/components/valk/MoreValks";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "bazen.blog",
  description: "Bazen Blog",
};

const Home = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-center items-start">
        <div className="flex-1 w-full my-2 md:m-2 m-0">
          <h3 className="uppercase font-bold text-text text-2xs">Posts</h3>
          <HighlightedPost />
          <MorePosts />
        </div>
        <div className="flex-1 w-full my-2 md:m-2 m-0">
          <h3 className="uppercase font-bold text-text text-2xs">Valks</h3>
          <HighlightedValk />
          <MoreValks />
        </div>
      </div>
      <div className="flex-1 w-full my-2 md:m-2 m-0">
        <h3 className="uppercase font-bold text-text text-xs">Fotorafs</h3>
        <FotorafShowcase />
      </div>
    </div>
  );
};

export default Home;
