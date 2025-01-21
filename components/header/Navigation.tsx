'use client'
import React from "react";
import NavigationLink from "./NavigationLink";
import useLanguage from "@/hooks/useLanguage";

const Navigation = () => {
  const language = useLanguage();
  return (
    <div className="flex justify-center items-center bg-primarylighter text-secondary border-2 border-secondary rounded-md font-bold">
      <NavigationLink href={`/${language}`} text={language == "en" ? "Home" : "Ana Sayfa"} />
      <NavigationLink href={`/${language}/fotoraf`} text="Fotoraf" />
      <NavigationLink href={`/${language}/blog`} text="Blog" />
      <NavigationLink href={`/${language}/valks`} text="Valks" />
    </div>
  );
};

export default Navigation;
