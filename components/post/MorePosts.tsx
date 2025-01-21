"use client";
import { getLanguageText } from "@/util/functions.";
import Link from "next/link";
import React from "react";

const MorePosts = () => {
  return <Link className="hover:underline text-xs" href={`/${getLanguageText("tr", "en")}/blog`}>More Posts...</Link>;
};

export default MorePosts;
