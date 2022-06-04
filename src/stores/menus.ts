import type { MenuRow } from "@/mock/menus"
import { request } from "@/utils/request"
import { defineStore } from "pinia"
import { storage } from "@/utils/storage"

type State = {
  menus: MenuRow[]
}

type Actions = {
  getMenus(): Promise<boolean>
}

export const useMenuStore = defineStore<string, State, {}, Actions>("todos", {
  state: () => ({
    menus: storage.get("menus") || []
  }),
  actions: {
    async getMenus() {
      try {
        this.menus = await request<MenuRow[]>({
          method: "GET",
          url: "/menus"
        })
        storage.set("menus", this.menus)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    }
  }
})
