import { IQuote } from "@/util/types";
import React from "react";

const Quote = ({ from, children }: IQuote) => {
  return (
    <div className="p-2 border border-accent">
      <blockquote className="p-2">{children}</blockquote>
      <p className="text-accent">{from}</p>
    </div>
  );
};

export default Quote;
