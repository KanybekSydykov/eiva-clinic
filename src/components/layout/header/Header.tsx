import { AspectRatio, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  return (
    <Container
      maxW={{ base: "container.xl", xl: "1296px" }}
      bg={{ base: "#fff", lg: "layoutGradient" }}
      py={{base:'25px',lg:'30px'}}
      display={"flex"}
      justifyContent={{ base: "space-between", lg: "space-evenly" }}
      gap={{base:'0px',lg:'90px'}}
    >
      <AspectRatio position={'relative'} w={{base:'101px',lg:'120px'}} h={{base:'45px',lg:'53px'}}>
      <Image src={'/logo.png'} alt="logo" fill sizes="100%"  />
      </AspectRatio>

      <DrawerMenu />

    </Container>
  );
};

export default Header;
