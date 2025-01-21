"use client";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const MoreFotorafs = () => {
  const language = useLanguage();

  return (
    <Link className="hover:underline text-xs" href={`/${language}/fotoraf`}>
      More Fotorafs...
    </Link>
  );
};

export default MoreFotorafs;
