"use client";
import { ThemeProvider } from "next-themes";

import React from "react";

export const NextThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>;
};
