import type { Component } from "vue"

export interface MenuRow {
  id?: number
  pid?: number
  path: string
  name: string
  pathname?: string
  component?: Component
  meta: {
    title: string
  }
  children?: MenuRow[]
}

export const menus: MenuRow[] = [
  {
    id: 1,
    pid: 0,
    path: "/office",
    pathname: "views/office",
    name: "Office",
    meta: { title: "办公管理" }
  },
  {
    id: 2,
    pid: 1,
    path: "ask-off",
    name: "AskOff",
    pathname: "views/office/ask-off",
    meta: { title: "请假申请" }
  },
  {
    id: 3,
    pid: 1,
    path: "on-business",
    name: "OnBusiness",
    pathname: "views/office",
    meta: { title: "出差申请" }
  },
  {
    id: 4,
    pid: 2,
    path: "record",
    name: "Record",
    pathname: "views/office/ask-off",
    meta: { title: "请假记录" }
  },
  {
    id: 5,
    pid: 0,
    path: "/system",
    pathname: "views/system",
    name: "System",
    meta: { title: "系统设置" }
  },
  {
    id: 6,
    pid: 5,
    path: "permission",
    name: "Permission",
    pathname: "views/system/permission",
    meta: { title: "权限管理" }
  },
  {
    id: 7,
    pid: 6,
    path: "user-role",
    name: "UserRole",
    pathname: "views/system/permission",
    meta: { title: "用户角色" }
  },
  {
    id: 8,
    pid: 6,
    path: "menu-setup",
    name: "MenuSetup",
    pathname: "views/system/permission",
    meta: { title: "菜单设置" }
  }
]

export default [
  {
    url: "/api/menus",
    method: "get",
    response: function () {
      return menus
    }
  }
]
