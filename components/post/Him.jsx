import React from "react";

import Image from "../Image";

const Him = ({ children }) => {
  return (
    <div className="mt-2 mb-6 w-full flex lg:flex-row lg:justify-start justify-center flex-col-reverse">
      <div className="flex-1 border border-accent1 bg-white2 h-max rounded-sm p-4">
        {children}
      </div>

      <div className="lg:ml-2 ml-0 mb-2 lg:mb-0 rounded-sm">
        <Image
          className="max-w-none"
          src="/ai.jpg"
          alt="ai representative woman"
          width={60}
          height={60}
          style={{ objectFit: "contain", height: "60px", width: "60px" }}
        />
      </div>
    </div>
  );
};

export default Him;
