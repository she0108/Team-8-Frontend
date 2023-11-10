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

const FilterStackButton: React.FC = () => {
  const { stack, setStack } = useFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="기술스택"
          colorVariant={ButtonColorVariant.MonochromeLight}
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="기술 스택" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Button
              text="HTML"
              colorVariant={
                stack[0]
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setStack(0)}
            />
            <Button
              text="CSS"
              colorVariant={
                stack[1]
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setStack(1)}
            />
            <Button
              text="Javascript"
              colorVariant={
                stack[2]
                  ? ButtonColorVariant.Blue
                  : ButtonColorVariant.MonochromeLight
              }
              onClick={() => setStack(2)}
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterStackButton;
