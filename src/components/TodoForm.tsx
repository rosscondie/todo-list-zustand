import { useState } from "react";

import useTodoStore from "../store/todoStore.js";

const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [todoTitle, setTodoTitle] = useState("");

  const handleTodoSubmit = () => {
    if (!todoTitle) return alert("please add a todo!");
    addTodo({
      id: Date.now(),
      title: todoTitle,
    });
    setTodoTitle("");
  };

  return (
    <div className="form-container">
      <input
        className="form-input"
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        type="text"
      />
      <button
        className="form-submit-btn"
        onClick={() => {
          handleTodoSubmit();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
