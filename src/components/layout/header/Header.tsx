import { AspectRatio, Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import DrawerMenu from "./DrawerMenu";
import NavbarDesktop from "./NavbarDesktop";
import Link from "next/link";
import { ENDPOINTS } from "@/lib/api";
import GetSomeData from "@/components/common/GetSomeData";

const Header = () => {
  return (
    <Container
      maxW={{ base: "container.xl",lg:'1024px', xl: "1280px", "2xl": "1440px" }}
      bg={{ base: "#fff", lg: "layoutGradient" }}
      py={{ base: "25px", lg: "30px" }}
      mt={{ base: "0px", lg: "40px" }}
      display={"flex"}
      justifyContent={{ base: "space-between", lg: "space-evenly" }}
      gap={{ base: "0px", lg: "90px" }}
      flexShrink={0}
      borderRadius={{ base: "0px", lg: "30px" }}
      flexDir={"row"}
      alignItems={"center"}
      // maxH={{ base: "unset", lg: "90px" }}
      px={{ base: "16px", lg: "16px", xl: "93px" }}
      pos={"relative"}
      zIndex={1999}
      overflowY={"visible"}
    >
      <Box pos={"relative"}>
        <AspectRatio
          flexShrink={0}
          position={"relative"}
          w={{ base: "101px", lg: "120px" }}
          h={{ base: "45px", lg: "53px" }}
        >
          <Image src={"/logo.png"} alt="logo" fill sizes="100%" />
        </AspectRatio>
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

      <GetSomeData
        Component={DrawerMenu}
        url={ENDPOINTS.getServiceCategories}
      />
      <GetSomeData
        Component={NavbarDesktop}
        url={ENDPOINTS.getServiceCategories}
      />
    </Container>
  );
};

export default Header;
