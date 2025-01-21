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
    <div className="flex text-text font-bold mx-2 bg-primarylighter border-2 border-secondary p-1 rounded-md">
      <button className="flex justify-center items-center" onClick={() => setThemeMenuOpen(!themeMenuOpen)}>
        <Image src={"/icon/palette.svg"} width={25} height={25} alt="palette" className="mr-1" />
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>

      {themeMenuOpen && (
        <div className="absolute w-36 z-50 mt-1 top-full right-2 flex flex-col justify-center items-center bg-primarylighter text-text border-2 border-secondary font-bold rounded-md">
          <button className="p-1 w-full hover:underline" onClick={() => handleThemeChange("nature")}>Nature</button>
        </div>
      )}
    </div>
  );
};

export default ThemeHandler;
