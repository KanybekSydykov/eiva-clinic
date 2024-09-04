import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const linkHover = {
  transition: "all 0.3s ease-in-out",
  _hover: {
    transformStyle: "preserve-3d",
    transform: "translate3d(0, -3px, 0)",
    textDecor: "underline",
  },
};

const Contacts = async () => {
  const data = await getData(ENDPOINTS.getContacts());

  return (
    <Container
      maxW={{
        base: "container.xl",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      }}
      mt={"50px"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      marginTop={"60px"}
      pb={"60px"}
    >
      <Flex flexDir={"column"} w={{ base: "100%", lg: "350px" }} flexShrink={0}>
        <Flex flexDir={"column"} color={"subHeading"}>
          <Heading
            variant={"title"}
            fontSize={{ base: "20px", lg: "32px" }}
            textAlign={"start"}
          >
            Контакты
          </Heading>
          <Flex
            mt={"20px"}
            fontWeight={{ base: "700", lg: "500" }}
            fontSize={{ base: "16px", lg: "20px" }}
            flexDir={"column"}
            gap={"20px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z"
                fill="#488A8B"
              />
            </svg>
            {data.phone_numbers.map(
              (phone: { number: string }, index: number) => (
                <Box key={index} {...linkHover}>
                  <Link href={`tel:${phone.number.trim()}`}>
                    {phone.number}
                  </Link>
                </Box>
              )
            )}
          </Flex>

          <Flex flexDir={"column"} gap={"20px"} mt={"26px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z"
                fill="#488A8B"
              />
              <path
                d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
                fill="#488A8B"
              />
            </svg>
            <Box
              maxW={"180px"}
              fontWeight={"500"}
              fontSize={{ base: "16px", lg: "20px" }}
              {...linkHover}
            >
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
            mt={"26px"}
            gap={"6px"}
            fontWeight={"500"}
            fontSize={{ base: "16px", lg: "20px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                fill="#488A8B"
              />
            </svg>
            <Box mt={"14px"}>
              Пн-пт{" "}
              {data.working_hours_weekdays
                ? data.working_hours_weekdays
                : "с 9:00 до 18:00"}
            </Box>
            <Box>
              Поликлиника{" "}
              {data.working_hours_weekend
                ? data.working_hours_weekend
                : "с 9:00 до 17:00"}
            </Box>
            <Box>Стационар 24/7</Box>
          </Flex>

          <Flex mt={"26px"} flexDir={"column"} gap={"20px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#488A8B"
              />
            </svg>

            <Box
              fontWeight={"500"}
              fontSize={{ base: "16px", lg: "20px" }}
              {...linkHover}
            >
              <Link href={`mailto:${data.email ? data.email : ""}`}>
                {data.email ? data.email : "Забыли указать"}
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} gap={"20px"} mt={"40px"}>
          <Heading
            variant={"title"}
            fontSize={{ base: "20px", lg: "32px" }}
            textAlign={"start"}
          >
            Соцсети
          </Heading>

          <Flex flexDir={"row"} gap={"20px"}>
            {data?.social_networks?.map(
              (item: { name: string; url: string; icon: string }) => (
                <Center
                  key={item.url}
                  w={"48px"}
                  h={"48px"}
                  bg={"rgba(237, 244, 255, 1)"}
                  borderRadius={"10px"}
                  pos={"relative"}
                  {...linkHover}
                >
                  <Image
                    src={item.icon ? item.icon : "/icons/fb.png"}
                    alt={item.name}
                    width={26}
                    height={26}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <Link
                    href={item.url}
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
              )
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} mt={{ base: "60px", lg: "0px" }} w={'100%'}>
        <Heading
          variant={"title"}
          fontSize={{ base: "20px", lg: "32px" }}
          textAlign={{ base: "start", lg: "center" }}
        >
          Как нас найти?
        </Heading>

        <Box
          w={"100%"}
          h={{ base: "300px", lg: "471px" }}
          overflow={"hidden"}
          mt={"20px"}
          borderRadius={"20px"}
          dangerouslySetInnerHTML={{
            __html: data?.iframe_map ? data?.iframe_map : "",
          }}
        />
      </Flex>
    </Container>
  );
};

export default Contacts;
