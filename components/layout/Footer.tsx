import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <Link href="https://github.com/Mert18/bazen-blog" target="_blank" className="text-text">Github</Link>
    </div>
  );
};

export default Footer;
