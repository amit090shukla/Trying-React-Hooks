import React, { useState } from "react";
import Form from "./Form";
import styled from "styled-components";
import Completed from "./Completed";
import Pending from "./Pending";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 30%;
  font-family: "Open Sans", sans-serif;
  *:focus {
    outline: none;
  }
`;
const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 11rem;
  background: #ffffff00;
  color: black;
  border: 2px solid white;
  box-shadow: 0 2px 6px #e2e2e2;
`;

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
    <Wrapper>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div style={{ display: "flex" }}>
        <Completed todos={todos} />
        <Pending todos={todos} />
      </div>
      <hr />
      <div>
        {todos.map((val, key) => (
          <div
            key={key}
            onClick={() => toggleComplete(key)}
            style={{
              textDecoration: val.complete ? "line-through" : "",
              padding: "10px",
              cursor: "pointer",
              color: val.complete ? "green" : ""
            }}
          >
            {val.text}
          </div>
        ))}
      </div>
      <Button onClick={() => setTodos([])}>Reset Todos</Button>
    </Wrapper>
  );
};

export default App;
