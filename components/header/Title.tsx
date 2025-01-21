'use client'
import { getLanguageText } from "@/util/functions.";
import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primarylighter text-text  font-bold">
      <Link href={getLanguageText("/tr", "/en")} className="p-2">
        <p>bazen.blog</p>
      </Link>
    </div>
  );
};

export default Title;
