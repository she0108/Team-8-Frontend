import React from "react";

type DetailTagProps = {
  item: string;
};

function DetailTag({ item }: DetailTagProps) {
  return (
    <div
      style={{
        padding: "4px 8px",
        borderRadius: "6px",
        backgroundColor: "#EFEFF0",
        width: "fit-content",
      }}
    >
      {item}
    </div>
  );
}

export default DetailTag;
