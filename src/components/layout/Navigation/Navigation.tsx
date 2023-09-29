import React from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeInit } from "@/components/utils/ThemeInit";
import { ThemeSwitch } from "@/components/UI/ThemeSwitch";
import Image from "next/image";

export const Navigation = () => {
  return (
    <header className="py-[20px]">
      <ThemeInit />
      <div className="container-wide flex justify-between items-center ">
        <div className="flex gap-[40px] items-center">
          <button>
            <Image
              src="/logo/logo-192.png"
              alt="Pregrada Barbari logo"
              width={64}
              height={64}
              loading="eager"
            />
          </button>
          <div className="text-bodyXS uppercase flex flex-col  gap-[5px]">
            <span>Presented By</span>
            <div className="h-[20px]">
              <Image
                src="/logo/kunagora-light.png"
                alt="Kunagora biser hrvatskog zagorja"
                width={50}
                height={20}
                className="h-full"
              />
            </div>
          </div>
        </div>
        <DesktopNavigation />
        <MobileNavigation />
        <ThemeSwitch />
      </div>
    </header>
  );
};
