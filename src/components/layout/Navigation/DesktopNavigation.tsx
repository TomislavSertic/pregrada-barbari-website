"use client";
import { selectNavLinks } from "@/redux/features/localization.slice";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChangeLang } from "./ChangeLang";
export const DesktopNavigation = () => {
  const dispatch = useDispatch();
  const navLinks = useSelector(selectNavLinks);

  return (
    <nav>
      <ul className="flex gap-[10px]">
        {navLinks.map((link) => {
          return (
            <li key={link._id}>
              <Link href={link.path} aria-label={link.title}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <ChangeLang />
      </div>
    </nav>
  );
};
