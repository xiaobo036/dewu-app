/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#089479",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 避免和其他类库冲突
  },
};
