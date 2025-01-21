import { IQuote } from "@/util/types";
import React from "react";

const Quote = ({ from, children }: IQuote) => {
  return (
    <div className="p-4 bg-primarylighter rounded-md">
      <blockquote>{children}</blockquote>
      <p className="text-secondary">{from}</p>
    </div>
  );
};

export default Quote;
