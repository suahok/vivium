import { request } from "@/utils/request"
import { defineStore } from "pinia"

type Todo = {
  id: number
  title: string
  userId: number
  completed: boolean
}

type State = {
  todos: Todo[]
}

type Actions = {
  getTodos(id: number): Promise<boolean>
}

export const useTodoStore = defineStore<string, State, {}, Actions>("todos", {
  state: () => ({
    todos: []
  }),
  actions: {
    async getTodos(userId) {
      try {
        this.todos = await request<Todo[]>({
          method: "get",
          url: "/todos",
          params: { userId }
        })
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    }
  }
})
