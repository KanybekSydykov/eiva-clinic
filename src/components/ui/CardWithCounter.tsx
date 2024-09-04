import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CounterAnimation from "./CounterAnimation";

const CardWithCounter = ({ value ,index}: { value: number, index: number }) => {
  return (
    <Flex
      w={"100%"}
      py={{ base: "32px", lg: "50px" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"30px"}
      flexDir={"column"}
      borderRadius={{ base: "30px", lg: "50px" }}
      bg={"lightGreen"}
    >
      <Text
        textAlign={"center"}
        fontWeight={{ base: "600", lg: "800" }}
        fontSize={{ base: "16px", lg: "20px" }}
        lineHeight={{ base: "20px", lg: "26px" }}
        color={"darkGreen"}
      >
        Приняли более
      </Text>
      <Box
        textAlign={"end"}
        color={"rgba(11, 72, 73, 1)"}
        fontWeight={"800"}
        fontSize={{ base: "30px", lg: "50px" }}
        lineHeight={{ base: "36px", lg: "60px" }}
        h={{ base: "36px", lg: "60px" }}
        w={'100%'}
        maxW={"120px"}
      >
        <CounterAnimation number={value} divider={false} />
      </Box>

      <Text
        textAlign={"center"}
        fontWeight={{ base: "600", lg: "800" }}
        fontSize={{ base: "16px", lg: "20px" }}
        lineHeight={{ base: "20px", lg: "26px" }}
        color={"darkGreen"}
      >
        родов
      </Text>
    </Flex>
  );
};

export default CardWithCounter;
