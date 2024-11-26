"use client";

import "./globals.css";
import React from "react";
import { Source_Sans_3, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import { routes } from "@/constants/routes";

// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sourceSans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html className={` ${sourceSans.variable} ${montserrat.variable} `}>
      <title>CyberAula 2.0</title>
      <body className="bg-background">
        <Header route={"/"} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
