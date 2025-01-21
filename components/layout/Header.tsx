import React from "react";
import Navigation from "../header/Navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import HamburgerMenu from "../header/HamburgerMenu";
import Accessibility from "../header/Accessibility";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className={`flex flex-col items-center justify-center p-2 text-sm bg-primary border-b-2 border-secondary`}>
        {isSmallScreen ? (
          <HamburgerMenu />
        ) : (
          <>
            <Navigation />
            <Accessibility />
          </>
        )}
    </div>
  );
};

export default Header;
