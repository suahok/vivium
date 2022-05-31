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
  fetchTodos(userId: number): void
}

export const useTodoStore = defineStore<string, State, {}, Actions>("todos", {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos(userId) {
      try {
        this.todos = await request<Todo[]>({
          method: "GET",
          url: "/todos",
          params: { userId }
        })
        return
      } catch (error) {
        console.error(error)
      }
    }
  }
})
