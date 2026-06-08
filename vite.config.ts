import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://archdex-art.github.io/supersearch-site/ on GitHub Pages,
// so production assets need the repo name as the base path. Dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/supersearch-site/" : "/",
  plugins: [react()],
}));
