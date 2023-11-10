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
import areaArray from "@/constant/area";
import stackArray from "@/constant/stack";
import difficultyArray from "@/constant/difficulty";
import useFilterStore from "@/store/filterStore";
import FilterDifficultyButton from "@/components/FilterDifficultyButton";
import { useEffect, useState } from "react";

interface Lecture {
  title: string;
  keyword: string;
  stacks: string;
  difficulty: number;
}

const SearchPage: React.FC = () => {
  const {
    area,
    setArea,
    stack,
    setStack,
    difficulty,
    setDifficulty,
    price,
    setPrice,
  } = useFilterStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [lectures, setLectures] = useState([]);
  const [filteredLectures, setFilteredLectures] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}lecture/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status <= 200) {
          return response.json();
        }
      })
      .then((result) => {
        setLectures(result);
        setFilteredLectures(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    let filtered = [...lectures];
    //검색어 필터링
    filtered = filtered.filter((x: Lecture) => x.title.includes(searchTerm));
    // 분야(keyword) 필터링
    const selectedArea = areaArray.filter((_, index) => area[index]);
    if (selectedArea.length > 0) {
      filtered = filtered.filter((x: Lecture) => {
        for (const s of selectedArea) {
          if (x.keyword && x.keyword.includes(s)) return true;
        }
      });
    }
    // 기술스택 필터링
    const selectedStack = stackArray.filter((_, index) => stack[index]);
    if (selectedStack.length > 0) {
      filtered = filtered.filter((x: Lecture) => {
        for (const s of selectedStack) {
          if (x.stacks && x.stacks.includes(s)) return true;
        }
      });
    }
    // 난이도 필터링
    if (difficulty != 0) {
      filtered = filtered.filter((x: Lecture) => x.difficulty == difficulty);
    }
    setFilteredLectures(filtered);
  }, [searchTerm, area, stack, difficulty, lectures]);

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
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          flexShrink: 0,
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          overflowX: "scroll",
        }}
      >
        <FilterAreaButton />
        <FilterStackButton />
        <FilterDifficultyButton />
        <FilterPriceButton />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flexShrink: 0 }}>
        {area.map(
          (selected, index) =>
            selected && (
              <Tag key={index} onDelete={() => setArea(index)}>
                {areaArray[index]}
              </Tag>
            )
        )}
        {stack.map(
          (selected, index) =>
            selected && (
              <Tag key={index} onDelete={() => setStack(index)}>
                {stackArray[index]}
              </Tag>
            )
        )}
        {(price[0] > 0 || price[1] < 999999) && (
          <Tag onDelete={() => setPrice(0, 999999)}>
            {price[0]} ~ {price[1]}
          </Tag>
        )}
        {difficulty != 0 && (
          <Tag onDelete={() => setDifficulty(0)}>
            {difficultyArray[difficulty]}
          </Tag>
        )}
      </div>
      <Divider />
      <div style={{ overflowY: "scroll", height: 450 }}>
        {filteredLectures.map((item, index) => (
          <LectureItem key={index} lecture={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
