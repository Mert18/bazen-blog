import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const WebsiteMark = () => {
  const language = useLanguage();
  return (
    <div className="text-3xl bg-primary text-secondary text-center p-4 font-bold">
      <Link href={language === "tr" ? "/tr" : "/en"}>
        bazen<span className="text-xl">.blog</span>
      </Link>
    </div>
  );
};

export default WebsiteMark;
