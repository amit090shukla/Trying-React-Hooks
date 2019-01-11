import React, { useState } from "react";
import Form from "./Form";
import map from "lodash/";

const App = () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = index =>
    setTodos(
      todos.map((todo, k) =>
        k === index
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
      )
    );

  return (
    <div>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map((val, key) => (
          <div
            key={key}
            onClick={() => toggleComplete(key)}
            style={{ textDecoration: val.complete ? "line-through" : "" }}
          >
            {val.text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>Reset Todos</button>
    </div>
  );
};

export default App;
