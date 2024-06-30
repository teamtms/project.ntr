import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        'ctn': '900px'
      },
      colors: {
        'background': '#11141d',
        'interactive': '#1e2434',
        'accent': '#0a224f'
      }
    },
  },
  plugins: [],
};
export default config;
