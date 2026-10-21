import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work from any folder or host (GitHub Pages, Netlify, etc.)
export default defineConfig({
  base: "./",
  plugins: [react()],
});
