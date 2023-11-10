import React from "react";
import Rating from "@mui/material/Rating";
import { Icon, Text, Typography } from "@channel.io/bezier-react";
import {
  HandThumbdownFilledIcon,
  HandThumbupFilledIcon,
} from "@channel.io/bezier-icons";
import { ReviewType } from "@/pages/DetailPage";

function ReviewContent({
  review_id,
  star,
  good_review,
  bad_review,
  user_name,
}: ReviewType) {
  return (
    <div onClick={() => console.log(review_id)}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Text typo={Typography.Size16} bold={true}>
          {user_name}
        </Text>
        <Rating value={star} readOnly />
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Icon source={HandThumbupFilledIcon} />
        <Text>{good_review}</Text>
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Icon source={HandThumbdownFilledIcon} />
        <Text>{bad_review}</Text>
      </div>
    </div>
  );
}

export default ReviewContent;
