import React from "react";
import * as _ from "lodash";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

export default ({ todos }) => {
  const pending = _.filter(todos, ["complete", false]);

  return (
    <div
      style={{
        marginLeft: "20px",
        marginBottom: "15px",
        padding: "20px",
        background: "#ff7575",
        color: "#fff",
        borderRadius: "8px"
      }}
    >
      <span style={{ fontWeight: "600" }}>Pending Tasks</span>
      {pending.map((val, key) => (
        <div
          key={key}
          style={{
            background: "rgb(255, 135, 135)",
            margin: "10px 0",
            padding: "3px"
          }}
        >
          <RemoveCircle fontSize="small" />
          <span style={{ marginLeft: "15px" }}>{val.text}</span>
        </div>
      ))}
    </div>
  );
};
