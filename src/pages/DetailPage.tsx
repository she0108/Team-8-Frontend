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
import { useEffect, useState } from "react";
export type ReviewType = {
  review_id: number;
  star?: number;
  good_review?: string;
  bad_review?: string;
  created_at?: any;
  user_id?: number;
  user_name?: string;
};
export type LectureInfoType = {
  lecture_id: number;
  is_active: boolean;
  running_time: string;
  // created_at: string
  language: string;
  title: string;
  original_price?: string;
  current_price?: any;
  introduction?: string;
  link?: string;
  thumbnail?: string;
  lecturer: string;
  course_hours?: string;
  difficulty?: string;
  company_id: number;
  price?: string;
  discount_rate?: string;
  platform?: string;
  rating?: number;
  review_amount?: number;
  review?: ReviewType[];
  stack?: string[];
};

function DetailPage() {
  const { id } = useParams();

  const userId = localStorage.getItem("user_id");
  const [detailInfo, setDetailInfo] = useState<LectureInfoType>();
  const [rating, setRating] = useState<number>(5);
  const [writingGoodReview, setWritingGoodReview] = useState<string>("");
  const [writingBadReview, setWritingBadReview] = useState<string>("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}lecture/${id}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setDetailInfo(result);
      });
  }, [id]);
  const submitReview = () => {
    fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }reviews/?user_id=${userId}&lecture_id=${id}&star=${rating}&good_review=${writingGoodReview}&bad_review=${writingBadReview}`,
      { method: "POST" }
    )
      .then((response) => {
        if (response.status > 200) {
          alert("댓글 등록에 실패하였습니다. \n 다시 시도해주세요");
          return;
        } else {
          alert("리뷰가 작성되었습니다.");
        }
        return response.json();
      })
      .then(() => window.location.reload());
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
          {detailInfo?.title}
        </Text>
        <VStack style={{ gap: "10px" }}>
          <DetailItem>
            <Text style={{ width: "80px" }}>기술스택 </Text>
            <div style={{ display: "flex", gap: "10px" }}>
              {detailInfo?.stack?.map((s) => {
                return <DetailTag item={s} />;
              })}
            </div>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>난이도</Text>
            <Text>
              {detailInfo?.difficulty ? detailInfo.difficulty : "정보 없음"}
            </Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>수강시간</Text>
            <Text>{detailInfo?.running_time}</Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>평점</Text>
            <Text style={{ display: "flex", alignItems: "center" }}>
              <Star />
              <Text marginLeft={6}>{detailInfo?.rating?.toFixed(1)}</Text>
            </Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>가격</Text>
            <Text>{detailInfo?.original_price}</Text>
          </DetailItem>
          <DetailItem>
            <Text style={{ width: "80px" }}>플랫폼</Text>
            <a href={"https://www.inflearn.com"} style={{ color: "black" }}>
              <Text>{detailInfo?.platform}</Text>
            </a>
          </DetailItem>
        </VStack>
        <Divider orientation="horizontal" />
        <Text typo={Typography.Size22} bold={true} style={{ margin: "10px" }}>
          수강평 (<span>{detailInfo?.review_amount}</span>)
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
          {detailInfo?.review?.map((r) => {
            return (
              <ReviewContent
                user_name={r.user_name}
                good_review={r.good_review}
                bad_review={r.bad_review}
              />
            );
          })}
        </VStack>
      </VStack>
    </div>
  );
}

export default DetailPage;
