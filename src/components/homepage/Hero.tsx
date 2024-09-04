import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Advantage from "./Advantages/Advantage";
import LactationAnimation from "./Advantages/LactationAnimation";
import HeartAnimation from "./Advantages/HeartAnimation";
import USIAnimation from "./Advantages/USIAnimation";
import StethoscopeAnimation from "./Advantages/StethoscopeAnimation";
import Ornament from "../ui/Ornament";
import { getData } from "@/lib/getData";
import { ENDPOINTS } from "@/lib/api";
import { getMediaType } from "@/lib/defineFileType";

const Hero = async () => {
  const data = await getData(ENDPOINTS.getWelcome());
  const icons = [
    <LactationAnimation />,
    <HeartAnimation />,
    <USIAnimation />,
    <StethoscopeAnimation />,
  ];
  return (
    <Container
      maxW={{
        base: "container.xl",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      }}
      position={"relative"}
      pt={{ base: "35px", lg: "55px" }}
      pb={"100px"}
      // overflowX={"hidden"}
      display={"flex"}
      flexDir={"row"}
      flexWrap={"nowrap"}
      h={"auto"}
      px={{ base: "16px", xl: "0px" }}
    >
      <Ornament />
      <Grid
        w={"100%"}
        gridTemplateColumns={{
          base: "100%",
          lg: "calc(45% - 20px) calc(55% - 20px)",
          xl: "calc(35% - 20px) calc(65% - 20px)",
        }} // Define two columns for desktop
        gridTemplateAreas={{
          base: `
      "image"
      "text"
      "advantages"
      "button"
    `,
          lg: `
      "text image"
      "button image"
      "advantages advantages"
    `
        }} // Define areas for desktop
        gap={{ base: "20px", lg: "40px" }} // Adjust gap as needed
        maxH={{ base: "100%", lg: "calc(100vh - 115px)" }}
        alignItems={{ base: "flex-start", lg: "flex-end" }}
      >
        {/* Text Section */}
        <Flex
          flexDir={"column"}
          gap={"26px"}
          w={"100%"}
          order={{ base: 2, lg: 1 }}
          mt={{ base: "60px", lg: "0px" }}
          h={"fit-content"}
          gridArea={"text"} // Assign to grid area 'text'
          alignItems={"flex-start"} // Align items to the start of the grid area
        >
          <Heading
            fontFamily={"mulish"}
            color={"heading"}
            fontWeight={"900"}
            fontSize={{ base: "26px", lg: "50px" }}
          >
            {data.title}
          </Heading>
          <Text
            fontFamily={"mulish"}
            color={"subheading"}
            fontWeight={"500"}
            fontSize={{ base: "16px", lg: "20px" }}
          >
            {data.description}
          </Text>
        </Flex>

        {/* Image Section */}
        <Box
          display={{ base: "block", lg: "block" }}
          position={"relative"}
          w={"100%"}
          h={{base:'100%',lg:'375px',xl:'520px'}}
          bg={"layoutGradient"}
          mt={{ base: "0px", lg: "0px" }}
          borderRadius={"30px"}
          // className="hero image"
          order={{ base: 1, lg: 2 }}
          gridArea={"image"}
          alignSelf={"flex-start"}
          _after={{
            content: '""',
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            bg: "rgba(0, 0, 0, 0.4)",
          }}
        >
          {getMediaType(data.image) === "image" ? (
            <Image
              src={data.image}
              alt="hero-img"
              fill
              sizes="358px 406px"
              style={{
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          ) : (
            <video
              src={data.image}
              autoPlay
              muted
              loop
              playsInline
              style={{
                borderRadius: "30px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <Text color={"white"} fontWeight={"500"} fontSize={"20px"} position={'absolute'} left={'20px'} bottom={'20px'} zIndex={1}>
            Ваше здоровье - Наша главная забота ♥
          </Text>
        </Box>

        {/* Advantages Section */}
        <Flex
          mt={"29px"}
          flexDir={{ base: "column", lg: "row" }}
          flexWrap={{ base: "nowrap", lg: "wrap" }}
          gap={"10px"}
          order={{ base: 3, lg: 4 }}
          alignItems={{ base: "center", lg: "flex-start" }}
          alignSelf={{ base: "center", lg: "flex-start" }}
          gridArea={"advantages"} // Assign to grid area 'advantages'
        >
          {data?.advantages?.map(
            (advantage: { text: string }, index: number) => (
              <Advantage key={advantage.text} text={advantage.text}>
                {icons[index]}
              </Advantage>
            )
          )}
        </Flex>

        {/* Button Section */}
        <Button
          variant={"brandPrimary"}
          position={"relative"}
          py={"24px"}
          mx={{ base: "auto", lg: "unset" }}
          mt={{ base: "26px", lg: "0px" }}
          w={"100%"}
          maxW={"430px"}
          alignSelf={'flex-end'}
          maxH={"70px"}
          order={{ base: 4, lg: 3 }}
          gridArea={"button"} // Assign to grid area 'button'
        >
          <Text
            color={"white"}
            fontFamily={"mulish"}
            fontSize={"18px"}
            fontWeight={"700"}
          >
            Записаться на прием
          </Text>
          <a
            href={"#form"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Button>
      </Grid>

      {/* </Flex> */}
    </Container>
  );
};

export default Hero;
