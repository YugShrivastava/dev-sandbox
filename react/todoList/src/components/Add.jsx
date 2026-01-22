import { useState } from "react";
import { useTodo } from "../context";

function Add() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ desc: todo, checked: false });

    setTodo("");
  };

  return (
    <div className="flex flex-wrap items-center justify-between sm:gap-12  mb-10">
      <input
        className="w-[80%] sm:w-auto outline-none border-[1px] border-primary sm:rounded-sm text-xl text-primary px-3 py-1.5 font-extralight rounded-l-md"
        placeholder="Enter a todo"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-primary text-white sm:rounded-sm sm:px-4.5 py-1.5 text-xl border-hover border-[1px] border-primary duration-100 rounded-r-md w-[20%] sm:w-auto"
        onClick={add}
      >
        Add
      </button>
    </div>
  );
}

export default Add;
