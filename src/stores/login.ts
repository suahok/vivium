import { defineStore } from "pinia"
import { storage } from "@/utils/storage"

export const useLoginStore = defineStore("login", {
  state() {
    return {
      isLogined: storage.get("isLogined"),
      redirect: ""
    }
  },
  actions: {
    redirectEncode(path: string) {
      this.redirect = btoa(encodeURIComponent(path))
    },
    login() {
      this.isLogined = true
      storage.set("isLogined", this.isLogined)
      const redirect = this.redirect ? decodeURIComponent(atob(this.redirect)) : "/"
      this.router.push({ path: redirect, replace: true })
    },
    logout() {
      storage.clear()
      this.router.go(0)
    }
  }
})
