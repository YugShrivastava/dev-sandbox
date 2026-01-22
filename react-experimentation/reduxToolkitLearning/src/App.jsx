import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  const [editTodo, setEditTodo] = useState({
    bool: false,
    id: 1
  })

  return (
    <>
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo}/>
      <Todos editTodo={editTodo} setEditTodo={setEditTodo}/>
    </>
  )
}

export default App
