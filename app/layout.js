"use client";

import { Montserrat } from "next/font/google";
import './sass/main.scss';
import "./globals.sass";
import { useState, useEffect } from "react";

// import i18n (needs to be bundled ;))
import './i18n';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html lang="es">
       <title>Cyberaula UPM</title>
        <meta name="description" content="El grupo CyberAula impulsa la innovación docente y educativa en telemática con metodologías activas, juegos, escaperooms e IA para mejorar motivación y aprendizaje." />
        <meta name="keywords" content="Cyberaula, innovación educativa, innovación, educación, inteligencia artificial, escaperooms, telemática"></meta>
      <body className={montserrat.className}>{isClient ? children:null}</body>
    </html>
  );
}
