"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Button,
  Text,
  Box
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

const Prices = ({ prices }: { prices: any }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Flex flexDir={"column"} gap={"20px"}>
      {/* <Flex
        display={{ base: "none", lg: "flex" }}
        flexDir={"row"}
        h={"51px"}
        border={"1px solid rgba(15, 95, 98, 0.1)"}
        borderRadius={"10px"}
        overflow={"hidden"}
        maxW={{ base: "100%", lg: "395px" }}
      >
        <Input
          type="search"
          border={"none"}
          borderRadius={"0px"}
          h={"100%"}
          placeholder="Поиск услуг"
          _focus={{
            outline: "none",
            boxShadow: "none",
            bg: "rgba(19, 114, 118, 1)",
            color: "white",
            _placeholder: {
              color: "white",
            },
          }}
          transition={"all .3s ease"}
        />
        <Center w={"50px"} h={"50px"} bg={"rgba(237, 242, 247, 1)"}>
          <SearchIcon boxSize={"24px"} />
        </Center>
      </Flex> */}
      <Tabs
        width={"100%"}
        display={"flex"}
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "20px", lg: "40px" }}
      >
        <TabList
          flexDir={"column"}
          overflow={"hidden"}
          borderWidth={{ base: "1px", lg: "1px" }}
          borderRadius={"10px"}
          borderStyle={"solid"}
          borderColor={{
            base: "rgba(19, 114, 118, 0.4)",
            lg: "rgba(15, 95, 98, 0.1)",
          }}
          height={{ base: "auto", lg: "fit-content" }}
          maxH={isVisible ? "1000px" : "64px"}
          transition={"all .3s ease"}
          maxW={{ base: "100%", lg: "400px" }}
        >
          <Button
            height={"64px"}
            py={0}
            flexShrink={0}
            onClick={() => setIsVisible(!isVisible)}
            bg={"transparent"}
            _hover={{ bg: "lightGreen" }}
            _focus={{ bg: "lightGreen" }}
            display={{ base: "flex", lg: "none" }}
          >
            <Text
              flexGrow={1}
              textAlign={"center"}
              fontWeight={"800"}
              fontSize={"16px"}
              color={"rgba(88, 88, 88, 1)"}
            >
              Навигация по разделам
            </Text>
            <ChevronDownIcon
              boxSize={"20px"}
              color={"rgba(15, 95, 98, 1)"}
              transition={"all .3s ease"}
              transform={isVisible ? "rotate(-180deg)" : "rotate(0deg)"}
            />
          </Button>
{/* 
          <Flex
            display={{ base: "flex", lg: "none" }}
            flexDir={"row"}
            h={"51px"}
            borderTop={{
              base: "1px solid rgba(19, 114, 118, 0.4)",
              lg: "1px solid rgba(15, 95, 98, 0.1)",
            }}
          >
            <Input
              type="search"
              border={"none"}
              borderRadius={"0px"}
              h={"100%"}
              placeholder="Поиск услуг"
              _focus={{
                outline: "none",
                boxShadow: "none",
                bg: "rgba(19, 114, 118, 1)",
                color: "white",
                _placeholder: {
                  color: "white",
                },
              }}
              transition={"all .3s ease"}
            />
            <Center w={"50px"} h={"50px"} bg={"rgba(237, 242, 247, 1)"}>
              <SearchIcon boxSize={"24px"} />
            </Center>
          </Flex> */}

          {prices?.map((tab: { name: string }) => (
            <Tab
              key={tab.name}
              _selected={{ bg: "rgba(19, 114, 118, 1)", color: "white" }}
              textAlign={"left"}
              borderTop={{
                base: "1px solid rgba(19, 114, 118, 0.4)",
                lg: "1px solid rgba(15, 95, 98, 0.1)",
              }}
              borderBottom={{
                base: "1px solid rgba(19, 114, 118, 0.4)",
                lg: "1px solid rgba(15, 95, 98, 0.1)",
              }}
              _hover={{ bg: "rgba(19, 114, 118, 1)", color: "white" }}
              _focus={{
                bg: "rgba(19, 114, 118, 1)",
                color: "white",
              }}
              justifyContent={"flex-start"}
              minH={"51px"}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {prices?.map((panel: any) => (
            <TabPanel key={panel.name} pt={{ base: "16px", lg: "0px" }}>
              <Flex flexDir={"column"}>
                <Box
                  py={"16px"}
                  borderTop={"1px solid rgba(15, 95, 98, 0.1)"}
                  borderBottom={"1px solid rgba(15, 95, 98, 0.1)"}
                >
                  <Text
                    fontWeight={"800"}
                    fontSize={"16px"}
                    color={"darkGreen"}
                  >
                    {panel.name}
                  </Text>
                </Box>

                {panel.services.map((service: any) => (
                  <Flex
                    key={service.id}
                    py={"16px"}
                    borderBottom={"1px solid rgba(15, 95, 98, 0.1)"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={{ base: "flex-start", lg: "space-between" }}
                    gap={"20px"}
                  >
                    <Text
                      fontWeight={"600"}
                      fontSize={"16px"}
                      color={"rgba(88, 88, 88, 1)"}
                    >
                      {service.name}
                    </Text>
                    <Text
                      fontWeight={"800"}
                      fontSize={"18px"}
                      color={"rgba(88, 88, 88, 1)"}
                    >
                      {service.price}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Prices;
