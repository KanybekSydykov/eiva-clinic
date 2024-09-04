"use client";
import React from "react";
import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import LinkMenu from "@/components/ui/LinkMenu";
const NavbarDesktop = ({data}: any) => {
  return (
    <Flex
      flexGrow={1}
      flexDir={"row"}
      flexWrap={"nowrap"}
      gap={{lg:'16px',xl:'40px'}}
      justifyContent={{ base:"space-between",xl:'flex-end' }}
      display={{ base: "none", lg: "flex" }}
      pos={'relative'}
      zIndex={1}
    >
      <Box
        width={"fit-content"}
        pos={"relative"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0, -3px, 0)",
          textDecor: "underline",
        }}
        h={"max-content"}
      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          Главная
        </Text>
        <Link
          href={"/"}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        width={"fit-content"}
        h={"max-content"}
        pos={"relative"}
        bg={"transparent"}
        transition={"all .3s ease"}
        flexShrink={0}
        _hover={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0, -3px, 0)",
          textDecor: "underline",
        }}
      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
          wordBreak={"keep-all"}
        >
          О нас
        </Text>
        <Link
          href={"/o-nas"}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <LinkMenu  categories={data}/>
      <Box
        width={"fit-content"}
        h={"max-content"}
        pos={"relative"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0, -3px, 0)",
          textDecor: "underline",
        }}
      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          Специалисты
        </Text>
        <Link
          href={"/specialisty"}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        width={"fit-content"}
        h={"max-content"}
        pos={"relative"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0, -3px, 0)",
          textDecor: "underline",
        }}
      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          Цены
        </Text>
        <Link
          href={"/preiskurant"}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        width={"fit-content"}
        h={"max-content"}
        pos={"relative"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0, -3px, 0)",
          textDecor: "underline",
        }}
      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          Документация
        </Text>
        <Link
          href={"/docs"}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        width={"fit-content"}
        h={"max-content"}
        pos={"relative"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0, -3px, 0)",
          textDecor: "underline",
        }}
      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          Контакты
        </Text>
        <Link
          href={"/kontakty"}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Flex>
  );
};

export default NavbarDesktop;
