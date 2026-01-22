import { useEffect, useState } from "react";
import { Add, Show, Todo } from "./components";
import { TodoProvider } from "./context";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [todos, setTodos] = useState([]);

  const [showFinish, setShowFinish] = useState(false);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleChecked = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, checked: !prevTodo.checked }
          : prevTodo
      )
    );
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, todos, toggleChecked, updateTodo }}
    >
      <Analytics />
      <div className="w-full h-screen bg-black flex flex-wrap flex-col items-center pt-24 px-5">
        <h1 className="text-5xl text-primary m-0 mb-14 font-light">
          Just do it!
        </h1>
        <div className="flex flex-col gap-0 items-baseline justify-center">
          <Add />
          <Show setShowFinish={setShowFinish} showFinish={showFinish} />
          <hr className="border-t-1 border-gray-700 w-full mb-3" />
          {showFinish
            ? todos.map((todo) =>
                todo.checked === true ? (
                  <div className="w-full " key={todo.id}>
                    <Todo todo={todo} />
                  </div>
                ) : null
              )
            : todos.map((todo) =>
                todo.checked === true ? (
                  <div className="w-full " key={todo.id}>
                    <Todo todo={todo} />
                  </div>
                ) : null
              )}
          {showFinish
            ? null
            : todos.map((todo) =>
                todo.checked === false ? (
                  <div className="w-full " key={todo.id}>
                    <Todo todo={todo} />
                  </div>
                ) : null
              )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
