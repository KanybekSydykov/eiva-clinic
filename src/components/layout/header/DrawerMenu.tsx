"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./Navbar";
import MenuContacts from "./MenuContacts";

export default function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={isOpen ? onClose : onOpen}
        p={0}
        minW={"unset"}
        minH={"unset"}
        w={"36px"}
        h={"36px"}
        bg={"layoutGradient"}
        position={isOpen ? "absolute" : "relative"}
        borderRadius={"50%"}
        _hover={{ bg: "layoutGradient" }}
        _focus={{ bg: "layoutGradient" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        top={isOpen ? "25px" : "unset"}
        right={isOpen ? "16px" : "unset"}
        zIndex={isOpen ? 1990 : 1}
        transition={"all .01s ease"}
      >
        <Box
          as="span"
          width={isOpen ? "18px" : "20px"}
          borderRadius={"2px"}
          h={isOpen ? "18px" : "2px"}
          bg={isOpen ? "transparent" : "rgba(11, 72, 73, 1)"}
          pos={"relative"}
          transition={"all .3s ease"}
          _before={{
            content: '""',
            width: isOpen ? "100%" : "12px",
            borderRadius: "2px",
            h: "2px",
            bg: "rgba(11, 72, 73, 1)",
            pos: "absolute",
            top: isOpen ? "50%" : "-5px",
            left: "0px",
            transform: isOpen ? "translateY(-50%) rotate(45deg)" : "unset",
            transition: "all .3s ease",
          }}
          _after={{
            content: '""',
            width: isOpen ? "100%" : "12px",
            borderRadius: "2px",
            h: "2px",
            bg: "rgba(11, 72, 73, 1)",
            pos: "absolute",
            top: isOpen ? "50%" : "5px",
            right: "0px",
            transform: isOpen ? "translateY(-50%) rotate(-45deg)" : "unset",
            transition: "all .3s ease",
          }}
        />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
        <DrawerContent bg={"transparent"}>
          <DrawerBody bg={"rgba(255, 255, 255, 0.8)"} px={"0px"}>
            <Navbar />
            <MenuContacts />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
