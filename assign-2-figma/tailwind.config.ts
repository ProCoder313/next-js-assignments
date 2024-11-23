import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins font family
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDark: "#0E0101",
        
      },
    },
  },
  plugins: [],
};
export default config;
