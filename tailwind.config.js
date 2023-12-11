/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "neutral-5": "#f6f5f6",
        "grey-on-black-white": "#fff",
        "neutral-10": "#dad9de",
        "neutral-80": "#1c1a24",
        "gray-neutral-gray-neutral-800": "#1f1f1f",
        "gray-neutral-gray-neutral-50": "#f5f5f5",
        "gray-gray-700": "#374151",
        "gray-neutral-gray-neutral-400": "#8c8c8c",
        "gray-gray-200": "#e5e7eb",
        "gray-gray-800": "#1f2937",
        "neutral-20": "#b5b3bd",
        "neutral-40": "#6c667a",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "mabry-pro": ["var(--font-mabry)"],
      },
      borderRadius: {
        "77xl": "96px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "5xs": "8px",
      "3xs": "10px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
