/** @type {import('tailwindcss').Config} */
import animatePlugin from "tailwindcss-animate";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animatePlugin],
};
