import FilterAreaButton from "@/components/FilterAreaButton";
import FilterPriceButton from "@/components/FilterPriceButton";
import FilterStackButton from "@/components/FilterStackButton";
import LectureItem from "@/components/LectureItem";
import { SearchIcon } from "@channel.io/bezier-icons";
import {
  Divider,
  Icon,
  IconSize,
  Tag,
  TextField,
  TextFieldSize,
  TextFieldType,
} from "@channel.io/bezier-react";
import areaArray from "./../constant/area";
import stackArray from "./../constant/stack";
import useFilterStore from "@/store/filterStore";

const SearchPage: React.FC = () => {
  const { area, setArea, stack, setStack, price, setPrice } = useFilterStore();

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
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Icon
          source={SearchIcon}
          color="bgtxt-blue-normal"
          size={IconSize.Normal}
          style={{ marginRight: 8 }}
        />
        <TextField
          type={TextFieldType.Search}
          size={TextFieldSize.L}
          placeholder="강의 제목, 분야, 기술 스택 등"
          style={{ flexShrink: 0 }}
        />
      </div>
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
        {area.map(
          (selected, index) =>
            selected && (
              <Tag onDelete={() => setArea(index)}>{areaArray[index]}</Tag>
            )
        )}
        {stack.map(
          (selected, index) =>
            selected && (
              <Tag onDelete={() => setStack(index)}>{stackArray[index]}</Tag>
            )
        )}
        {(price[0] > 0 || price[1] < 999999) && (
          <Tag onDelete={() => setPrice(0, 999999)}>
            {price[0]} ~ {price[1]}
          </Tag>
        )}
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
