"use client";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const MoreValks = () => {
  const language = useLanguage();

  return (
    <Link className="hover:underline text-2xs" href={`/${language}/valks`}>
      More Valks...
    </Link>
  );
};

export default MoreValks;
