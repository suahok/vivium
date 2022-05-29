import { resolve } from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from "vite-plugin-mock"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({ resolvers: [NaiveUiResolver()] }),
    viteMockServe({ mockPath: "./src/mock" }),
    splitVendorChunkPlugin()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      output: {
        entryFileNames: "scripts/[name].[hash].js",
        chunkFileNames: "scripts/[name].[hash].js",
        assetFileNames({ name }) {
          const extname = name?.toString().split(".")[1]
          if (extname === "css") {
            return "styles/[name]-[hash].[ext]"
          } else {
            return "static/[ext]/[name]-[hash].[ext]"
          }
        }
      }
    }
  }
})
