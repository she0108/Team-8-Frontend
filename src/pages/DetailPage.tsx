import DetailTag from "@/components/DetailTag";
import ReviewContent from "@/components/ReviewContent";
import Star from "@/components/Icons/Star";
import Rating from "@mui/material/Rating";
import { ArrowDownIcon, TriangleDownIcon } from "@channel.io/bezier-icons";
import {
  Button,
  ButtonColorVariant,
  ButtonGroup,
  Divider,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitleSize,
  ModalTrigger,
  Text,
  TextArea,
  TextAreaHeight,
  Typography,
  VStack,
} from "@channel.io/bezier-react";

import { useParams } from "react-router-dom";
import DetailItem from "@/components/DetailItem";
import { useState } from "react";

export type LectureInfoType = {
  lecture_id: number;
  is_active: boolean;
  // created_at: string
  language: string;
  title: string;
  thumbnail?: string;
  lecturer: string;
  course_hours?: string;
  difficulty?: string;
  company_id: number;
  price?: string;
  discount_rate?: string;
  introduction?: string;
};

function DetailPage() {
  const { id } = useParams();
  const labelList = ["분야", "기술스택", "난이도", "평점", "가격", "플랫폼"];
  const testData: LectureInfoType = {
    lecture_id: 1,
    is_active: true,
    language: "javascript",
    title: "[코드캠프] 부트캠프에서 만든 고농축 프론트엔드 코스",
    lecturer: "인프런",
    course_hours: "25시간",
    company_id: 1,
  };
  const [rating, setRating] = useState<number>(5);
  const [writingGoodReview, setWritingGoodReview] = useState<string>("");
  const [writingBadReview, setWritingBadReview] = useState<string>("");

  const submitReview = () => {
    console.log(rating, writingGoodReview, writingBadReview);
    alert("리뷰가 작성되었습니다.");
    clearForm();
  };
  const clearForm = () => {
    setRating(0);
    setWritingGoodReview("");
    setWritingBadReview("");
  };
  return (
    <div style={{ width: "100vw", paddingBottom: "100px" }}>
      <div style={{ width: "100%", height: "200px", backgroundColor: "grey" }}>
        thumbnail
        {/* <img src="" alt="" /> */}
      </div>
      <VStack style={{ padding: "20px", gap: "8px" }}>
        <Text typo={Typography.Size24} bold={true}>
          {testData.title}
        </Text>
        <VStack style={{ gap: "10px" }}>
          <DetailItem>
            <Text style={{ width: "80px" }}>분야</Text>
            <DetailTag item={testData.language} />
          </DetailItem>

          <DetailItem>
            <Text style={{ width: "80px" }}>기술스택 </Text>
            <DetailTag item={testData.language} />
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>난이도</Text>
            <Text>
              {testData.difficulty ? testData.difficulty : "정보 없음"}
            </Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>수강시간</Text>
            <Text>26시간 14분</Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>평점</Text>
            <Text style={{ display: "flex", alignItems: "center" }}>
              <Star />
              <Text marginLeft={6}>4.5</Text>
            </Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>가격</Text>
            <Text>114,000원</Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>플랫폼</Text>
            <a href={"https://www.inflearn.com"} style={{ color: "black" }}>
              <Text>인프런</Text>
            </a>
          </DetailItem>
        </VStack>
        <Divider orientation="horizontal" />
        <Text typo={Typography.Size22} bold={true} style={{ margin: "10px" }}>
          수강평 (<span>145</span>)
        </Text>
        <Divider orientation="horizontal" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            text="최신순"
            rightContent={ArrowDownIcon}
            colorVariant={ButtonColorVariant.MonochromeLight}
          />
          <Modal>
            <ModalTrigger>
              <Button
                text="수강평 작성"
                leftContent={TriangleDownIcon}
                colorVariant={ButtonColorVariant.Blue}
              />
            </ModalTrigger>
            <ModalContent>
              <ModalHeader title="수강평 작성" titleSize={ModalTitleSize.L} />
              <ModalBody>
                <HStack style={{ gap: "10px", marginBottom: "10px" }}>
                  <FormLabel>
                    <Text>평점</Text>
                  </FormLabel>
                  <Rating
                    value={rating}
                    size="large"
                    onChange={(event, newValue) => {
                      console.log(rating);
                      setRating(newValue!);
                    }}
                  />
                </HStack>
                <VStack style={{ gap: "10px" }}>
                  <FormLabel htmlFor="pros">
                    <Text typo={Typography.Size16}>이런 점이 좋았어요</Text>
                  </FormLabel>
                  <TextArea
                    id="pros"
                    minRows={TextAreaHeight.Row3}
                    value={writingGoodReview}
                    onChange={(e) => setWritingGoodReview(e.target.value)}
                  />
                </VStack>
                <VStack style={{ gap: "10px", marginTop: "15px" }}>
                  <FormLabel>
                    <Text typo={Typography.Size16}>이런 점이 아쉬웠어요</Text>
                  </FormLabel>
                  <TextArea
                    minRows={TextAreaHeight.Row3}
                    value={writingBadReview}
                    onChange={(e) => setWritingBadReview(e.target.value)}
                  />
                </VStack>
                <ButtonGroup justify="end" style={{ marginTop: "10px" }}>
                  <ModalClose>
                    <Button
                      text="취소"
                      colorVariant={ButtonColorVariant.MonochromeLight}
                      onClick={clearForm}
                    />
                  </ModalClose>
                  <ModalClose>
                    <Button
                      text="완료"
                      colorVariant={ButtonColorVariant.Blue}
                      onClick={submitReview}
                    />
                  </ModalClose>
                </ButtonGroup>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <VStack style={{ gap: "20px", marginTop: "20px" }}>
          <ReviewContent />
          <ReviewContent />
        </VStack>
      </VStack>
    </div>
  );
}

export default DetailPage;
