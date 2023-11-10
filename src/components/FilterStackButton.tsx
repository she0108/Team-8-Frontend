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
import stackArray from "./../constant/stack";

const FilterStackButton: React.FC = () => {
  const { stack, setStack } = useFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="기술스택"
          colorVariant={
            stack.every((x) => !x)
              ? ButtonColorVariant.MonochromeLight
              : ButtonColorVariant.Blue
          }
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="기술 스택" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {stackArray.map((item, index) => (
              <Button
                text={item}
                colorVariant={
                  stack[index]
                    ? ButtonColorVariant.Blue
                    : ButtonColorVariant.MonochromeLight
                }
                onClick={() => setStack(index)}
              />
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterStackButton;
