"use client";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Flex,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { DocsTypes } from "@/types/DocsTypes";

const DocsTabs = ({ content }: { content: DocsTypes[] }) => {

  return (
    <Container
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
      pt={{ base: "60px" }}
    >
      <Tabs defaultIndex={0}>
        <TabList
          overflowX={"auto"}
          border={"none"}
          pb={"2px"}
          justifyContent={{ base: "flex-start", lg: "center" }}
        >
          {content?.map((item, index) => (
            <Tab
              key={index}
              _selected={{
                color: "rgba(27, 95, 95, 1)",
                fontWeight: "700",
                borderColor: "rgba(27, 95, 95, 1)",
              }}
              color={"rgba(103, 103, 103, 1)"}
              fontSize={{ base: "14px", lg: "18px" }}
              fontWeight={"600"}
              borderBottomWidth={"2px"}
              borderStyle={"solid"}
              transition={"border .3s ease"}
            >
              {item.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels mt={"40px"}>
          {content?.map((item, index) => (
            <TabPanel key={index}>
              <Flex flexDir={"column"}>
                <Heading
                  variant={"title"}
                  fontSize={{ base: "20px", lg: "32px" }}
                >
                  {item.name}
                </Heading>

                <Box mt={"30px"} whiteSpace={"pre-wrap"} color={"rgba(27, 95, 95, 1)"} dangerouslySetInnerHTML={{__html: item.text}}>
                  
                </Box>

                <Flex
                  mt={"60px"}
                  gap={"10px"}
                  flexDir={{ base: "column", lg: "row" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"100%"}
                >
                  <Button
                    variant={"brandPrimary"}
                    as={"a"}
                    href={item.file}
                    download={item.file}
                  >
                    Скачать документ
                    <DownloadIcon ms={"10px"} />
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default DocsTabs;
