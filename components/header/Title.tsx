'use client'
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const Title = () => {
  const language = useLanguage();
  return (
    <div className="flex flex-col justify-center items-center bg-primarylighter text-text border border-text rounded-md font-bold">
      <Link href={`/${language}`} className="p-2">
        <p>bazen.blog</p>
      </Link>
    </div>
  );
};

export default Title;
