import React from "react";

const Quote = ({ from, children }) => {
  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <blockquote className="p-2">{children}</blockquote>
      <p className="text-gray-400 text-xs">{from}</p>
    </div>
  );
};

export default Quote;
