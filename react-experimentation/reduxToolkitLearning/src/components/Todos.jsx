import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

function Todos({ editTodo, setEditTodo }) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleTrueEditTodo = (id) => {
    const edit = { bool: true, id: id };
    setEditTodo(edit);
  };

  // const handleFalseEditTodo = (id) => {
  //   const edit = { bool: false, id: id };
  //   setEditTodo(edit);
  // };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="info">
            <p>id: {todo.id}</p>
            <p>text: {todo.text}</p>
          </div>
          <div className="buttons">
            <button
              className="button"
              onClick={() => handleTrueEditTodo(todo.id)}
            >
              Edit
            </button>
            <button
              className="button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
