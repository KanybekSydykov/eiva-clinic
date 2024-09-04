import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SubMenu from "./SubMenu";

interface Props {
  closeMenu: () => void;
  categories: any;
}

const Navbar = ({ closeMenu,categories }: Props) => {
  return (
    <Flex mt={"122px"} flexDir={{ base: "column", lg: "row" }}>
      <Box
        width={"100%"}
        p={"15px 50px"}
        pos={"relative"}
        borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          bg: "lightThinGreen",
        }}
        onClick={() => closeMenu()}
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
        width={"100%"}
        p={"15px 50px"}
        pos={"relative"}
        borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          bg: "lightThinGreen",
        }}
        onClick={closeMenu}

      >
        <Text
          color={"navbarColor"}
          fontFamily={"mulish"}
          fontWeight={"600"}
          fontSize={"18px"}
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
      {/* menu  */}
      <SubMenu closeMenu={closeMenu} categories={categories} />
      {/* menu  */}

      <Box
        width={"100%"}
        p={"15px 50px"}
        pos={"relative"}
        borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          bg: "lightThinGreen",
        }}
        onClick={closeMenu}
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
        width={"100%"}
        p={"15px 50px"}
        pos={"relative"}
        borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          bg: "lightThinGreen",
        }}
        onClick={closeMenu}
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
        width={"100%"}
        p={"15px 50px"}
        pos={"relative"}
        borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          bg: "lightThinGreen",
        }}
        onClick={closeMenu}
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
        width={"100%"}
        p={"15px 50px"}
        pos={"relative"}
        borderBottom={"1px solid rgba(19, 114, 118, 0.1)"}
        bg={"transparent"}
        transition={"all .3s ease"}
        _hover={{
          bg: "lightThinGreen",
        }}
        onClick={closeMenu}

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

export default Navbar;
