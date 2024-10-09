import React from 'react'

import Image from "../Image";

const Me = ({ children }) => {
  return (
    <div className="mt-2 mb-6 w-full flex flex-col lg:flex-row lg:justify-start justify-center">
        <Image
          className="mr-2 mb-2 lg:mb-0 rounded-sm"
          src="/frog.jpg"
          alt="frog"
          width={70}
          height={70}
        />
      <div className="flex-1 border border-accent1 bg-white2 h-max rounded-sm p-4">
        {children}
      </div>
    </div>
  );
};

export default Me;
