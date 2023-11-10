import { OutIcon, PlusIcon } from "@channel.io/bezier-icons";
import {
  Avatar,
  AvatarSize,
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTitleSize,
  ModalTrigger,
  Tag,
  TagBadgeSize,
  Text,
  Typography,
} from "@channel.io/bezier-react";

const MyPage: React.FC = () => {
  const onBookmarkClick = () => {
    console.log("보관함");
  };

  const onMyReviewClick = () => {
    console.log("내 수강평");
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 190,
        }}
      >
        <Avatar
          name="profile"
          size={AvatarSize.Size90}
          style={{ marginBottom: 6 }}
        />
        <Text bold typo={Typography.Size22}>
          username
        </Text>
      </div>
      <div
        style={{
          width: 350,
          height: 80,
          backgroundColor: "#EFEFF0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onBookmarkClick}
        >
          <Text typo={Typography.Size22}>14</Text>
          <Text typo={Typography.Size15}>보관함</Text>
        </div>
        <div style={{ width: 1, height: 60, backgroundColor: "#A7A7AA" }} />
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onMyReviewClick}
        >
          <Text typo={Typography.Size22}>2</Text>
          <Text typo={Typography.Size15}>내 수강평</Text>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <Text bold typo={Typography.Size22}>
          내 기술 스택
        </Text>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}
        >
          <Tag size={TagBadgeSize.L}>HTML</Tag>
          <Tag size={TagBadgeSize.L}>CSS</Tag>
          <Tag size={TagBadgeSize.L}>Javascript</Tag>
          <Tag size={TagBadgeSize.L}>React</Tag>
          <Tag size={TagBadgeSize.L}>Next.js</Tag>
          <Tag size={TagBadgeSize.L}>Typescript</Tag>
          <Tag size={TagBadgeSize.L}>TailwindCSS</Tag>
          <Tag size={TagBadgeSize.L}>Firebase</Tag>
          <Modal>
            <ModalTrigger>
              <Button leftContent={PlusIcon} size={ButtonSize.S} />
            </ModalTrigger>
            <ModalContent showCloseIcon={true}>
              <ModalHeader
                title="내 기술 스택 선택"
                titleSize={ModalTitleSize.L}
              />
              <ModalBody>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <Button text="HTML" colorVariant={ButtonColorVariant.Blue} />
                  <Button text="HTML" colorVariant={ButtonColorVariant.Blue} />
                  <Button text="HTML" colorVariant={ButtonColorVariant.Blue} />
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <Button
        text="로그아웃"
        leftContent={OutIcon}
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Secondary}
        style={{ marginTop: 40 }}
      />
    </div>
  );
};

export default MyPage;
