import { StarFilledIcon } from "@channel.io/bezier-icons";
import {
  Badge,
  Tag,
  TagBadgeVariant,
  Text,
  Typography,
} from "@channel.io/bezier-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface LectureItemProps {
  lecture: {
    lecture_id: number;
    thumbnail: string;
    title: string;
    keyword: string;
    rating: number;
  };
}

const LectureItem: React.FC<LectureItemProps> = ({ lecture }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/${lecture.lecture_id}`)}
      style={{ display: "flex", flexDirection: "row", paddingBottom: 20 }}
    >
      <img
        src={lecture.thumbnail || "/images/default.png"}
        alt="강의 썸네일"
        style={{
          width: 90,
          height: 90,
          objectFit: "cover",
          borderRadius: 8,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          overflow: "hidden",
          padding: 6,
          paddingLeft: 10,
        }}
      >
        <Text bold typo={Typography.Size16}>
          {lecture.title}
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {lecture.keyword &&
            lecture.keyword
              .replace("[", "")
              .replace("]", "")
              .split(",")
              .slice(0, 2)
              .map((keyword: string, index: number) => (
                <Tag key={index}>
                  {keyword.replace("'", "").replace("'", "")}
                </Tag>
              ))}
          <Badge icon={StarFilledIcon} variant={TagBadgeVariant.Blue}>
            {lecture.rating.toFixed(1)}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LectureItem;
