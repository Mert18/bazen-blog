import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-primary text-secondary border-t border-secondary">
      <Link href="https://github.com/Mert18/bazen-blog" target="_blank">Github</Link>
    </div>
  );
};

export default Footer;
