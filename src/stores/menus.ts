import type { MenuRow } from "@/mock/menus"
import { request } from "@/utils/request"
import { defineStore } from "pinia"

type State = {
  menus: MenuRow[]
}

type Actions = {
  fetchMenus(): Promise<any>
}

export const useMenuStore = defineStore<string, State, {}, Actions>("todos", {
  state: () => ({
    menus: []
  }),
  actions: {
    async fetchMenus() {
      try {
        this.menus = await request<MenuRow[]>({
          method: "GET",
          url: "/menus"
        })
        return this.menus
      } catch (error) {
        console.error(error)
      }
    }
  }
})
