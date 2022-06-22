import type { Router, RouteRecordRaw } from "vue-router"
import type { MenuRow } from "@/mock/menus"
import { useMenuStore } from "@/stores/menus"
import { toTree } from "@/utils/toTree"
import { storage } from "@/utils/storage"

const modules = import.meta.glob("../**/*.vue")
function _import(pathname: string) {
  // return () => import(`../${pathname}.vue`)
  return modules[`../${pathname}.vue`]
}

function menusToRoutes(menus: MenuRow[]) {
  return menus.map(item => {
    if (item.children) {
      item.component = _import(`${item.pathname}/${item.name}`)
      menusToRoutes(item.children)
      delete item.id
      delete item.pid
      delete item.pathname
      return item
    } else {
      item.component = _import(`${item.pathname}/${item.name}`)
      delete item.id
      delete item.pid
      delete item.pathname
      return item
    }
  })
}

export const registerRoutes = async (router: Router): Promise<boolean> => {
  const menuStore = useMenuStore()

  router.addRoute({
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  })

  try {
    if (!storage.has("menus")) {
      await menuStore.getMenus()
    }
    if (menuStore.menus.length) {
      const dynamicRoutes = menusToRoutes(toTree(menuStore.menus))
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
