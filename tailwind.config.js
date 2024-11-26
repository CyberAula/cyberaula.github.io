/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
import { Card, CardVariants } from "@/components/core/Cards";

const config = require('./next.config.mjs');
console.log(config.basePath)
console.log(config.default.basePath)

const basePathTailwind = config.default.basePath;
// const basePathTailwind = process.env.BASE_PATH || '';

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": ['var(--font-montserrat)', 'sans-serif'],
        "main": ['var(--font-sourceSans)', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1.4' }],  /* 10px */
        'xs': ['0.75rem', { lineHeight: '1.4' }],    /* 12px */
        'sm': ['0.875rem', { lineHeight: '1.4' }],   /* 14px */
        'base': ['1rem', { lineHeight: '1.4' }],     /* 16px body */
        '18': ['1.125rem', { lineHeight: '1.4' }],
        '20': ['1.25rem', { lineHeight: '1.4' }], 
        '24': ['1.5rem', { lineHeight: '1.4' }], 
        '28': ['1.75rem', { lineHeight: '1.4' }],
        '32': ['2rem', { lineHeight: '1.4' }],   
        '36': ['2.25rem', { lineHeight: '1.4' }],
        '40': ['2.5rem', { lineHeight: '1.4' }], 
        '48': ['3rem', { lineHeight: '1.4' }], 
        '56': ['3.5rem', { lineHeight: '1.4' }], 
        '64': ['4rem', { lineHeight: '1.4' }],
      },
      colors: {
        // whiteFull: "#ffffff",
        snow: "#EFF7FB",
        black: "#0D0D1C",

        primary: {
          900: "#3302BF",
          800: "#4507C9",
          700: "#4F1BE4",
          600: "#5441FF",
          500: "#6E76FF",
          400: "#97A7FF",
          300: "#BECAFF",
          200: "#DBE2FF",
          100: "#EBF0FF",
          50: "#F5F8FF",
          DEFAULT: "#5441FF",
        },
        accent: "#5340FF",
        black: "#100025",
        white: "#FAFBFF",
        burgundy: "#9F226D",
        cyan: "#21E2ED",
        lilac: "#AE9FF2",
        secondary: {
          900: "#3302BF",
          800: "#4507C9",
          700: "#4F1BE4",
          600: "#5441FF",
          500: "#6E76FF",
          400: "#97A7FF",
          300: "#BECAFF",
          200: "#DBE2FF",
          100: "#EBF0FF",
          50: "#F5F8FF",
        },
        accent: {
          300: "FF9900",
          200: "FFBD1B",
          100: "FFE685",
        },

        gray: {
          400: "#383649",
          300: "#706C93",
          200: "#B5B2CC",
          100: "#E9E8F0",
        },

        // secondary: { 
        //   DEFAULT: "#9ca3af",
        //   700: "#374151",
        //   600: "#4b5563",
        //   500: "#6b7280",
        //   400: "#9ca3af",
        //   300: "#d1d5db",
        //   200: "#e5e7eb",
        //   100: "#f3f4f6",
        //   50: "#f9fafb",
        //   foreground: "#ffffff"
        // },
        // accent: { // morado
        //   DEFAULT: "#62388E",
        //   // 300: "#FF9900",
        //   // 200: "#FFBD1B",
        //   // 100: "#FFE685",
        // },
        background: {
          DEFAULT:"#f7f7ef",
          400: "#EFF7FB",
          300: "#EFF7FB"
        },
        ring: {
          DEFAULT: "#cbe0ed",
        },
        shadow: {
          DEFAULT:"#cbd5e1",
        },
        title: {
          DEFAULT:"#323232"
        },
        text: {
          DEFAULT:"#323232"
        }
      },
    },
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    },
    backgroundImage: {
      'main': `url('${basePathTailwind}/assets/fondos/background_banner.png')`,
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontFamily: theme('fontFamily.montserrat') },
        'h2': { fontFamily: theme('fontFamily.montserrat') },
        'h3': { fontFamily: theme('fontFamily.montserrat') },
        'h4': { fontFamily: theme('fontFamily.montserrat') },
        'h5': { fontFamily: theme('fontFamily.montserrat') },
        'h6': { fontFamily: theme('fontFamily.montserrat') },
        'p': { fontFamily: theme('fontFamily.sourceSans') },
        'a': { fontFamily: theme('fontFamily.sourceSans') },
        'button': { fontFamily: theme('fontFamily.sourceSans') },
      })
    })
  ],
  // corePlugins: {
  //   preflight: false,
  // },
};

// export default config;