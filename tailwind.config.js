import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./resources/**/*.svelte"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
