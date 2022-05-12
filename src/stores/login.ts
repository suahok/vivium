import { defineStore } from "pinia"
import { useStorageEvent } from "@/utils/storage"

const storage = useStorageEvent()

export const useLoginStore = defineStore("login", {
  state() {
    return {
      isLoggedIn: storage.getItem("isLoggedIn"),
      redirect: storage.getItem("redirect")
    }
  },
  actions: {
    changeRedirectEncode(path: string) {
      this.redirect = btoa(encodeURIComponent(path))
    },
    login() {
      this.isLoggedIn = true
      storage.setItem("isLoggedIn", this.isLoggedIn)
      this.redirect && storage.setItem("redirect", this.redirect)
      const redirect = this.redirect ? decodeURIComponent(atob(this.redirect)) : "/"
      this.router.push({ path: redirect, replace: true })
    },
    logout() {
      storage.clear()
      if (!this.redirect) {
        this.router.replace("/login")
        return
      }
      this.router.push({ path: "/login", replace: true, query: { redirect: this.redirect } })
    }
  }
})
