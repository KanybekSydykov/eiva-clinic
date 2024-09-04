import EivaForm from "@/components/common/Form/EivaForm";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Flex,
  Text,
  AspectRatio,
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { Suspense } from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
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
        <GetServiceData params={params} />
      </Suspense>
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
        <GetFormImages />
      </Suspense>
    </main>
  );
};

export default page;

async function GetServiceData({ params }: { params: { slug: string } }) {
  const data = await getData(ENDPOINTS.getService(params.slug));

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
      <Tabs position="relative" variant="unstyled" defaultIndex={0}>
        <TabList
          flexWrap={"nowrap"}
          overflowX={"auto"}
          sx={{ scrollbarWidth: "none" }}
        >
          {data.types.map((item: any, index: number) => (
            <Tab
              key={index}
              transition={"all 0.3s ease"}
              _selected={{
                color: "heading",
                fontWeight: "700",
                borderColor: "heading",
              }}
              fontWeight={"600"}
              fontSize={"14px"}
              p={{ base: "8px 10px", lg: "16px 20px" }}
              w={"240px"}
              borderBottom={"1px solid transparent"}
              flexShrink={0}
            >
              {item.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt={{ base: "50px", lg: "95px" }}>
          {data.types.map((item: any, index: number) => (
            <TabPanel key={index} maxW="889px" mx="auto" color="paragraph">
              <Flex flexDir="column" gap={{ base: "70px", lg: "80px" }}>
                <Text fontWeight="600" fontSize="16px" textAlign="center">
                  {item.services[0]?.title
                    ? item.services[0].title
                    : item.title}
                </Text>

                <Flex flexDir="column" gap="70px">
                  {item.services.length > 0
                    ? item.services[0].items.map(
                        (service: any, index: number) =>
                          service.image_duration === "left" && (
                            <Flex
                              key={index}
                              flexDir={{
                                base: "column",
                                lg:
                                  (index + 1) % 2 === 0 ? "row-reverse" : "row",
                              }}
                              gap={{ base: "26px", lg: "80px" }}
                              alignItems="center"
                              justifyContent="center"
                            >
                              <AspectRatio
                                ratio={358 / 525}
                                width="358px"
                                flexShrink={0}
                              >
                                <Image
                                  src={service.image}
                                  alt="image"
                                  fill
                                  sizes="358px 525px"
                                  style={{
                                    objectFit: "cover",
                                    borderRadius: "45px",
                                  }}
                                />
                              </AspectRatio>
                              <Text h="fit-content" fontWeight="600">
                                {service.text}
                              </Text>
                            </Flex>
                          )
                      )
                    : null}
                </Flex>

                {item.services.length > 0
                  ? item.services[0].items.map(
                      (service: any, index: number) =>
                        service.image_duration === "right" && (
                          <Flex
                            flexDir={"column"}
                            gap={{ base: "30px", lg: "50px" }}
                          >
                            <Text
                              fontWeight={"600"}
                              color={"paragraph"}
                              whiteSpace={"pre-wrap"}
                            >
                              {service.text}
                            </Text>

                            <AspectRatio
                              ratio={{ base: 358 / 170, lg: 858 / 425 }}
                              width={{ base: "358px", lg: "858px" }}
                              flexShrink={0}
                              borderRadius={{ base: "30px", lg: "50px" }}
                              overflow={"hidden"}
                            >
                              <Image
                                src={service.image}
                                fill
                                sizes="@media (max-width: 992px) 358px 170px, @media (min-width: 992px) 858px 425px"
                                alt="image"
                              />
                            </AspectRatio>
                          </Flex>
                        )
                    )
                  : null}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
}


async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.directions_background ? data.directions_background : "/form-bg.jpeg"} />;
}
