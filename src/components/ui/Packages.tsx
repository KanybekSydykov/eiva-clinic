"use client";

import {
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Packages = ({ content }: { content: any }) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const path = usePathname();
  

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
        {content.services[0].services.map((service: any,index:number) => (
          <Flex
            key={index}
            borderX={"1px solid rgba(218, 228, 214, 0.8)"}
            flexDir={"row"}
            bg={"lightGreen"}
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
                minW={"275px"}
              >
                {service.name}
              </Text>
              <Tooltip
                label={
                  service.tooltip
                    ? service.tooltip
                    : "Тут должна быть подсказка"
                }
              >
                <QuestionOutlineIcon boxSize={"20px"} />
              </Tooltip>
            </Flex>

            <Center
              className="standard"
              width={{ base: "128px", lg: "280px" }}
              display={{
                base: `${activeTab === 0 ? "flex" : "none"}`,
                lg: "flex",
              }}
              borderEnd={{
                base: "none",
                lg: "1px solid rgba(218, 228, 214, 0.8)",
              }}
            >
              <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
                {service.price ? service.price : "-"}
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
                {service.price_comfort ? service.price_comfort : "-"}
              </Text>
            </Center>
            {content.packages[0].name_vip ?
                 <Center
                 width={{ base: "128px", lg: "280px" }}
                 display={{
                   base: `${activeTab === 2 ? "flex" : "none"}`,
                   lg: "flex",
                 }}
               >
                 <Text fontWeight={"500"} fontSize={"18px"} color={"darkGreen"}>
                   {service.price_vip ? service.price_vip : "-"}
                 </Text>
               </Center> : null  
          }
     
          </Flex>
        ))}

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
