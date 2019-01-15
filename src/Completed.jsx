import React from "react";
import * as _ from "lodash";
import Check from "@material-ui/icons/CheckCircle";
import styled from "styled-components";

// Styled Components
const CompletedWrapper = styled.div`
  margin-left: "20px";
  margin-bottom: "15px";
  padding: "20px";
  background: "rgb(99, 177, 99)";
  color: "#fff";
  border-radius: "8px";
`;
const HeadingStyle = styled.span`
  font-weight: 600;
`;

const CompletedTodos = styled.div`
  background: rgb(122, 195, 122);
  margin: 10px 0;
  padding: 3px;
`;
//------------------------------------------------
export default ({ todos }) => {
  const completed = _.filter(todos, ["complete", true]);
  return (
    <CompletedWrapper>
      <HeadingStyle>Completed Tasks</HeadingStyle>
      {completed.map((val, key) => (
        <CompletedTodos key={key}>
          <Check fontSize="small" />
          <span style={{ marginLeft: "15px" }}>{val.text}</span>
        </CompletedTodos>
      ))}
    </CompletedWrapper>
  );
};
