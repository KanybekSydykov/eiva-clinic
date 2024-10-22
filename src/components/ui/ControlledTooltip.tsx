"use client";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Tooltip, useDisclosure } from "@chakra-ui/react";
import React from "react";

const ControlledTooltip = ({ tooltipText }: { tooltipText: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tooltip
      pos={"relative"}
      zIndex={10}
      isOpen={isOpen}
  
      label={tooltipText ? tooltipText : "Тут должна быть подсказка"}
    >
      <QuestionOutlineIcon
        boxSize={"20px"}
        onClick={isOpen ? onClose : onOpen}
        onMouseOver={onOpen}
        onMouseLeave={onClose}
      />
    </Tooltip>
  );
};

export default ControlledTooltip;
