export const useStorageEvent = () => ({
  setItem(key: string, value: any) {
    const newStorageEvent = document.createEvent("StorageEvent")
    sessionStorage.setItem(key, JSON.stringify(value))
    newStorageEvent.initStorageEvent("setItem", false, false, key, null, value)
    window.dispatchEvent(newStorageEvent)
  },
  getItem(key: string) {
    const item = sessionStorage.getItem(key)
    if (!item) return false
    return JSON.parse(item)
  },
  removeItem(key: string) {
    sessionStorage.removeItem(key)
  },
  clear() {
    sessionStorage.clear()
  }
})
