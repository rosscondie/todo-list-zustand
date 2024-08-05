import React, { useState } from "react";
import useTodoStore from "../store/todoStore.jsx";

const Todos = () => {
  const { todos, deleteTodo, toggleTodo, editTodo } = useTodoStore((state) => ({
    todos: state.todos,
    deleteTodo: state.deleteTodo,
    toggleTodo: state.toggleTodo,
    editTodo: state.editTodo,
  }));

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setNewText(todo.title);
  };

  const handleSaveClick = (todoId) => {
    editTodo(todoId, newText);
    setEditingId(null);
    setNewText("");
  };

  return (
    <>
      <ul>
        {todos.map((todo, id) => {
          const isEditing = editingId === todo.id;
          return (
            <React.Fragment key={id}>
              <li className="todo-item">
                <span className="todo-item-col-1">
                  <input
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    type="checkbox"
                  />
                </span>
                {isEditing ? (
                  <input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    type="text"
                  />
                ) : (
                  <span>{todo?.title}</span>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                {isEditing ? (
                  <button
                    className="save-btn"
                    onClick={() => handleSaveClick(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(todo)}
                  >
                    Edit
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
