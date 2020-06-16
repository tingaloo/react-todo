import React, { useState, useEffect } from 'react';
import './App.css';
import './tailwind.generated.css';



function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit =(evt) => {
    let temp = [...todos,{text:text}];
    setTodos(temp)
    setText('');
    evt.preventDefault();
  }

  const handleChange = (evt) => {
    setText(evt.target.value)
  }

  return (
    <div className="App mt-20">
      <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {todos.map((item) =>
        <li>{item.text}</li>
      )}
      </div>

    </div>
  );
}

export default App;
