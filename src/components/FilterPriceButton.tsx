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
  TextField,
  TextFieldType,
  Text,
  Typography,
} from "@channel.io/bezier-react";
import { ChevronSmallDownIcon } from "@channel.io/bezier-icons";
import useFilterStore from "@/store/filterStore";

const FilterPriceButton: React.FC = () => {
  const { price, setPrice } = useFilterStore();

  return (
    <Modal>
      <ModalTrigger>
        <Button
          text="가격"
          colorVariant={
            price[0] > 0 || price[1] < 999999
              ? ButtonColorVariant.Blue
              : ButtonColorVariant.MonochromeLight
          }
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
              value={price[0]}
              onChange={(e) => setPrice(parseInt(e.target.value), price[1])}
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
              value={price[1]}
              onChange={(e) => setPrice(price[0], parseInt(e.target.value))}
            />
            <Text typo={Typography.Size22} style={{ marginLeft: 4 }}>
              원
            </Text>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FilterPriceButton;
