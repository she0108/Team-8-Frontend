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
import useFilterStore from "@/store/filterStore";

const FilterDifficultyButton: React.FC = () => {
  const { difficulty, setDifficulty } = useFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="난이도"
          colorVariant={
            difficulty == 0
              ? ButtonColorVariant.MonochromeLight
              : ButtonColorVariant.Blue
          }
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="난이도" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Button
              text="상"
              colorVariant={
                difficulty == 3
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setDifficulty(3)}
            />
            <Button
              text="중"
              colorVariant={
                difficulty == 2
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setDifficulty(2)}
            />
            <Button
              text="하"
              colorVariant={
                difficulty == 1
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setDifficulty(1)}
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterDifficultyButton;
