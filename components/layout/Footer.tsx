import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-secondary">
      <Link href="https://github.com/Mert18/bazen-blog" target="_blank" className="text-primary">Github</Link>
    </div>
  );
};

export default Footer;
