import React from "react";
import {
  Button,
  ButtonColorVariant,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitleSize,
  ModalBody,
} from "@channel.io/bezier-react";
import { ChevronSmallDownIcon } from "@channel.io/bezier-icons";
// import useAreaFilterStore from "@/store/areaFilterStore";

const FilterAreaButton: React.FC = () => {
  // const { frontend, setFrontend } = useAreaFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="분야"
          colorVariant={ButtonColorVariant.MonochromeLight}
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="분야" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Button
              text="프론트엔드"
              colorVariant={ButtonColorVariant.MonochromeLight}
              onClick={() => {}}
            />
            <Button
              text="프론트엔드"
              colorVariant={ButtonColorVariant.MonochromeLight}
            />
            <Button
              text="프론트엔드"
              colorVariant={ButtonColorVariant.MonochromeLight}
            />
            <Button
              text="프론트엔드"
              colorVariant={ButtonColorVariant.MonochromeLight}
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterAreaButton;
