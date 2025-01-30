import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // nft_darkPurple: "#330d85",
        nft_darkPurple: "#0f0529",
        nft_mdDarkPurple: "#4a2574",
        nft_purple: "#806bf4",
        nft_mdLightPurple: "#924dbf",
        nft_lightPurple: "#9e72c3",
        nft_yellow: "#fff45e",
        nft_pink: "#f76fae",
        Black: "#202020",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
