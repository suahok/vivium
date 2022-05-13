import { useLoginStore } from "@/stores/login"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      order: 1
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    props: route => ({ redirect: route.query.redirect }),
    meta: {
      order: 2
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      requiresAuth: true,
      order: 3
    }
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
