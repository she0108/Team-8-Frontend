import React from "react";

function DetailItem(props) {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "15px",
        alignItems: "center",
        height: "30px",
      }}
    >
      {props.children}
    </div>
  );
}

export default DetailItem;
