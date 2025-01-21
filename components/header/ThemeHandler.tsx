"use client";
import { useTheme } from "@/app/themeContext";
import Image from "next/image";
import React, { useState } from "react";

const ThemeHandler = () => {
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, changeTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setThemeMenuOpen(!themeMenuOpen);
    changeTheme(newTheme);
  }

  return (
    <div className="relative flex flex-col justify-center items-center text-text font-bold">
      <button className="p-2 w-full flex flex-col items-center" onClick={() => setThemeMenuOpen(!themeMenuOpen)}>
        <Image src={"/icon/palette.svg"} width={30} height={30} alt="palette" />
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>
      {themeMenuOpen && (
        <div className="absolute w-40 z-50 mt-2 top-full right-0 flex flex-col justify-center items-center bg-primarylighter text-text border border-text font-bold">
          <button className="p-2 w-full" onClick={() => handleThemeChange("nature")}>Nature</button>
        </div>
      )}
    </div>
  );
};

export default ThemeHandler;
