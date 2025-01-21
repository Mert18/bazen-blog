'use client'
import React from "react";
import NavigationLink from "./NavigationLink";
import { getLanguageText } from "@/util/functions.";

const Navigation = () => {
  return (
    <div className="flex justify-center items-center bg-primarylighter text-secondary border-2 border-secondary rounded-md font-bold">
      <NavigationLink href={`/${getLanguageText("tr", "en")}`} text={getLanguageText("Ana Sayfa", "Home")} />
      <NavigationLink href={`/${getLanguageText("tr", "en")}/fotoraf`} text="Fotoraf" />
      <NavigationLink href={`/${getLanguageText("tr", "en")}/blog`} text="Blog" />
      <NavigationLink href={`/${getLanguageText("tr", "en")}/valks`} text="Valks" />
    </div>
  );
};

export default Navigation;
