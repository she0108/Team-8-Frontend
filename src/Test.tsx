import { TriangleDownIcon } from "@channel.io/bezier-icons";
import { Button, ButtonColorVariant, ButtonStyleVariant, HStack, StackItem } from "@channel.io/bezier-react";
import React, { useState } from "react";
const OpenDropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        text="Select"
        rightContent={TriangleDownIcon}
        active={isOpen}
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Tertiary}
        onClick={() => setIsOpen(true)}
      />
        Dropdown content
    </div>
  )
}
function Test() {
  return <div>
    <HStack justify="center">
      <StackItem>
        <OpenDropdownButton />
      </StackItem>
    </HStack>

  </div>;
}

export default Test;
