import { mande } from "mande"
import { defineStore } from "pinia"

const api = mande("api")

type Todo = {
  completed: boolean
  id: number
  title: string
  userId: number
}

type State = {
  todos: Todo[]
}

type Actions = {
  fetchTodos: (userId: number) => void
}

export const useTodosStore = defineStore<string, State, {}, Actions>("todos", {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos(userId) {
      try {
        this.todos = await api.get<Todo[]>("todos", { query: { userId } })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
