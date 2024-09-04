import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ServiceCardProps } from "@/types/ServiceCard";
const ServiceCard = ({ item }: { item: ServiceCardProps }) => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      borderRadius={{ base: "30px", lg: "50px" }}
      bg={"layoutGradient"}
      h={'100%'}
    >
      <Flex
        width={{ base: "100%", lg: "60%" }}
        bg="rgba(255, 255, 255, 0.2)"
        p={{ base: "30px 20px 25px 20px", lg: "30px" }}
        flexDir={"column"}
        gap={"20px"}
      >
        <Text
          fontSize={{ base: "18px", lg: "20px" }}
          fontWeight={{ base: "700", lg: "800" }}
        >
          {item.title}
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"}>
          {item.description}
        </Text>
      </Flex>
      <Box
        w={{ base: "100%", lg: "40%" }}
        // h={{ base: "150px", lg: "380px" }}
        h={{base:'150px',lg:'100%'}}
        pos={"relative"}
      >
        <Box
          position={"absolute"}
          w={{ base: "180px", lg: "300px" }}
          h={{ base: "180px", lg: "300px" }}
          bottom={0}
          left={{ base: "calc(50% - 90px)", lg: "unset" }}
          right={{ base: "unset", lg: "0px" }}
        >
          <Image
            src={"/icons/service-img.png"}
            alt={"service image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default ServiceCard;
