import React, { useState } from "react";
import "./App.css";
import "./tailwind.generated.css";

import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [todoId, setTodoId] = useState(0);

  const handleSubmit = (evt) => {
    let temp = [...todos, { text: text, completed: false, todoId: todoId }];
    let index = todoId;
    index++;

    setTodos(temp);
    setText("");
    setTodoId(index);
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const toggleComplete = (id) => {
    const todoSelected = (o) => o.todoId === id;
    let todoIndex = todos.findIndex(todoSelected);
    todos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos([...todos]);
  };

  return (
    <div className="App ">
      <div className=" mt-20 w-full flex flex-col items-center">
        <header className="page-header">
          <h1>React Todo App</h1>
        </header>
        <form className="w-40" onSubmit={handleSubmit}>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={text}
            onChange={handleChange}
          />
          <input
            className="mt-2 px-3 rounded border cursor-pointer hover:bg-gray-400"
            type="submit"
            value="Add task"
          />
        </form>
        {todos.map((item) => (
          <TodoItem
            item={item}
            toggleComplete={toggleComplete}
            key={item.todoId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
