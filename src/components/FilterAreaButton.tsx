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
import areaArray from "./../constant/area";

const FilterAreaButton: React.FC = () => {
  const { area, setArea } = useFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="분야"
          colorVariant={
            area.every((x) => !x)
              ? ButtonColorVariant.MonochromeLight
              : ButtonColorVariant.Blue
          }
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="분야" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {areaArray.map((item, index) => (
              <Button
                text={item}
                colorVariant={
                  area[index]
                    ? ButtonColorVariant.Blue
                    : ButtonColorVariant.MonochromeLight
                }
                onClick={() => setArea(index)}
              />
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterAreaButton;
