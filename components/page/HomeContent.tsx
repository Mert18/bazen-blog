"use client";
import React from "react";
import HighlightedPost from "../post/HighlightedPost";
import MorePosts from "../post/MorePosts";
import HighlightedValk from "../post/HighlightedValk";
import MoreValks from "../valk/MoreValks";
import FotorafShowcase from "../fotoraf/FotorafShowcase";
import MoreFotorafs from "../fotoraf/MoreFotorafs";
import { getLanguageText } from "@/util/functions.";
import ContentWrapper from "../ContentWrapper";

const HomeContent = () => {
  return (
    <div>
      <ContentWrapper>
        <div className="flex-1 w-full my-2">
          <h3 className="uppercase font-bold text-text text-xs">
            {getLanguageText("Son Yazı", "Latest Post")}
          </h3>
          <HighlightedPost />
          <MorePosts />
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="flex-1 w-full my-2">
          <h3 className="uppercase font-bold text-text text-xs">
            {getLanguageText("Son Valk", "Latest Valk")}
          </h3>
          <HighlightedValk />
          <MoreValks />
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <div className="flex-1 w-full my-2">
          <h3 className="uppercase font-bold text-text text-xs">
            {getLanguageText("Son Fotoraf", "Latest Fotoraf")}
          </h3>
          <FotorafShowcase />
          <MoreFotorafs />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HomeContent;
