"use client";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const MorePosts = () => {
  const language = useLanguage();

  return <Link className="hover:underline text-xs" href={`/${language}/blog`}>More Posts...</Link>;
};

export default MorePosts;
