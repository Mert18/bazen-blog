"use client";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getLanguageText } from "@/util/functions.";

const LanguageHandler = () => {
  const pathname = usePathname();
  const language = useLanguage();
  return (
    <div className="flex text-text font-bold mx-2 bg-primarylighter border-2 border-secondary p-1 rounded-md">
      <Link
        href={
          language === "tr"
            ? pathname.replace("/tr", "/en")
            : pathname.replace("/en", "/tr")
        }
        className="flex justify-center items-center"
      >
        <Image
          src={"/icon/language.svg"}
          width={30}
          height={30}
          alt="language change"
          className="mr-1"
        />
        <p>{getLanguageText("English", "Türkçe")}</p>
      </Link>
    </div>
  );
};

export default LanguageHandler;
