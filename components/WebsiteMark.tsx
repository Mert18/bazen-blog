import { getLanguageText } from "@/util/functions.";
import Link from "next/link";
import React from "react";

const WebsiteMark = () => {
  return (
    <div className="text-3xl bg-primary text-secondary text-center p-4 font-bold">
      <Link href={getLanguageText("/tr", "/en")}>
        bazen<span className="text-xl">.blog</span>
      </Link>
    </div>
  );
};

export default WebsiteMark;
