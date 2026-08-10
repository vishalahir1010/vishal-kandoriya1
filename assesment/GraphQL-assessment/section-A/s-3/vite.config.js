import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/restaurant-api": {
        target: "https://fakerestaurantapi.runasp.net",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/restaurant-api/, ""),
      },
    },
  },
});