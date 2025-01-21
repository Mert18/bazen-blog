"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const NavigationLink = ({ href, text }: any) => {
    const pathname = usePathname()

    useEffect(() => {
      console.log(pathname)
      console.log(text)
    }, [pathname])

    const pathnameMatcher = (path: string) => {
      if(pathname.includes(text.toLowerCase()) || (pathname === "/tr" && path === "Ana Sayfa") || (pathname === "/en" && path === "Home")) {
          return "bg-secondary text-primary"
      }
    }
  
  return (
    <Link href={href} className={`block p-2 hover:underline ${pathnameMatcher(text)}`}>
      {text}
    </Link>
  );
};

export default NavigationLink;
