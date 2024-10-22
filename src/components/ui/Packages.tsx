"use client";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import ControlledTooltip from "./ControlledTooltip";

const Packages = ({ content }: { content: any }) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const path = usePathname();
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  console.log(activeTab);

  if (content.length === 0)
    return (
      <Center>
        <Spinner />
      </Center>
    );
  return (
    <Flex flexDir={"column"}>
      <Flex
        flexDir={"row"}
        justifyContent={{ base: "flex-start", lg: "flex-end" }}
        gap={{ base: "0px", lg: "10px" }}
      >
        <Flex
          flexDir={"column"}
          py={"2px"}
          px={"10px"}
          width={{ base: "100%", lg: "300px" }}
          borderTopRadius={"10px"}
          borderTop={{
            base: `1px solid ${
              activeTab === 0 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          borderLeft={{
            base: `1px solid ${
              activeTab === 0 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          borderRight={{
            base: `1px solid ${
              activeTab === 0 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          borderBottom={{
            base: `1px solid ${
              activeTab !== 0 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          transition={"all .3s ease"}
          onClick={() => (
            setActiveTab(0), router.push(`${path}/?package=standard`)
          )}
          bg={{
            base: "transparent",
            lg: activeTab === 0 ? "lightGreen" : "transparent",
          }}
          cursor={"pointer"}
          _hover={{
            bg: "lightGreen",
          }}
        >
          <Text
            fontWeight={"700"}
            fontSize={"22px"}
            textAlign={{ base: "left", lg: "center" }}
          >
            {content.packages[0].name_standard}
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={"18px"}
            textAlign={{ base: "left", lg: "center" }}
            color={"heading"}
          >
            {content.packages[0].price_standard}
          </Text>

          <Flex
            flexDir={"column"}
            gap={"10px"}
            mt={"24px"}
            display={{ base: "none", lg: "flex" }}
          >
            <Button variant={"brandPrimary"}>Выбрать тариф</Button>
            {content.packages[0].document_medicine_standard && (
              <Button variant={"brandSecondary"} position={"relative"}>
                Медикаменты и ИМН
                <a
                  href={content.packages[0].document_medicine_standard}
                  download
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Button>
            )}
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          width={{ base: "100%", lg: "300px" }}
          py={"2px"}
          px={"10px"}
          borderTopRadius={"10px"}
          borderTop={{
            base: `1px solid ${
              activeTab === 1 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          borderLeft={{
            base: `1px solid ${
              activeTab === 1 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          borderRight={{
            base: `1px solid ${
              activeTab === 1 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          borderBottom={{
            base: `1px solid ${
              activeTab !== 1 ? "rgba(15, 95, 98, .5)" : "transparent"
            }`,
            lg: "none",
          }}
          transition={"all .3s ease"}
          onClick={() => (
            setActiveTab(1), router.push(`${path}/?package=comfort`)
          )}
          bg={{
            base: "transparent",
            lg: activeTab === 1 ? "lightGreen" : "transparent",
          }}
          cursor={"pointer"}
          _hover={{
            bg: "lightGreen",
          }}
        >
          <Text
            fontWeight={"700"}
            fontSize={"22px"}
            textAlign={{ base: "left", lg: "center" }}
          >
            {content.packages[0].name_comfort}
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={"18px"}
            textAlign={{ base: "left", lg: "center" }}
            color={"heading"}
          >
            {content.packages[0].price_comfort}
          </Text>
          <Flex
            flexDir={"column"}
            gap={"10px"}
            mt={"24px"}
            display={{ base: "none", lg: "flex" }}
          >
            <Button variant={"brandPrimary"}>Выбрать тариф</Button>
            {content.packages[0].document_medicine_comfort && (
              <Button variant={"brandSecondary"} position={"relative"}>
                Медикаменты и ИМН
                <a
                  href={content.packages[0].document_medicine_comfort}
                  download
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Button>
            )}
          </Flex>
        </Flex>
        {content.packages[0].name_vip ? (
          <Flex
            flexDir={"column"}
            width={{ base: "100%", lg: "300px" }}
            py={"2px"}
            px={"10px"}
            borderTopRadius={"10px"}
            borderTop={{
              base: `1px solid ${
                activeTab === 2 ? "rgba(15, 95, 98, .5)" : "transparent"
              }`,
              lg: "none",
            }}
            borderLeft={{
              base: `1px solid ${
                activeTab === 2 ? "rgba(15, 95, 98, .5)" : "transparent"
              }`,
              lg: "none",
            }}
            borderRight={{
              base: `1px solid ${
                activeTab === 2 ? "rgba(15, 95, 98, .5)" : "transparent"
              }`,
              lg: "none",
            }}
            borderBottom={{
              base: `1px solid ${
                activeTab !== 2 ? "rgba(15, 95, 98, .5)" : "transparent"
              }`,
              lg: "none",
            }}
            transition={"all .3s ease"}
            onClick={() => (
              setActiveTab(2), router.push(`${path}/?package=vip`)
            )}
            cursor={"pointer"}
            bg={{
              base: "transparent",
              lg: activeTab === 2 ? "lightGreen" : "transparent",
            }}
            _hover={{
              bg: "lightGreen",
            }}
          >
            <Text
              fontWeight={"900"}
              fontSize={"22px"}
              textAlign={{ base: "left", lg: "center" }}
            >
              {content.packages[0].name_vip}
            </Text>
            <Text
              fontWeight={"700"}
              fontSize={"18px"}
              textAlign={{ base: "left", lg: "center" }}
              color={"heading"}
            >
              {content.packages[0].price_vip}
            </Text>
            <Flex
              flexDir={"column"}
              gap={"10px"}
              mt={"24px"}
              display={{ base: "none", lg: "flex" }}
            >
              <Button variant={"brandPrimary"}>Выбрать тариф</Button>
              {content.packages[0].document_medicine_vip && (
                <Button variant={"brandSecondary"} position={"relative"}>
                  Медикаменты и ИМН
                  <a
                    href={content.packages[0].document_medicine_vip}
                    download
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Button>
              )}
            </Flex>
          </Flex>
        ) : null}
      </Flex>
      <Flex
        flexDir={"column"}
        gap={"10px"}
        mt={"24px"}
        display={{ base: "none", lg: "none" }}
      >
        <Button variant={"brandPrimary"}>Выбрать тариф</Button>
        <Button variant={"brandSecondary"}>Медикаменты и ИМН</Button>
      </Flex>

      <Flex
        flexDir={"column"}
        flexGrow={1}
        mt={"40px"}
        borderBottom={"1px solid rgba(218, 228, 214, 0.8)"}
      >
        <Text
          mb={"20px"}
          fontWeight={"700"}
          fontSize={"16px"}
          color={"darkGreen"}
          display={{ base: "block", lg: "none" }}
        >
          {activeTab === 0 ? "Стандарт" : activeTab === 1 ? "Комфорт" : "VIP"}
        </Text>

        <Flex flexDir={"column"}>
          {content.services.map((services: any, index: number) => (
            <Flex key={services.name} flexDir={"column"}>
              <Text
                my={"20px"}
                fontWeight={"700"}
                fontSize={"18px"}
                color={"darkGreen"}
              >
                {services.name}
              </Text>
              <>
                {services.services.map((service: any, index: number) => (
                  <Grid
                    key={service.id}
                    borderX={"1px solid rgba(218, 228, 214, 0.8)"}
                    gridTemplateColumns={{
                      base: "repeat(10, 10%)",
                      lg: "repeat(5, 20%)",
                    }} //
                    bg={"lightGreen"}
                    borderBottom={index === services.services.length - 1 ? "none" : "2px solid rgba(186, 191, 183, 1)"}
                  >
                    <GridItem
                      gridColumn={{ base: "span 7", lg: "span 3" }}
                    >
                      <Flex
                        flexDir={"row"}
                        p={"20px 16px"}
                        gap={"10px"}
                        h={"100%"}
                        alignItems={"center"}
                        me={{ base: "unset", lg: "auto" }}
                        flexGrow={{ base: 1, lg: 1 }}
                        borderEnd={"1px solid rgba(218, 228, 214, 0.8)"}
                      >
                        <Text
                          fontWeight={"500"}
                          fontSize={"16px"}
                          color={"darkGreen"}
                          minW={{ base: "164px", lg: "275px" }}
                        >
                          {service.name}
                        </Text>
                        <ControlledTooltip tooltipText={services.tooltip} />
                      </Flex>
                    </GridItem>

                    {/* For mobile: Conditionally render based on the selected tab */}
                    {!isDesktop && activeTab === 0 && (
                      <GridItem gridColumn={{ base: "span 3", lg: "span 1" }}>
                        <Center
                          className="standard"
                          width={"100%"}
                          h={"100%"}
                          display="flex"
                          borderEnd={{
                            base: "none",
                            lg: "1px solid rgba(218, 228, 214, 0.8)",
                          }}
                        >
                          <Text
                            className="service-price"
                            textAlign={"center"}
                            fontWeight={{ base: "400", lg: "500" }}
                            fontSize={{ base: "13px", lg: "18px" }}
                            color={"darkGreen"}
                          >
                            {service.price ? service.price : "-"}
                          </Text>
                        </Center>
                      </GridItem>
                    )}

                    {!isDesktop && activeTab === 1 && (
                      <GridItem gridColumn={{ base: "span 3", lg: "span 1" }}>
                        <Center
                          className="comfort"
                          width={"100%"}
                          h={"100%"}
                          borderEnd={{
                            base: "none",
                            lg: "1px solid rgba(218, 228, 214, 0.8)",
                          }}
                          display="flex"
                        >
                          <Text
                            fontWeight={{ base: "400", lg: "500" }}
                            fontSize={{ base: "13px", lg: "18px" }}
                            color={"darkGreen"}
                            textAlign={"center"}
                          >
                            {service.price_comfort
                              ? service.price_comfort
                              : "-"}
                          </Text>
                        </Center>
                      </GridItem>
                    )}

                    {/* For desktop: Always render both 'standard' and 'comfort' items */}
                    {isDesktop && (
                      <>
                        <GridItem gridColumn={{ base: "span 1", lg: "span 1" }}>
                          <Center
                            className="standard"
                            width={"100%"}
                            h={"100%"}
                            display="flex"
                            borderEnd={{
                              base: "none",
                              lg: "1px solid rgba(218, 228, 214, 0.8)",
                            }}
                          >
                            <Text
                              className="service-price"
                              textAlign={"center"}
                              fontWeight={{ base: "400", lg: "500" }}
                              fontSize={{ base: "15px", lg: "18px" }}
                              color={"darkGreen"}
                            >
                              {service.price ? service.price : "-"}
                            </Text>
                          </Center>
                        </GridItem>

                        <GridItem gridColumn={{ base: "span 1", lg: "span 1" }}>
                          <Center
                            className="comfort"
                            width={"100%"}
                            h={"100%"}
                            display="flex"
                            borderEnd={{
                              base: "none",
                              lg: "1px solid rgba(218, 228, 214, 0.8)",
                            }}
                          >
                            <Text
                              fontWeight={{ base: "400", lg: "500" }}
                              fontSize={{ base: "15px", lg: "18px" }}
                              color={"darkGreen"}
                            >
                              {service.price_comfort
                                ? service.price_comfort
                                : "-"}
                            </Text>
                          </Center>
                        </GridItem>
                      </>
                    )}
                  </Grid>
                ))}
              </>
            </Flex>
          ))}
        </Flex>

        {/* <Flex
          borderX={"1px solid rgba(218, 228, 214, 0.8)"}
          flexDir={"row"}
          bg={"transparent"}
          alignItems={"stretch"}
          justifyContent={{ base: "space-between", lg: "flex-end" }}
          gap={{ base: "0px", lg: "40px" }}
        >
          <Flex
            flexDir={"row"}
            p={"20px 16px"}
            gap={"10px"}
            alignItems={"center"}
            me={{ base: "unset", lg: "auto" }}
            borderEnd={"1px solid rgba(218, 228, 214, 0.8)"}
          >
            <Text
              maxW={{ base: "164px", lg: "300px" }}
              fontWeight={"500"}
              fontSize={"16px"}
              color={"darkGreen"}
            >
              Цена за одноплодные неосложненные роды через естественные родовые
              пути без скидок в национальной валюте (сом)
            </Text>
            <Tooltip label={"Подсказка"}>
              <QuestionOutlineIcon boxSize={"20px"} />
            </Tooltip>
          </Flex>

          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
          <Center
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
            width={{ base: "128px", lg: "280px" }}
            display={{
              base: `${activeTab === 1 ? "flex" : "none"}`,
              lg: "flex",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
          <Center
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
            width={{ base: "128px", lg: "280px" }}
            display={{
              base: `${activeTab === 2 ? "flex" : "none"}`,
              lg: "flex",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
        </Flex> */}
      </Flex>
      {/* <Flex
        flexDir={"column"}
        flexGrow={1}
        mt={"40px"}
        borderBottom={"1px solid rgba(218, 228, 214, 0.8)"}
      >
        <Text
          mb={"20px"}
          fontWeight={"700"}
          fontSize={"16px"}
          color={"darkGreen"}
        >
          Дополнительные обследования
        </Text>
        <Flex
          borderX={"1px solid rgba(218, 228, 214, 0.8)"}
          flexDir={"row"}
          bg={"lightGreen"}
          alignItems={"stretch"}
          gap={{ base: "0px", lg: "40px" }}
          justifyContent={{ base: "space-between", lg: "flex-end" }}
        >
          <Flex
            flexDir={"row"}
            p={"20px 16px"}
            gap={"10px"}
            me={{ base: "unset", lg: "auto" }}
            alignItems={"center"}
            borderEnd={"1px solid rgba(218, 228, 214, 0.8)"}
          >
            <Text
              maxW={{ base: "164px", lg: "300px" }}
              fontWeight={"500"}
              fontSize={"16px"}
              color={"darkGreen"}
            >
              Цена за одноплодные неосложненные роды через естественные родовые
              пути без скидок в национальной валюте (сом)
            </Text>
            <Tooltip label={"Подсказка"}>
              <QuestionOutlineIcon boxSize={"20px"} />
            </Tooltip>
          </Flex>

          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
            display={{
              base: `${activeTab === 1 ? "flex" : "none"}`,
              lg: "flex",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
            display={{
              base: `${activeTab === 2 ? "flex" : "none"}`,
              lg: "flex",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
        </Flex>
        <Flex
          borderX={"1px solid rgba(218, 228, 214, 0.8)"}
          flexDir={"row"}
          bg={"transparent"}
          alignItems={"stretch"}
          gap={{ base: "0px", lg: "40px" }}
          justifyContent={{ base: "space-between", lg: "flex-end" }}
        >
          <Flex
            flexDir={"row"}
            p={"20px 16px"}
            me={{ base: "unset", lg: "auto" }}
            gap={"10px"}
            alignItems={"center"}
            borderEnd={"1px solid rgba(218, 228, 214, 0.8)"}
          >
            <Text
              maxW={{ base: "164px", lg: "300px" }}
              fontWeight={"500"}
              fontSize={"16px"}
              color={"darkGreen"}
            >
              Цена за одноплодные неосложненные роды через естественные родовые
              пути без скидок в национальной валюте (сом)
            </Text>
            <Tooltip label={"Подсказка"}>
              <QuestionOutlineIcon boxSize={"20px"} />
            </Tooltip>
          </Flex>

          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
            display={{
              base: `${activeTab === 1 ? "flex" : "none"}`,
              lg: "flex",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
          <Center
            width={{ base: "128px", lg: "280px" }}
            borderEnd={{
              base: "none",
              lg: "1px solid rgba(218, 228, 214, 0.8)",
            }}
            display={{
              base: `${activeTab === 2 ? "flex" : "none"}`,
              lg: "flex",
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
              60000 som
            </Text>
          </Center>
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export default Packages;
