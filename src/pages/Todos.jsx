import React, { useEffect } from "react";
import useTodoStore from "../store/todoStore";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import "../App.css";
const Todos = () => {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="app-container">
      <h1>Todos</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
