import { useEffect, useRef, useState } from "react";
import { useTodo } from "../context";
import Input from "./Input";

function Todo({ todo }) {
  const inputRef = useRef(null)

  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [msg, setMsg] = useState(todo.desc);

  const { deleteTodo, toggleChecked, updateTodo } = useTodo();

  useEffect(() => {
    if(isTodoEditable && inputRef.current)
      inputRef.current.focus()
  }, [isTodoEditable])

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, desc: msg });
    setIsTodoEditable(false);
  };


  return (
    <div className="mb-1 flex flex-wrap items-center justify-between w-full">
      <div className="flex flex-wrap items-center justify-baseline sm:w-[85%]">
        <Input
          width={"w-3"}
          height={"h-3"}
          checked={todo.checked}
          id={todo.id}
          toggleChecked={toggleChecked}
        />
        <input
          className={`text-white font-light p-1 px-3 w-[90%] ${
            todo.checked ? ' line-through text-primary' : ' text-white'
          }`}
          value={msg}
          readOnly={!isTodoEditable}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          ref={inputRef}
          style={{
            cursor: todo.checked || !isTodoEditable ? "not-allowed" : "text",
          }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-end gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          onClick={(e) => {
            if (todo.checked) return;
            if (isTodoEditable) editTodo();
            else setIsTodoEditable((prev) => !prev);
          }}
          style={{ cursor: todo.checked ? "not-allowed" : "pointer" }}
        >
          <path
            fill="#ff00fb"
            d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
          />
          <path
            fill="#ff00fb"
            d="m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => deleteTodo(todo.id)}
        >
          <g fill="#ff00fb">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="#ff00fb"
              d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07L5 7H4a1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Todo;
