"use client";
import { ServiceCategoryProps } from "@/types/ServiceCategoryType";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const LayoutTabs = ({ content }: { content: ServiceCategoryProps[] }) => {
  const params = useParams();
  const title = content.find((item) => item.slug === params.slug);

  useEffect(() => {
    if (params.slug) {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [params.slug]);
  

  return (
    <Container
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
      mt={"34px"}
    >
      <Flex
        flexDir={"row"}
        bg={"rgba(240, 240, 240, 1)"}
        p={"6px"}
        gap={{ base: "0px", lg: "4px" }}
        borderRadius={"62px"}
      >
        {content?.map((item) => (
          <Button
            key={item.name}
            position={"relative"}
            height={"70px"}
            borderRadius={"86px"}
            w={{
              base: params.slug === item.slug ? "100%" : "64px",
              lg: "100%",
            }}
            bg={params.slug === item.slug ? "#fff" : "transparent"}
            color={
              params.slug === item.slug ? "paragraph" : "rgba(88, 88, 88, 1)"
            }
            display={"flex"}
            flexDir={"row"}
            gap={"10px"}
            alignItems={"center"}
            justifyContent={"center"}
            _hover={{
              bg: "#fff",
            }}
            _focus={{
              bg: "#fff",
            }}
            transition={"all .3s ease"}
            px={{ base: "4px", lg: "6px" }}
          >
            <Image src={item.icon} alt={item.name} width={24} height={24} style={{
              transition: "all .3s ease",
              filter: params.slug === item.slug ? "grayscale(0%)" : "grayscale(100%)",
            }} />

            <Text
              display={{
                base: params.slug === item.slug ? "block" : "none",
                lg: "block",
              }}
              fontWeight={"700"}
              fontSize={{ base: "14px", lg: "16px" }}
              textAlign={"start"}
              whiteSpace={"pre-line"}
            >
              {item.name}
            </Text>
            <Link
              href={`/services/${item.slug}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Button>
        ))}
      </Flex>

  

      <Flex
        flexDir={"column"}
        gap={"30px"}
        p={{ base: "20px 10px", lg: "60px 30px" }}
        borderRadius={"20px"}
        bg={"lightGreen"}
        mt={"96px"}
      >
        <Text
          textAlign={"center"}
          color={"darkGreen"}
          fontWeight={"800"}
          fontSize={{ base: "18px", lg: "20px" }}
        >
          {title?.title}
        </Text>
        <Text
          textAlign={"center"}
          color={"darkGreen"}
          fontWeight={"500"}
          fontSize={"16px"}
        >
          {title?.description}
        </Text>
      </Flex>
    </Container>
  );
};

export default LayoutTabs;
