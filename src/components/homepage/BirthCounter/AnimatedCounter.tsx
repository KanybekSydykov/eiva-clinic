"use client";
import { AspectRatio, Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./AnimatedCounter.module.css";
import { BirthCounterProps } from "@/types/BirthCounterTypes";
import CounterAnimation from "@/components/ui/CounterAnimation";

const AnimatedCounter = ({
  counter_title,
  counter_sub_title,
  birth_counter,
  birth_counter_text,
  boys_counter,
  girls_counter,
}: BirthCounterProps) => {
  return (
    <Flex
      flexDir={"row"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      rowGap={"40px"}
      columnGap={{ base: "10px", lg: "94px" }}
      alignItems={"center"}
      mt={"50px"}
    >
      <Center
        w={{ base: "100%", lg: "fit-content" }}
        order={{ base: 1, lg: 2 }}
      >
        <Flex
          pos={"relative"}
          width={{ base: "300px", lg: "500px" }}
          h={{ base: "300px", lg: "500px" }}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Box
            className={styles.circle}
            position={"absolute"}
            border={"25px solid transparent"}
            top={0}
            left={0}
            w={"100%"}
            h={"100%"}
            borderRadius={"100%"}
            zIndex={2}
            _after={{
              content: "''",
              position: "absolute",
              top: "15px",
              left: "15px",
              zIndex: 2,
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "rgba(101, 182, 254, 1)",
              "@media (min-width: 992px)": {
                top: "44px",
                left: "40px",
                width: "40px",
                height: "40px",
              },
            }}
            _before={{
              content: "''",
              position: "absolute",
              bottom: "15px",
              right: "15px",
              zIndex: 2,
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "rgba(255, 166, 220, 1)",
              "@media (min-width: 992px)": {
                bottom: "44px",
                right: "40px",
                width: "40px",
                height: "40px",
              },
            }}
          />
          <Box
            className={styles.circle}
            borderRadius={"50%"}
            borderLeft={"25px solid rgba(101, 182, 254, 1)"}
            borderBottom={"25px solid rgba(101, 182, 254, 1)"}
            borderRight={"25px solid transparent"}
            borderTop={"25px solid transparent"}
            borderWidth={{ base: "25px", lg: "40px" }}
            position={"absolute"}
            left={0}
            top={0}
            right={0}
            bottom={0}
            zIndex={1}
            w={"100%"}
            h={"100%"}
          />
          <Box
            className={styles.circle}
            borderRadius={"100%"}
            borderRight={"25px solid rgba(255, 166, 220, 1)"}
            borderTop={"25px solid rgba(255, 166, 220, 1)"}
            borderBottom={"25px solid transparent"}
            borderLeft={"25px solid transparent"}
            borderWidth={{ base: "25px", lg: "40px" }}
            position={"absolute"}
            left={0}
            top={0}
            right={0}
            bottom={0}
            w={"auto"}
            h={"100%"}
            zIndex={1}
          />

          <Box
            fontFamily={"mulish"}
            fontWeight={"800"}
            fontSize={{ base: "40px", lg: "100px" }}
            textAlign={"center"}
            color={"rgba(78, 78, 78, 1)"}
            lineHeight={{ base: "48px", lg: "120px" }}
            w={"100%"}
            h={{base:'50px',lg:'100px'}}
          >
            <CounterAnimation number={birth_counter} />
          </Box>

          <Text
            fontFamily={"mulish"}
            fontWeight={"600"}
            fontSize={{ base: "14px", lg: "19px" }}
            textAlign={"center"}
            color={"rgba(78, 78, 78, 1)"}
          >
            {birth_counter_text}
          </Text>
        </Flex>
      </Center>

      <Flex
        order={{ base: 2, lg: 1 }}
        width={"139px"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AspectRatio width={"88px"} h={"145px"}>
          <Image src={"/boy.svg"} fill sizes="100%" alt={"boy"} />
        </AspectRatio>
        <Box
          fontFamily={"mulish"}
          fontWeight={"800"}
          fontSize={"30px"}
          textAlign={"center"}
          color={"rgba(74, 144, 206, 1)"}
          mt={"15px"}
          w={"100%"}
          h={'50px'}
        >
          <CounterAnimation number={boys_counter} />
        </Box>
        <Text
          fontFamily={"mulish"}
          fontWeight={"800"}
          fontSize={"18px"}
          textAlign={"center"}
          color={"rgba(74, 144, 206, 1)"}
        >
          мальчиков
        </Text>
      </Flex>
      <Flex
        order={{ base: 3, lg: 3 }}
        width={"139px"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AspectRatio width={"81px"} h={"145px"}>
          <Image src={"/girl.svg"} fill sizes="100%" alt={"boy"} />
        </AspectRatio>
        <Box
          fontFamily={"mulish"}
          fontWeight={"800"}
          fontSize={"30px"}
          textAlign={"center"}
          color={"rgba(171, 95, 141, 1)"}
          mt={"15px"}
          w={"100%"}
          h={'50px'}
        >
          <CounterAnimation number={girls_counter} />
        </Box>
        <Text
          fontFamily={"mulish"}
          fontWeight={"800"}
          fontSize={"18px"}
          textAlign={"center"}
          color={"rgba(171, 95, 141, 1)"}
        >
          девочек
        </Text>
      </Flex>
    </Flex>
  );
};

export default AnimatedCounter;
