class LocalStorage {
  private storage: Storage

  constructor() {
    this.storage = sessionStorage
  }

  has(key: string) {
    const item = this.storage.getItem(key)
    if (!item) return false
    return true
  }

  set(key: string, value: any) {
    const newStorageEvent = document.createEvent("StorageEvent")
    sessionStorage.setItem(key, JSON.stringify(value))
    newStorageEvent.initStorageEvent("setItem", false, false, key, null, value)
    window.dispatchEvent(newStorageEvent)
  }

  get(key: string) {
    const item = this.storage.getItem(key)
    if (!item) return
    return JSON.parse(item)
  }

  del(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

export const storage = new LocalStorage()
