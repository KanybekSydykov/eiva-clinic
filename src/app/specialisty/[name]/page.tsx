import EivaForm from "@/components/common/Form/EivaForm";
import DoctorCertificates from "@/components/doctorInfo/DoctorCertificates";
import DoctorReviews from "@/components/doctorInfo/DoctorReviews";
import DoctorsAtWork from "@/components/doctorInfo/DoctorsAtWork";
import Slider from "@/components/ui/Slider";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import {
  AspectRatio,
  Button,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const page = ({ params }: { params: { name: number } }) => {
  return (
    <>
      <Suspense
        fallback={
          <Container
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW={{ base: "100%", lg: "1280px" }}
          >
            <Spinner size="xl" color="heading" />
          </Container>
        }
      >
        <GetDoctorData name={params.name} />
      </Suspense>
      <Suspense
        fallback={
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW={{ base: "100%", lg: "1280px" }}
          >
            <Spinner size="xl" color="heading" />
          </Container>
        }
      >
        <GetFormImages />
      </Suspense>
    </>
  );
};

export default page;

async function GetDoctorData({ name }: { name: number }) {
  "use server";
  const data = await getData(ENDPOINTS.getDoctorInfo(name));


  

  return (
    <Container
      mt={"100px"}
      maxW={{
        base: "container.xl",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      }}
      pb={"60px"}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={"30px"}
        justifyContent={{ base: "center", lg: "flex-start" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        w={"100%"}
        cursor={"pointer"}
      >
        <Flex flexDir={"column"} gap={"10px"} maxW={"400px"}>
          <AspectRatio
            position={"relative"}
            w={{ base: "358px", xl: "400px" }}
            ratio={1}
            transition={"transform .3s"}
            _groupHover={{
              _after: {
                background: "rgba(158, 202, 203, 1)",
              },
              transformStyle: "preserve-3d",
              transform: "scale3d(1.1, 1.1, 1.05)",
            }}
            borderRadius={{ base: "30px", lg: "50px" }}
            overflow={"hidden"}
          >
            <Image
              src={data.image ? data.image : "/avatar-placeholder.jpg"}
              alt={"doctor"}
              fill
              sizes="100%"
              style={{
                zIndex: 1,
              }}
            />
          </AspectRatio>
          <Flex
            flexDir={"column"}
            gap={"26px"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            w={"100%"}
            display={{ base: "none", lg: "flex" }}
            borderRadius={"50px"}
            bg={"layoutGradient"}
            p={"40px 30px"}
          >
            <Text
              color={"rgba(11, 72, 73, 1)"}
              fontWeight={"800"}
              fontSize={"20px"}
            >
              Запишитесь на консультацию
            </Text>

            <Text color={"paragraph"} fontWeight={"500"} fontSize={"16px"}>
              Проконсультируем Вас по телефону или запишем на прием к лучшим
              специалистам
            </Text>
            <Button variant={"brandPrimary"} h={"70px"} position={"relative"}>
              Записаться на прием
              <Link
                href={`?doctor=${name}#form`}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Button>
          </Flex>
        </Flex>

        <Flex flexDir={"column"} gap={"30px"} flexGrow={1}>
          <Flex
            flexDir={"column"}
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            fontFamily={"mulish"}
          >
            <Heading
              variant={"title"}
              fontSize={{ base: "20px", lg: "32px" }}
              textAlign={"start"}
            >
              {data.name}
            </Heading>

            <Text fontSize={"16px"} fontWeight={"500"} color={"paragraph"}>
              {data.specialization}
            </Text>
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"10px"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            display={{ base: "flex", lg: "none" }}
          >
            <Button variant={"brandPrimary"} h={"70px"} position={"relative"}>
              Записаться на прием
              <Link
                href={`?doctor=${name}#form`}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Button>
          </Flex>

          <Flex flexDir={"column"} gap={{ base: "30px", lg: "40px" }}>
            <Flex flexDir={"row"} gap={"20px"}>
              <AspectRatio
                pos={"relative"}
                w={{ base: "30px", lg: "38px" }}
                h={{ base: "30px", lg: "38px" }}
                ratio={1}
                flexShrink={0}
              >
                <Image
                  src={"/doc-attr-icon.svg"}
                  alt="attribute icon"
                  fill
                  sizes="@(max-width: 992px) 30px,38px "
                />
              </AspectRatio>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  color={"rgba(101, 101, 101, 1)"}
                >
                  Специализация
                </Text>

                <Text fontWeight={"500"} fontSize={"16px"} color={"paragraph"}>
                  {data.specialization}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir={"row"} gap={"20px"}>
              <AspectRatio
                pos={"relative"}
                w={{ base: "29px", lg: "38px" }}
                h={{ base: "25px", lg: "34px" }}
                ratio={1}
                flexShrink={0}
              >
                <Image
                  src={"/icons/doctor-role-icon.svg"}
                  alt="attribute icon"
                  fill
                  sizes="@(max-width: 992px) 29px,34px "
                />
              </AspectRatio>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  color={"rgba(101, 101, 101, 1)"}
                >
                  Должность
                </Text>

                <Text fontWeight={"500"} fontSize={"16px"} color={"paragraph"}>
                  {data.position}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir={"row"} gap={"20px"}>
              <AspectRatio
                pos={"relative"}
                w={{ base: "29px", lg: "38px" }}
                h={{ base: "25px", lg: "34px" }}
                ratio={1}
                flexShrink={0}
              >
                <Image
                  src={"/icons/doctor-experience-icon.svg"}
                  alt="attribute icon"
                  fill
                  sizes="@(max-width: 992px) 29px,38px "
                />
              </AspectRatio>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  color={"rgba(101, 101, 101, 1)"}
                >
                  Стаж
                </Text>

                <Text fontWeight={"500"} fontSize={"16px"} color={"paragraph"}>
                  {data.seniority}
                </Text>
              </Flex>
            </Flex>

            <DoctorCertificates data={data} />
            {/* Addition info */}
            <Flex flexDir={"row"} gap={"20px"}>
              <AspectRatio
                pos={"relative"}
                w={{ base: "30px", lg: "38px" }}
                h={{ base: "30px", lg: "38px" }}
                ratio={1}
                flexShrink={0}
              >
                <Image
                  src={"/doc-attr-icon.svg"}
                  alt="attribute icon"
                  fill
                  sizes="@(max-width: 992px) 30px,38px "
                />
              </AspectRatio>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  color={"rgba(101, 101, 101, 1)"}
                >
                  Дополнительное поле
                </Text>
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  color={"paragraph"}
                  whiteSpace={"pre-wrap"}
                >
                  {data.description}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <DoctorReviews reviews={data.reviews} />
      <DoctorsAtWork data={data} />
    </Container>
  );
}

async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return (
    <EivaForm
      bg={data.doctors_background ? data.doctors_background : "/form-bg.jpeg"}
    />
  );
}
