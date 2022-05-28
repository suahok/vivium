import { defineStore } from "pinia"
import { storage } from "@/utils/storage"

export const useLoginStore = defineStore("login", {
  state() {
    return {
      isLoggedIn: storage.get("isLoggedIn"),
      redirect: ""
    }
  },
  actions: {
    changeRedirectEncode(path: string) {
      this.redirect = btoa(encodeURIComponent(path))
    },
    login() {
      this.isLoggedIn = true
      storage.set("isLoggedIn", this.isLoggedIn)
      const redirect = this.redirect ? decodeURIComponent(atob(this.redirect)) : "/"
      this.router.push({ path: redirect, replace: true })
    },
    logout() {
      storage.clear()
      this.router.go(0)
    }
  }
})
