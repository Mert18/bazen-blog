import { IRootLayout } from "@/util/types";
import React from "react";

const HeaderThree = ({ children }: IRootLayout) => {
  return (
    <div className="w-full my-2 text-base font-bold">
      {children}
      <hr />
    </div>
  );
};

export default HeaderThree;
