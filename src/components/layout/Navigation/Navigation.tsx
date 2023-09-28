import React from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeInit } from "@/components/utils/ThemeInit";
import { ThemeSwitch } from "@/components/UI/ThemeSwitch";

export const Navigation = () => {
  return (
    <header>
      <ThemeInit />
      <div className="container-wide">
        <button>logo</button>
        <div>Presented By</div>
        <DesktopNavigation />
        <MobileNavigation />
        <ThemeSwitch />
      </div>
    </header>
  );
};
