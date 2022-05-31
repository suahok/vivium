import type { RouteRecordRaw } from "vue-router"
import type { MenuRow } from "@/mock/menus"
import { useMenuStore } from "@/stores/menus"
import { toTree } from "@/utils/toTree"
import { storage } from "@/utils/storage"
import router from "@/router"

function _import(pathname: string) {
  return () => import("../" + pathname + ".vue")
}

function menusToRoutes(menus: MenuRow[]) {
  return menus.map(item => {
    item.pathname = item.pathname?.split("src")[1].toString() + "/" + item.name

    if (item.children) {
      item.component = _import(item.pathname)
      menusToRoutes(item.children)
      delete item.id
      delete item.pid
      delete item.pathname
      return item
    } else {
      item.component = _import(item.pathname)
      delete item.id
      delete item.pid
      delete item.pathname
      return item
    }
  })
}

export const registerRoutes = async (): Promise<boolean> => {
  const menuStore = useMenuStore()

  router.addRoute({
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  })

  try {
    if (!storage.has("menus")) {
      await menuStore.fetchMenus()
    }
    const dynamicRoutes = menusToRoutes(toTree(menuStore.menus))
    if (dynamicRoutes.length) {
      dynamicRoutes.forEach(route => {
        router.addRoute(route as RouteRecordRaw)
      })
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
