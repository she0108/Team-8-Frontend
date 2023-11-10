import React, { useState } from "react";
import {
  Button,
  ButtonColorVariant,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitleSize,
  ModalBody,
  TextField,
  TextFieldType,
  Text,
  Typography,
  ButtonGroup,
} from "@channel.io/bezier-react";
import { ChevronSmallDownIcon } from "@channel.io/bezier-icons";
import useFilterStore from "@/store/filterStore";

const FilterPriceButton: React.FC = () => {
  const { price, setPrice } = useFilterStore();
  const [startValue, setStartValue] = useState(price[0]);
  const [endValue, setEndValue] = useState(price[1]);

  const updatePriceState = () => {
    setPrice(startValue, endValue);
  };

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="가격"
          colorVariant={ButtonColorVariant.MonochromeLight}
          rightContent={ChevronSmallDownIcon}
          onClick={() => {}}
        />
      </ModalTrigger>
      <ModalContent showCloseIcon={true}>
        <ModalHeader title="가격" titleSize={ModalTitleSize.L} />
        <ModalBody>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 16,
              marginTop: 8,
            }}
          >
            <TextField
              type={TextFieldType.Number}
              style={{ width: 100 }}
              value={startValue}
              onChange={(e) => setStartValue(e.target.value)}
            />
            <Text
              typo={Typography.Size22}
              style={{ marginLeft: 8, marginRight: 8 }}
            >
              ~
            </Text>
            <TextField
              type={TextFieldType.Number}
              style={{ width: 100 }}
              value={endValue}
              onChange={(e) => setEndValue(e.target.value)}
            />
            <Text typo={Typography.Size22} style={{ marginLeft: 4 }}>
              원
            </Text>
          </div>
          <ButtonGroup justify="end">
            <Button text="적용" onClick={updatePriceState} />
          </ButtonGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterPriceButton;
