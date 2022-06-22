import { resolve } from "path"
import type { ConfigEnv, UserConfigExport } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from "vite-plugin-mock"
import Components from "unplugin-vue-components/vite"
import WindiCSS from "vite-plugin-windicss"

export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true

  return {
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS(),
      Components({
        dirs: ["src/components"],
        dts: "src/components.d.ts",
        extensions: ["vue"]
      }),
      viteMockServe({
        mockPath: "./src/mock",
        localEnabled: command === "serve",
        prodEnabled: command !== "serve" && prodMock,
        injectCode: `
          import { setupProdMockServer } from "./mockProdServer";
          setupProdMockServer();
        `
      })
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
          manualChunks(chunkId) {
            if (chunkId.includes("node_modules")) {
              return chunkId.split("node_modules/")[1].split("/")[0].toString()
            }
          },
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
  }
}
