import { useState } from "react";
import MobileNavigationLink from "./MobileNavigationLink";
import ThemeHandler from "./ThemeHandler";
import LanguageHandler from "./LanguageHandler";
import { getLanguageText } from "@/util/functions.";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-4">
      <div
        className="z-50 flex flex-col justify-between w-8 h-6 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="w-full h-1 bg-secondary"></div>
        <div className="w-full h-1 bg-secondary"></div>
        <div className="w-full h-1 bg-secondary"></div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-start pt-8 z-40 bg-secondary text-">
          <button
            onClick={toggleMenu}
            className="relative text-secondary bg-primary p-4 my-4 rotate-45"
          >
            <div className="rounded-sm absolute top-0 left-1/2 w-1 h-full bg-secondary transform -translate-x-1/2"></div>
            <div className="rounded-sm absolute left-0 top-1/2 h-1 w-full bg-secondary transform -translate-y-1/2"></div>
          </button>

          <div className="w-96">
            <MobileNavigationLink
              href={getLanguageText("/tr", "/en")}
              text={getLanguageText("Ana Sayfa", "Home")}
              onClick={toggleMenu}
            />

            <MobileNavigationLink
              href={`/${getLanguageText("tr", "en")}/blog`}
              text="Blog"
              onClick={toggleMenu}
            />
            <MobileNavigationLink
              href={`/${getLanguageText("tr", "en")}/fotoraf`}
              text="Fotoraf"
              onClick={toggleMenu}
            />
            <MobileNavigationLink
              href={`/${getLanguageText("tr", "en")}/valks`}
              text="Valks"
              onClick={toggleMenu}
            />
          </div>
          <div className="my-4"></div>
          <LanguageHandler />
          <div className="my-4"></div>
          <ThemeHandler />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
