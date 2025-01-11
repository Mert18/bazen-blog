"use client";
import { useTheme } from "@/app/themeContext";
import React, { useState } from "react";

const ThemeHandler = () => {
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, changeTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setThemeMenuOpen(!themeMenuOpen);
    changeTheme(newTheme);
  }

  return (
    <div className="relative flex flex-col justify-center items-center text-text font-bold w-32">
      <button className="p-2 w-full" onClick={() => setThemeMenuOpen(!themeMenuOpen)}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>
      {themeMenuOpen && (
        <div className="absolute w-full z-50 mt-2 top-full left-0 flex flex-col justify-center items-center bg-primarylighter text-text border border-text  font-bold">
          <button className="p-2 w-full" onClick={() => handleThemeChange("newspaper")}>Newspaper</button>
          <button className="p-2 w-full" onClick={() => handleThemeChange("nature")}>Nature</button>
          <button className="p-2 w-full" onClick={() => handleThemeChange("urban")}>Urban</button>
        </div>
      )}
    </div>
  );
};

export default ThemeHandler;
