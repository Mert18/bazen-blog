import React from "react";

const MainContent = ({ children }: any) => {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen my-4 w-full">{children}</div>
    </div>
  );
};

export default MainContent;
