"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import React, {  useState } from "react";
import Packages from "./Packages";
import Prices from "./Prices";
import { DownloadIcon } from "@chakra-ui/icons";
import Link from "next/link";

const PriceTabs = ({content}: {content: any}) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <Flex flexDir={"column"} mt={"40px"}>
      <Flex
        flexDir={"row"}
        bg={"rgba(240, 240, 240, 1)"}
        p={"6px"}
        gap={{ base: "0px", lg: "4px" }}
        borderRadius={"62px"}
        w={{ base: "100%", lg: "400px" }}
        mx={"auto"}
      >
        <Button
          position={"relative"}
          height={"40px"}
          borderRadius={"86px"}
          display={"flex"}
          flexDir={"row"}
          gap={"10px"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          bg={activeTab === 0 ? "#fff" : "transparent"}
          _hover={{
            bg: "#fff",
          }}
          _focus={{
            bg: "#fff",
          }}
          transition={"all .3s ease"}
          px={{ base: "4px", lg: "6px" }}
          onClick={() => setActiveTab(0)}
          boxShadow={
            activeTab === 0
              ? "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1);"
              : ""
          }
        >
          <Text
            display={"block"}
            fontWeight={"700"}
            fontSize={{ base: "14px", lg: "16px" }}
            textAlign={"start"}
            whiteSpace={"pre-line"}
          >
            Цены на услуги
          </Text>
        </Button>
        <Button
          position={"relative"}
          height={"40px"}
          borderRadius={"86px"}
          display={"flex"}
          flexDir={"row"}
          gap={"10px"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={activeTab === 1 ? "#fff" : "transparent"}
          width={"100%"}
          _hover={{
            bg: "#fff",
          }}
          _focus={{
            bg: "#fff",
          }}
          transition={"all .3s ease"}
          px={{ base: "4px", lg: "6px" }}
          onClick={() => setActiveTab(1)}
          boxShadow={
            activeTab === 1
              ? "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1);"
              : ""
          }
        >
          <Text
            display={"block"}
            fontWeight={"700"}
            fontSize={{ base: "14px", lg: "16px" }}
            textAlign={"start"}
            whiteSpace={"pre-line"}
          >
            Пакеты тарифов
          </Text>
        </Button>
      </Flex>

      <Flex flexDir={"column"} mt={"50px"}>
        {activeTab === 0 ? (
          <Prices prices={content[0].service_types} />
        ) : (
          <Packages content={{packages: content[0].packeges,services: content[0].types}} />
        )}

<Flex
        flexDir={{base:"column",lg:'row'}}
        gap={"10px"}
        mt={"40px"}
        mx={{ base: "unset", lg: "auto" }}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Button display={content[0].packeges[0].all_prices ? "flex" : "none"} maxW={'400px'} pos={'relative'} h={"70px"} variant={"brandPrimary"}>
          <Text>Скачать документ с пакетом цен</Text>{" "}
          <Link href={content[0].packeges[0].all_prices} target={"_blank"}  style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}/>
          <DownloadIcon ms={"10px"} />
        </Button>
        {/* <Button h={"70px"} variant={"brandSecondary"}>
          Открыть документ на сайте
        </Button> */}
      </Flex>
      </Flex>
    </Flex>
  );
};

export default PriceTabs;
