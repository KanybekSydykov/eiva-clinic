"use client";
import Ornament from "@/components/ui/Ornament";
import { AspectRatio, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ButtonWithArrow from "@/components/ui/ButtonWithArrow";

const AboutUs = ({
  hasLink = true,
  title,
  description,
  photo = "/about-img.png",
}: {
  hasLink?: boolean;
  title: string;
  description: string;
  photo?: string;
}) => {
  return (
    <Container
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
      mt={"60px"}
      pb={"60px"}
    >
      <Heading variant={"title"} fontSize={{ base: "20px", lg: "32px" }}>
        {title}
      </Heading>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"10px"}
        mt={{ base: "20px", lg: "60px" }}
        pos={"relative"}
      >
        <Ornament />

        <Flex
          p={"40px 20px"}
          w={"100%"}
          borderRadius={{ base: "30px", lg: "50px" }}
          bg={"lightGreen"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          <Text
            fontFamily={"mulish"}
            fontWeight={"600"}
            fontSize={"16px"}
            textAlign={"center"}
            h={"fit-content"}
            color={"subHeading"}
          >
            {description}
          </Text>
        </Flex>

        <AspectRatio
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ amount: 0.9, once: true }}
          w={{ base: "100%", lg: "60%" }}
          ratio={1}
          borderRadius={{ base: "30px", lg: "50px" }}
          overflow={"hidden"}
          mt={"10px"}
        >
          <Image
            src={photo}
            fill
            sizes="@(max-width: 768px) 100%,60%"
            alt="Фото нашей клиники"
          />
        </AspectRatio>
      </Flex>

      <Flex
        display={hasLink ? "flex" : "none"}
        justifyContent={{ base: "center", lg: "flex-end" }}
        pos={"relative"}
      >
        <ButtonWithArrow link="/o-nas" text="Подробнее о компании" />
      </Flex>
    </Container>
  );
};

export default AboutUs;
