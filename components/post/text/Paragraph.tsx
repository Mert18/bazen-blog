import { IRootLayout } from "@/util/types";
import React from "react";

const Paragraph = ({ children }: IRootLayout) => {
  return <div className="w-[98%] my-4">{children}</div>;
};

export default Paragraph;
