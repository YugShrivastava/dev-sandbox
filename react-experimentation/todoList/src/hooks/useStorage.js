import { useState } from "react";

// const [todos, setTodos] = useState(JSON.stringify([]))
// const [todo, setTodo] = useState({
//   desc: '',
//   checked: false,
//   id: null,
// })

// export const setTodoToLocalStorage = (todo) => {
//   const currTodos = JSON.parse(localStorage.getItem('todos'))
//   currTodos.push(todo)
//   setTodos(currTodos)
//   localStorage.setItem('todos', JSON.stringify(currTodos))
// }

// export const getTodoFromLocalStorage = (key) => {
//   const currTodos = JSON.parse(localStorage.getItem('todos'))
//   const currTodo = currTodos[key]
//   setTodo(currTodo)
//   return [todo, setTodo]
// }

// export const removeTodoFromLocalStorage = (key) => {
//   const currTodos = JSON.parse(localStorage.getItem('todos'))
//   const newTodos = currTodos.filter((_, index) => index !== key)
//   setTodos(newTodos)
//   localStorage.setItem('todos', JSON.stringify(newTodos))
// }

// export const getAllTodosFromLocalStorage = () => {
//   const currTodos = JSON.parse(localStorage.getItem('todos'))
//   setTodos(currTodos)
//   return [todos, setTodos]
// }

// export default useStorage = () => {
//   const [todos, setTodos] = useState([])

//   return [todos, setTodos]
// }