import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: none;
  box-shadow: 0 0 30px #e4e4e4;
  margin: 30px 0;
  font-size: 1.2em;
`;
const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};
export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <Input {...text} placeholder="Add new item" />
    </form>
  );
};
