import { useLoginStore } from "@/stores/login"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("/src/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("/src/views/About.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("/src/views/Login.vue"),
    props: route => ({ redirect: route.query.redirect })
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()

  if (!loginStore.isLoggedIn && to.meta.requiresAuth) {
    loginStore.changeRedirectEncode(to.fullPath)
    return next({ path: "/login", replace: true, query: { redirect: loginStore.redirect } })
  } else {
    return next()
  }
})

export default router
