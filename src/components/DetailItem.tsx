import { ReactNode } from "react";

interface DetailItemProps {
  children: ReactNode;
}

function DetailItem(props: DetailItemProps): JSX.Element {
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
