"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const SubMenu = ({ closeMenu ,categories}: { closeMenu: () => void,categories:any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      onClick={() => setIsOpen(!isOpen)}
      width={"100%"}
      p={"15px 50px"}
      pos={"relative"}
      borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
      bg={isOpen ? "lightThinGreen" : "transparent"}
      transition={"all .3s ease"}
      _hover={{
        bg: "lightThinGreen",
      }}
    >
      <Flex pos={"relative"} w={"100%"}>
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          Направления
        </Text>
        <Box
          as="span"
          position={"absolute"}
          right={"0px"}
          top={"50%"}
          transform={`translateY(-50%)`}
          width={"8px"}
        
          h={"8px"}
          transition={"all .3s ease"}
          _after={{
            position: "absolute",
            content: '""',
            width: "1px",
            height: "100%",
            left: "50%",
            top: "0px",
            transform: isOpen ? "translateX(-50%) rotate(-135deg)" : "translateX(-50%) rotate(0deg)",
            bg: "rgba(11, 72, 73, 1)",
            transition: "all .3s ease",
            rotate: isOpen ? "3deg" : "0deg"
          }}
          _before={{
            position: "absolute",
            content: '""',
            width: "100%",
            height: "1px",
            left: "0px",
            top: "50%",
            transform: isOpen ? "translateY(-50%) rotate(-135deg)" : "translateY(-50%) rotate(0deg)",
            bg: "rgba(11, 72, 73, 1)",
            transition: "all .3s ease",
          }}
        />
      </Flex>

      <Flex
        flexDir={"column"}
        gap={"30px"}
        mt={isOpen ? "30px" : "0"}
        h={isOpen ? "auto" : "0"}
        overflow={"hidden"}
        opacity={isOpen ? 1 : 0}
        transition={"all .3s ease"}
      >
        {categories.map((category: any) => (
           <Box onClick={closeMenu} key={category.name}>

           <Link
             href={`/services/${category.slug}`}
             style={{
               textDecoration: "none",
               fontFamily: "var(--chakra-fonts-mulish)",
               color: "rgba(6, 51, 52, 1)",
               fontSize: "16px",
               fontWeight: "400",
             }}
           >
             {category.name}
           </Link>
           </Box>
        ))}
       
     
      </Flex>
    </Box>
  );
};

export default SubMenu;
