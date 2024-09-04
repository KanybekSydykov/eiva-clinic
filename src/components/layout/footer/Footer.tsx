import Ornament from "@/components/ui/Ornament";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const linkHover = {
  color: "subHeading",
  transition: "all 0.3s ease-in-out",
  _hover: {
    transformStyle: "preserve-3d",
    transform: "translate3d(0, -3px, 0)",
    textDecor: "underline",
  },
};

const Footer = async () => {
  const data = await getData(ENDPOINTS.getContacts());
  return (
    <Container
      maxW={"unset"}
      mt={"62px"}
      pt={"60px"}
      pb={"84px"}
      px={{ base: "20px", lg: "72px" }}
      bg={"layoutGradient"}
      borderTopRadius={"30px"}
      display={"flex"}
      flexDir={{ base: "column", lg: "row" }}
      flexWrap={"wrap"}
      gap={{ base: "70px", lg: "20px" }}
      justifyContent={{ lg: "space-between" }}
      position={"relative"}
      minH={{ base: "unset", lg: "366px" }}
    >
      <Box
        position={"absolute"}
        right={{ base: "unset", lg: "0" }}
        top={{ base: "unset", lg: "32px" }}
        transform={"rotate(-180deg)"}
        w={{ base: "unset", lg: "578px" }}
        h={{ base: "unset", lg: "320px" }}
        zIndex={-1}
      >
        <Ornament width="578px" height="320px" />
      </Box>
      <Flex flexDir={"column"} gap={"20px"}>
        <Text
          fontWeight={"800"}
          fontSize={"18px"}
          color={"navbarColor"}
          textAlign={"start"}
        >
          Контакты
        </Text>
        {data.phone_numbers.map((phone: { number: string }, index: number) => (
          <Box key={index} fontWeight="600" fontSize="18px" {...linkHover}>
            <Link href={`tel:${phone.number.trim()}`}>{phone.number}</Link>
          </Box>
        ))}
      </Flex>
      <Flex flexDir={"column"} gap={"20px"}>
        <Text
          fontWeight={"800"}
          fontSize={"18px"}
          color={"navbarColor"}
          textAlign={"start"}
        >
          Адрес
        </Text>
        <Box {...linkHover} fontWeight={"400"} fontSize={"18px"} maxW={'250px'}>
          <Link
            href="https://maps.app.goo.gl/bdaMpJBUjZhKBnK49"
            target="_blank"
            style={{ display: "block" }}
          >
           {data.address ? data.address : "Нет данных"}
          </Link>
        </Box>
      </Flex>
      <Flex
        flexDir={"column"}
        gap={"6px"}
        fontWeight={"400"}
        fontSize={"18px"}
        color={"subHeading"}
      >
        <Text
          fontWeight={"800"}
          fontSize={"18px"}
          color={"navbarColor"}
          textAlign={"start"}
        >
          График работы
        </Text>
        <Box mt={"14px"}>Пн-пт {data.working_hours_weekdays ? data.working_hours_weekdays : "Нет данных"}</Box>
        <Box>Поликлиника {data.working_hours_weekend ? data.working_hours_weekend : "Нет данных"}</Box>
        <Box>Стационар 24/7</Box>
      </Flex>

      <Flex flexDir={"column"} gap={"20px"}>
        <Text
          fontWeight={"800"}
          fontSize={"18px"}
          color={"navbarColor"}
          textAlign={"start"}
        >
          E-mail
        </Text>

        <Box {...linkHover} fontWeight={"400"} fontSize={"18px"}>
          <Link href={`mailto:${data.email}`}>
           {data.email ? data.email : "Нет данных"}
          </Link>
        </Box>
      </Flex>
      <Flex flexDir={"column"} gap={"20px"}>
        <Text
          fontWeight={"800"}
          fontSize={"18px"}
          color={"navbarColor"}
          textAlign={"start"}
        >
          Соцсети
        </Text>

        <Flex flexDir={"row"} gap={"20px"}>
          {data.social_networks.map((social: { url: string,icon: string,name:string }, index: number) => (
                  <Center
                  key={index}
                  w={"48px"}
                  h={"48px"}
                  bg={"rgba(255, 255, 255, 0.8)"}
                  borderRadius={"10px"}
                  pos={"relative"}
                  {...linkHover}
                >
                  <Image src={social.icon} alt={social.name} width={26} height={26} />
                  <Link
                    href={social.url}
                    target="_blank"
                    style={{
                      display: "block",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Center>
          ))}
    
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
