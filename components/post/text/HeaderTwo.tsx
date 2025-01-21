import { IRootLayout } from "@/util/types";
import React from "react";

const HeaderTwo = ({ children }: IRootLayout) => {
  return <div className="w-full my-2 text-lg font-bold">{children}</div>;
};

export default HeaderTwo;
