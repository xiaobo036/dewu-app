import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  }
});
