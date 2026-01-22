import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: [{
    id: 1,
    text: 'A simple todo',
  }]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(newTodo)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id)
    },
    updateTodo: (state, action) => {
      const id = action.payload.id
      state.todos = state.todos.map(todo => todo.id === id ? {...todo, text: action.payload.text} : todo)
    }
  }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer