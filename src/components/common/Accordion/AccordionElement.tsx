"use client";
import { AddIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const AccordionElement = ({isLast,isFirst,question,answer} : {isLast?: boolean,isFirst?: boolean,question: string,answer: string}) => {
  return (
    <AccordionItem borderBottom={ !isLast ? "1px solid rgba(19, 114, 118, 0.1)" : "none" } borderTop={'none'} outline={'none'}>
      {({ isExpanded }) => (
        <Box bg={isExpanded ? "lightGreen" : "#fff"}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={{ base: "16px", lg: "18px" }}
                fontWeight={"800"}
                color={"rgba(11, 72, 73, 1)"}
                py={'12px'}
              >
                {question}
              </Box>
              <AddIcon
                fontSize="12px"
                transition={"all .3s ease"}
                transform={isExpanded ? "rotate(135deg)" : "rotate(0deg)"}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           {answer}
          </AccordionPanel>
        </Box>
      )}
    </AccordionItem>
  );
};

export default AccordionElement;
