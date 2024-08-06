import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuContacts = () => {
  return (
    <Flex flexDir={"column"} gap={"30px"} w={"100%"} mt={"50px"} px={'50px'}>
      <Link
        href={"tel:+996559601060"}
        style={{
          textDecoration: "none",
          fontFamily: "var(--chakra-fonts-mulish)",
          color: "rgba(15, 95, 98, 1)",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        + 996 559 601 060
      </Link>
      <Link
        href={"tel:+996559601060"}
        style={{
          textDecoration: "none",
          fontFamily: "var(--chakra-fonts-mulish)",
          color: "rgba(15, 95, 98, 1)",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        + 996 559 601 060
      </Link>

      <Flex flexDir={"row"} gap={"20px"}>
        <Box
          w={"48px"}
          h={"48px"}
          borderRadius={"10px"}
          bg={"rgba(237, 244, 255, 1)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={"/fb.svg"} alt="telegram" width={13} height={24} />
        </Box>
        <Box
          w={"48px"}
          h={"48px"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={"/ig.svg"} alt="telegram" width={26} height={26} />
        </Box>
        <Box
          w={"48px"}
          h={"48px"}
          borderRadius={"10px"}
          bg={"rgba(229, 247, 255, 1)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={"/tg.svg"} alt="telegram" width={26} height={26} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default MenuContacts;
