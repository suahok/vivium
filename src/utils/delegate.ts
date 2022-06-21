export function delegate(element: HTMLElement, eventType: string, selector: string, fn: (...args: any) => void) {
  element.addEventListener(
    eventType,
    evt => {
      let el = evt.target

      while (!(el as HTMLElement).matches(selector)) {
        if (element === el) {
          el = null
          break
        }
        el = (el as HTMLElement).parentNode
      }

      el && fn.call(el, evt, el)
    },
    { capture: true }
  )

  return element
}
