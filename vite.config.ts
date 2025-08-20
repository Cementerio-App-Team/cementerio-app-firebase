import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/meteo": {
        target: "https://www.el-tiempo.net",
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/meteo/, ""),
      },
    },
  },
});
