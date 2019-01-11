import React from "react";
import * as _ from "lodash";
import Check from "@material-ui/icons/CheckCircle";
export default ({ todos }) => {
  const completed = _.filter(todos, ["complete", true]);
  return (
    <div
      style={{
        marginLeft: "20px",
        marginBottom: "15px",
        padding: "20px",
        background: "rgb(99, 177, 99)",
        color: "#fff",
        borderRadius: "8px"
      }}
    >
      <span style={{ fontWeight: "600" }}>Completed Tasks</span>
      {completed.map((val, key) => (
        <div
          key={key}
          style={{
            background: "rgb(122, 195, 122)",
            margin: "10px 0",
            padding: "3px"
          }}
        >
          <Check fontSize="small" />
          <span style={{ marginLeft: "15px" }}>{val.text}</span>
        </div>
      ))}
    </div>
  );
};
