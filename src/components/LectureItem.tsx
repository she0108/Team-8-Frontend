import { StarFilledIcon } from "@channel.io/bezier-icons";
import {
  Badge,
  Tag,
  TagBadgeVariant,
  Text,
  Typography,
} from "@channel.io/bezier-react";
import React from "react";

const LectureItem: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        id="image"
        style={{ width: 90, height: 90, backgroundColor: "black" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          overflow: "hidden",
          padding: 8,
        }}
      >
        <Text bold typo={Typography.Size18} style={{ marginBottom: 6 }}>
          [코드캠프] 부트캠프에서 만든 고농축 프론트엔드 코스
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Tag>HTML</Tag>
          <Tag>HTML</Tag>
          <Tag>HTML</Tag>
          <Badge icon={StarFilledIcon} variant={TagBadgeVariant.Blue}>
            4.5
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LectureItem;
