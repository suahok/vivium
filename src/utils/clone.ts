export function deepClone(data: any, hash = new WeakMap()) {
  if (typeof data !== "object") return data
  if (hash.get(data)) return hash.get(data)
  const clone = new data.constructor()
  hash.set(data, clone)
  for (const [key, value] of Object.entries(data)) {
    if (Reflect.has(data, key)) {
      clone[key] = deepClone(value, hash)
    }
  }
  return clone
}
