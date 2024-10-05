import React from "react";

const Quote = ({ from, children }) => {
  return (
    <div className="p-2 border border-accent rounded-md">
      <blockquote className="p-2">{children}</blockquote>
      <p className="text-accent">{from}</p>
    </div>
  );
};

export default Quote;
