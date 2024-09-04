import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Advantage = ({
  children,
  text,
}: Readonly<{
  children: React.ReactNode;
  text: string;
}>) => {
  return (
    <Flex
      flexDir={"row"}
      gap={"10px"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      p={"8px 26.5px"}
      w={{ base: "100%", lg: "calc(50% - 10px)",xl:'calc(25% - 10px)' }}
      border={"1px solid rgba(15, 95, 98, 0.8)"}
      borderRadius={"90px"}
      transition={"all .3s ease"}
      h={'68px'}
      cursor={"pointer"}
      _hover={{
        transformStyle: "preserve-3d",
        transform: "translate3d(0, -3px, 0)",
        boxShadow:
          "0 2px 5px 0 rgba(19, 114, 118, 0.4), 0 2px 10px 0 rgba(19, 114, 118, 0.12)",
      }}
    >
      {children}
      <Text
        color={"rgba(15, 95, 98, 1)"}
        fontFamily={"mulish"}
        fontSize={{ base: "14px", lg: "16px" }}
        fontWeight={"500"}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default Advantage;
