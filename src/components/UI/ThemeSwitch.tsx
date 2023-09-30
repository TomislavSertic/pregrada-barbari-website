"use client";
import { changeTheme, selectTheme } from "@/redux/features/theme.slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const handleThemeSwitch = () => {
    if (currentTheme === "light") {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }
  };
  return <button onClick={handleThemeSwitch}>Switch</button>;
};
