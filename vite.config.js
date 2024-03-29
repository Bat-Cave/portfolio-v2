import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    svgr(),
    react(),
    viteCompression({ filter: /\.(jsx|mjs|json|css|html)$/i }),
    ssr({
      prerender: true,
    }),
  ],
  ssr: {
    // Add libraries containing invalid ESM here
    noExternal: ["iconoir-react"],
  },
});
