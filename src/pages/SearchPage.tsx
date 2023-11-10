import FilterAreaButton from "@/components/FilterAreaButton";
import FilterPriceButton from "@/components/FilterPriceButton";
import FilterStackButton from "@/components/FilterStackButton";
import LectureItem from "@/components/LectureItem";
import {
  Divider,
  Tag,
  TextField,
  TextFieldSize,
  TextFieldType,
} from "@channel.io/bezier-react";

const SearchPage: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <TextField
        type={TextFieldType.Search}
        size={TextFieldSize.L}
        placeholder="강의 제목, 분야, 기술 스택을 검색하세요"
        style={{ flexShrink: 0 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          overflow: "scrollX",
          flexShrink: 0,
        }}
      >
        <FilterAreaButton />
        <FilterStackButton />
        <FilterPriceButton />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flexShrink: 0 }}>
        <Tag onDelete={() => {}}>HTML</Tag>
        <Tag onDelete={() => {}}>Javascript</Tag>
        <Tag onDelete={() => {}}>HTML</Tag>
      </div>
      <Divider />
      <div style={{ overflowY: "scroll", height: 450 }}>
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
        <LectureItem />
      </div>
    </div>
  );
};

export default SearchPage;
