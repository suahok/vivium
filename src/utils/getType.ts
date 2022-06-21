export function getType(value: unknown) {
  const type = typeof value
  if (type !== "object") {
    return type
  }
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, "$1")
}
