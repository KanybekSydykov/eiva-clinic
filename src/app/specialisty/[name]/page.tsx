import EivaForm from "@/components/common/Form/EivaForm";
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
  interface Certificate {
    name: string;
    image: string;
  }

  function splitIntoPairs(arr: Certificate[]): Certificate[][] {
    return arr.reduce(
      (result: Certificate[][], item: Certificate, index: number) => {
        if (index % 2 === 0) {
          result.push([item]);
        } else {
          result[result.length - 1].push(item);
        }
        return result;
      },
      []
    );
  }

  const certificates = splitIntoPairs(data.certificates);

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
              src={data.image}
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
            <Button variant={"brandPrimary"} h={"70px"} mt={"4px"}>
              Записаться на прием
            </Button>
          </Flex>
        </Flex>

        <Flex flexDir={"column"} gap={"30px"}>
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
            <Button variant={"brandPrimary"} h={"70px"}>
              Записаться на прием
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

            {/* Certificates */}
            <Flex flexDir={"column"} gap={{ base: "16px", lg: "40px" }}>
              <Flex flexDir={"row"} gap={"20px"}>
                <AspectRatio
                  pos={"relative"}
                  w={"40px"}
                  h={"40px"}
                  ratio={1}
                  flexShrink={0}
                >
                  <Image
                    src={"/icons/doc-cert-icon.svg"}
                    alt="attribute icon"
                    fill
                    sizes="40px "
                  />
                </AspectRatio>
                <Flex flexDir={"column"} gap={"6px"}>
                  <Text
                    fontWeight={"500"}
                    fontSize={"16px"}
                    color={"rgba(101, 101, 101, 1)"}
                  >
                    Дипломы и сертификаты
                  </Text>
                </Flex>
              </Flex>
              <Flex
                flexDir={{ base: "column", lg: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"16px"}
              >
                {certificates.map((item, index) => (
                  <Flex
                    key={index}
                    flexDir={{
                      base: "column",
                      lg: `${
                        (index + 1) % 2 === 0 ? "column" : "column-reverse"
                      }`,
                    }}
                    gap={"16px"}
                  >
                    <AspectRatio
                      w={{ base: "312px", xl: "398px" }}
                      h={{ base: "215px", xl: "274px" }}
                    >
                      <Image
                        src={item[0].image}
                        alt={"certificate"}
                        fill
                        sizes={"@(max-width: 992px) 312px,398pxa"}
                      />
                    </AspectRatio>
                    <AspectRatio
                      w={{ base: "312px", xl: "398px" }}
                      h={{ base: "447px", xl: "571px" }}
                    >
                      <Image
                        src={item[1].image}
                        alt={"certificate"}
                        fill
                        sizes={"@(max-width: 992px) 312px,398pxa"}
                      />
                    </AspectRatio>
                  </Flex>
                ))}
              </Flex>
            </Flex>
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

      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        mt={"100px"}
        gap={{ base: "30px", lg: "50px" }}
      >
        <Heading
          variant={"title"}
          fontSize={{ base: "20px", lg: "32px" }}
          textAlign={"center"}
        >
          Отзывы пациентов
        </Heading>
        <Slider
          perPage={2.3}
          ratio={9 / 16}
          maxHeight="630px"
          lg={3}
          xl={4}
          xxl={5}
          images={data.reviews}
        />
      </Flex>

      <Flex flexDir={"column"} mt={"100px"} gap={{ base: "30px", lg: "50px" }}>
        <Heading
          variant={"title"}
          fontSize={{ base: "20px", lg: "32px" }}
          textAlign={"center"}
        >
          Специалист на рабочем месте
        </Heading>

        <Flex flexDir={{ base: "column", lg: "row" }} mt={"20px"} gap={"10px"}>
          {data.photos.map((item: { image: string }, index: number) => (
            <AspectRatio
              w={{ base: "351px", lg: "425px" }}
              h={{ base: "474px", lg: "568px" }}
              pos={"relative"}
              borderRadius={{ base: "30px", lg: "50px" }}
              overflow={"hidden"}
              key={index}
            >
              <Image
                src={item.image}
                alt={"doctor"}
                fill
                sizes={"@(max-width: 992px) 351px,425px"}
              />
            </AspectRatio>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.doctors_background ? data.doctors_background : "/form-bg.jpeg"} />;
}
