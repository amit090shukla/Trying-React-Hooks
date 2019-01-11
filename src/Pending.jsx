import React from "react";
import * as _ from "lodash";

export default ({ todos }) => {
  const pending = _.filter(todos, ["complete", false]);
  console.log(pending);

  return (
    <ul>
      <span>Pending</span>
      {pending.map((val, key) => (
        <li key={key}>{val.text}</li>
      ))}
    </ul>
  );
};
