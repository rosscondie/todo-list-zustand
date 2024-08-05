import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="app-container">
      <h1>My Todo's</h1>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
