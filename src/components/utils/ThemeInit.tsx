"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, selectTheme } from "@/redux/features/theme.slice";
export const ThemeInit = () => {
  const currentTheme = useSelector(selectTheme);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      dispatch(changeTheme(localTheme));
    }
    setMounted(true);
  }, [theme]);
  useEffect(() => {
    if (!mounted) return;
    setTheme(currentTheme);
  }, [currentTheme]);
  if (!mounted) {
    return null;
  }

  return <></>;
};
