import { useEffect, useState } from "react";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function AddTodo({ setEditTodo, editTodo }) {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === editTodo.id)
  );

  useEffect(() => {
    if (editTodo.bool) {
      setInput(() => todo?.text || "");
    }
  }, [editTodo, todo]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!editTodo.bool) {
      dispatch(addTodo(input));
      setInput("");
      return;
    }

    if (input.trim()) {
      dispatch(updateTodo({ id: todo.id, text: input }));
      setEditTodo({ bool: false, id: "" });
    }
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a todo..."
        />
        <button type="submit">
          {editTodo.bool ? "Edit Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
