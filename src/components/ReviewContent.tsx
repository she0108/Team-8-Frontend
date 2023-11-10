import React from "react";
import Rating from "@mui/material/Rating";
import { Icon, Text, Typography, VStack } from "@channel.io/bezier-react";
import {
  HandThumbdownFilledIcon,
  HandThumbupFilledIcon,
  HandThumbupIcon,
} from "@channel.io/bezier-icons";
import { ReviewType } from "@/pages/DetailPage";

// type ReviewContentProps = {
//   id: string;
//   rating: number;
//   good_review: string;
//   bad_review: string;
// };
// const testData = {
//   id: "asdf",
//   rating: 4.5,
//   good_review:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia dolorem recusandae impedit perspiciatis quibusdam. Enim, facilis. Eos, unde error voluptatem a, ",
//   bad_review:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nesciunt voluptatem non nisi placeat ducimus voluptas excepturi ",
// };
function ReviewContent({ good_review, bad_review, user_name }: ReviewType) {
  // {
  //   id,
  //   rating,
  //   good_review,
  //   bad_review,
  // }: ReviewContentProps

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Text typo={Typography.Size16} bold={true}>
          {user_name}
        </Text>
        <Rating value={2} readOnly />
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
