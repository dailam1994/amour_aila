import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import react from "@vitejs/plugin-react"
// import reactRefresh from '@vitejs/plugin - react - refresh'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      // VitePWA({
      //    includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      //    manifest: {
      //       workbox: {
      //          sourcemap: true,
      //       },
      //       strategies: "injectManifest",
      //       name: "Lashing Success",
      //       short_name: "LashLash",
      //       description: "Web presence and booking/ application for small business",
      //       theme_color: "#ffffff",
      //       scope: "/",
      //       start_url: "/",
      //       icons: [
      //          {
      //             src: "dist/pwa-192x192.png",
      //             sizes: "192x192",
      //             type: "image/png",
      //          },
      //          {
      //             src: "dist/pwa-512x512.png",
      //             sizes: "512x512",
      //             type: "image/png",
      //          },
      //          {
      //             src: "dist/pwa-512x512.png",
      //             sizes: "512x512",
      //             type: "image/png",
      //             purpose: "any maskable",
      //          },
      //       ],
      //    },
      // }),
   ],
})
