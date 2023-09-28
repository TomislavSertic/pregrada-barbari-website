import { NextThemeProvider } from "@/components/providers/NextThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Footer } from "@/components/layout/Footer/Footer";
import { ReduxProvider } from "@/components/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pregrada Barbari",
  description: "Košarkaški Klub Pregrada Barbari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-base-100 text-base-content text-bodyMMobile md:text-bodyM`}
      >
        <ReduxProvider>
          <NextThemeProvider>
            <Navigation />

            {children}
            <Footer />
          </NextThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
