import React from "react";
import LanguageHandler from "./LanguageHandler";
import ThemeHandler from "./ThemeHandler";

const Accessibility = () => {
  return (
    <div className="absolute right-4 top-2 flex p-4">
      <LanguageHandler />
      <ThemeHandler />
    </div>
  );
};

export default Accessibility;
