import FotorafShowcase from "@/components/fotoraf/FotorafShowcase";
import MoreFotorafs from "@/components/fotoraf/MoreFotorafs";
import HighlightedPost from "@/components/post/HighlightedPost";
import HighlightedValk from "@/components/post/HighlightedValk";
import MorePosts from "@/components/post/MorePosts";
import MoreValks from "@/components/valk/MoreValks";
import React from "react";

export const metadata = {
  title: "bazen.blog | blog",
  description: "A Software Engineering Blog",
};

const Home = () => {
  return (
    <div>
      <div className="flex-1 w-full my-2 md:m-2 m-0">
        <h3 className="uppercase font-bold text-text text-xs">Latest Post</h3>
        <HighlightedPost />
        <MorePosts />
      </div>
      <div className="flex-1 w-full my-2 md:m-2 m-0">
        <h3 className="uppercase font-bold text-text text-xs">Latest Valk</h3>
        <HighlightedValk />
        <MoreValks />
      </div>
      <div className="flex-1 w-full my-2 md:m-2 m-0">
        <h3 className="uppercase font-bold text-text text-xs">Latest Fotorafs</h3>
        <FotorafShowcase />
        <MoreFotorafs />
      </div>
    </div>
  );
};

export default Home;
