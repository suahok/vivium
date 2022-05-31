export function toTree<T = any>(source: T[]): T[] {
  const map: any = {}
  source.forEach((item: any) => {
    delete item.children
    map[item.id] = item
  })

  const result: T[] = []
  source.forEach(item => {
    const parent = map[(item as any).pid]
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })

  return result
}
