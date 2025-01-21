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
    <div className="flex flex-col justify-center items-center text-text font-bold mx-4">
      <Link
        href={
          language === "tr"
            ? pathname.replace("/tr", "/en")
            : pathname.replace("/en", "/tr")
        }
        className="flex flex-col justify-center items-center"
      >
        <Image
          src={"/icon/language.svg"}
          width={40}
          height={40}
          alt="language change"
        />
        <p>{getLanguageText("English", "Türkçe")}</p>
      </Link>
    </div>
  );
};

export default LanguageHandler;
