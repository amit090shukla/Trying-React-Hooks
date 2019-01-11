import React, { useState } from "react";
import Form from "./Form";
import styled from "styled-components";
import Completed from "./Completed";
import Pending from "./Pending";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  font-family: "Open Sans", sans-serif;
  *:focus {
    outline: none;
  }
`;
const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.8rem 0;
  width: 11rem;
  background: #bfbfbf;
  color: white;
  border: none;
  box-shadow: 0 2px 6px #e2e2e2;
  margin-top: 15px;
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
        <div
          style={{
            width: "50%",
            borderRadius: "8px",
            padding: "10px",
            backgroundColor: "#fff",
            color: "#bdbdbd",
            border: "1px solid #c3c3c3"
          }}
        >
          {todos && todos.length ? (
            <div>
              <div style={{ color: "#000", fontWeight: "700" }}>All Items</div>
              {todos.map((val, key) => (
                <div
                  key={key}
                  onClick={() => toggleComplete(key)}
                  style={{
                    textDecoration: val.complete ? "line-through" : "",
                    padding: "10px",
                    cursor: "pointer",
                    color: val.complete ? "green" : "",
                    fontWeight: 700
                  }}
                >
                  {val.text}
                </div>
              ))}
            </div>
          ) : (
            "No item present in the list"
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Pending todos={todos} />
          <Completed todos={todos} />
        </div>
      </div>

      <Button onClick={() => setTodos([])}>Reset Todos</Button>
    </Wrapper>
  );
};

export default App;
