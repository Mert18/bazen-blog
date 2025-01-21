import { IRootLayout } from "@/util/types";
import React from "react";

const HeaderOne = ({ children }: IRootLayout) => {
  return (
    <div className="w-full my-2 text-xl font-bold">
      {children}
      <hr />
    </div>
  );
};

export default HeaderOne;
