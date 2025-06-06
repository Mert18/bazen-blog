import React from "react";
import Image from "../Image";
import { IRootLayout } from "@/util/types";

const Prompt = ({ children }: IRootLayout) => {
  return (
    <div className="grid grid-cols-8 w-full mt-2 mb-6">
      <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-end-2 flex items-start justify-start">
        <Image
          className="border border-primary"
          src="/icon/frog.jpg"
          alt="frog"
          width={70}
          height={70}
        />
      </div>
      <div className="col-start-1 col-end-9 lg:col-start-2 lg:col-end-9 border border-primary bg-primarylighter h-max rounded-sm p-4">
        {children}
      </div>
    </div>
  );
};

export default Prompt;
