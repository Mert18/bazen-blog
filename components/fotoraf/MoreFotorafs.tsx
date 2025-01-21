"use client";
import { getLanguageText } from "@/util/functions.";
import Link from "next/link";
import React from "react";

const MoreFotorafs = () => {
  return (
    <Link className="hover:underline text-text text-xs" href={`/${getLanguageText("tr", "en")}/fotoraf`}>
      More Fotorafs...
    </Link>
  );
};

export default MoreFotorafs;
