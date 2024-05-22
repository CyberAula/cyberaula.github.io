/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5441FF",
        accent: "#5340FF",
        black: "#100025",
        white: "#FAFBFF",
        burgundy: "#9F226D",
        cyan: "#21E2ED",
        lilac: "#AE9FF2",
        ca_blue: {
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
        ca_orange: {
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
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
