import { createApp, markRaw } from "vue"
import { createPinia } from "pinia"
import router from "./router"
import App from "./App.vue"

import "virtual:windi.css"

window.addEventListener("storage", evt => {
  if (!evt.key || evt.key === "isLoggedIn") {
    router.go(0)
  }
})

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(router).use(pinia)
app.mount("#app")
