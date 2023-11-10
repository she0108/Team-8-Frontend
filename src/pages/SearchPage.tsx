import FilterAreaButton from "@/components/FilterAreaButton";
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
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <TextField
        type={TextFieldType.Search}
        size={TextFieldSize.L}
        placeholder="강의 제목, 분야, 기술 스택을 검색하세요"
      />
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <FilterAreaButton />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Tag onDelete={() => {}}>HTML</Tag>
        <Tag onDelete={() => {}}>Javascript</Tag>
        <Tag onDelete={() => {}}>HTML</Tag>
      </div>
      <Divider />
      <div style={{ overflow: "scroll" }}>
        <LectureItem />
        <LectureItem />
        <LectureItem />
      </div>
    </div>
  );
};

export default SearchPage;
