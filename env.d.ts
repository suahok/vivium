/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly VITE_PROXY_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
