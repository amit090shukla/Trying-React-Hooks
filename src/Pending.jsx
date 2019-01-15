import React from "react";
import * as _ from "lodash";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import styled from "styled-components";

// Styled Components
const PendingWrapper = styled.div`
  margin-left: 20px;
  margin-bottom: 15px;
  padding: 20px;
  background: #ff7575;
  color: #fff;
  border-radius: 8px;
`;
const HeadingStyle = styled.span`
  font-weight: 600;
`;

const PendingTodos = styled.div`
  background: rgb(255, 135, 135);
  margin: 10px 0;
  padding: 3px;
`;
//------------------------------------------------------
export default ({ todos }) => {
  const pending = _.filter(todos, ["complete", false]);

  return (
    <PendingWrapper>
      <HeadingStyle style={{ fontWeight: "600" }}>Pending Tasks</HeadingStyle>
      {pending.map((val, key) => (
        <PendingTodos key={key}>
          <RemoveCircle fontSize="small" />
          <span style={{ marginLeft: "15px" }}>{val.text}</span>
        </PendingTodos>
      ))}
    </PendingWrapper>
  );
};
