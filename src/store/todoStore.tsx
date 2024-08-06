import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const todoStore = (set) => ({
  todos: [],
  fetchTodos: async () => {
    const todos = await getTodos();
    set({ todos });
  },
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos],
    }));
  },
  deleteTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    }));
  },
  toggleTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  editTodo: (todoId, newText) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, title: newText } : todo
      ),
    }));
  },
});

const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "todos",
    })
  )
);

export default useTodoStore;
