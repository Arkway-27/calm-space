import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://arkway-27.github.io/calm-space",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
});
