"use client"

import { Montserrat } from "next/font/google";
import './sass/main.scss';
import "./globals.sass";
// import 'bootstrap/dist/css/bootstrap.min.css';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
