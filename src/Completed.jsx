import React from "react";
import * as _ from "lodash";

export default ({ todos }) => {
  const completed = _.filter(todos, ["complete", true]);
  return (
    <ul>
      <span>Completed</span>

      {completed.map((val, key) => (
        <li key={key}>{val.text}</li>
      ))}
    </ul>
  );
};
