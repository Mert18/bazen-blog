import { IRootLayout } from "@/util/types";
import React from "react";

const ContentWrapper = ({ children }: IRootLayout) => {
  return (
    <div className="border-y border-secondary bg-primary flex justify-center items-center py-8 my-2">
      <div className="w-full xl:w-1/2">{children}</div>
    </div>
  );
};

export default ContentWrapper;
