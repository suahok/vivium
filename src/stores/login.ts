import { defineStore } from "pinia"
import { useStorageEvent } from "@/utils/storage"

const storage = useStorageEvent()

export const useLoginStore = defineStore("login", {
  state() {
    return {
      isLoggedIn: storage.getItem("isLoggedIn"),
      redirect: ""
    }
  },
  actions: {
    changeRedirectEncode(path: string) {
      this.redirect = btoa(encodeURIComponent(path))
    },
    login() {
      this.isLoggedIn = true
      storage.setItem("isLoggedIn", this.isLoggedIn)
      const redirect = this.redirect ? decodeURIComponent(atob(this.redirect)) : "/"
      this.router.push({ path: redirect, replace: true })
    },
    logout() {
      storage.clear()
      this.router.go(0)
    }
  }
})
