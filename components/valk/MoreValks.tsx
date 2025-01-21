"use client";
import { getLanguageText } from "@/util/functions.";
import Link from "next/link";
import React from "react";

const MoreValks = () => {
  return (
    <Link className="hover:underline text-xs" href={`/${getLanguageText("tr", "en")}/valks`}>
      More Valks...
    </Link>
  );
};

export default MoreValks;
