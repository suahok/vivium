import { createRouter, createWebHistory } from "vue-router"
import { useLoginStore } from "@/stores/login"
import { registerRoutes } from "./helpers"

function _import(filename: string) {
  return () => import(`../views/${filename}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: _import("Home")
    },
    {
      path: "/login",
      name: "Login",
      component: _import("Login"),
      props: route => ({ redirect: route.query.redirect })
    },
    {
      path: "/404",
      name: "NotFound",
      component: _import("NotFound")
    }
  ]
})

let routeFlag = false

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()

  if (loginStore.isLoggedIn) {
    if (routeFlag) {
      next()
    } else {
      registerRoutes(router)
        .then(() => {
          routeFlag = true
          next({ ...to, replace: true })
        })
        .catch(() => {
          routeFlag = false
          next({ path: "/404", replace: true })
        })
    }
  } else {
    routeFlag = false
    if (to.path !== "/login") {
      loginStore.changeRedirectEncode(to.fullPath)
      next({ path: "/login", replace: true, query: { redirect: loginStore.redirect } })
    } else {
      next()
    }
  }
})

export default router
