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
  };

  return (
    <div className="flex text-black font-bold mx-2 bg-white border-2 border-secondary p-1 rounded-md">
      <button
        className="flex justify-center items-center"
        onClick={() => setThemeMenuOpen(!themeMenuOpen)}
      >
        <Image
          src={"/icon/palette.svg"}
          width={25}
          height={25}
          alt="palette"
          className="mr-1"
        />
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>

      {themeMenuOpen && (
        <div className="absolute right-2 top-full flex flex-col text-black font-bold mx-2 bg-white border-2 border-secondary p-1 rounded-md my-2">
          <button
            className="bg-nature-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("nature")}
          >
            Nature
          </button>
          <button
            className="bg-ocean-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("ocean")}
          >
            Ocean
          </button>
          <button
            className="bg-desert-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("desert")}
          >
            Desert
          </button>
          <button
            className="bg-cherry-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("cherry")}
          >
            Cherry
          </button>
          <button
            className="bg-lavender-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("lavender")}
          >
            Lavender
          </button>
          <button
            className="bg-midnight-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("midnight")}
          >
            Midnight
          </button>
          <button
            className="bg-forest-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("forest")}
          >
            Forest
          </button>
          <button
            className="bg-obsidian-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("obsidian")}
          >
            Obsidian
          </button>
          <button
            className="bg-ember-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("ember")}
          >
            Ember
          </button>
          <button
            className="bg-chocolate-split p-1 mr-1 w-full hover:underline text-shadow-outline"
            onClick={() => handleThemeChange("chocolate")}
          >
            Chocolate
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeHandler;
