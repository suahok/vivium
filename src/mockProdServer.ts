import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"
import menus from "./mock/menus"

export function setupProdMockServer() {
  createProdMockServer([...menus])
}
