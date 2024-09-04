import { DoctorCardProps } from "@/types/Doctors";
import { AspectRatio, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const DoctorCard = ({
  id,
  name,
  position,
  specialization,
  seniority,
  image,
}: DoctorCardProps) => {
  const childVariants = {
    hidden: { opacity: 0, x: 20 }, // Start hidden and slightly moved down
    visible: { opacity: 1, x: 0 ,transition: { duration: 0.3 }}, // Animate to visible and original position
  };

  return (
    <Flex as={motion.div}
      variants={childVariants} // Apply the child animation variants
      flexDir={"column"}
      gap={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
      p={{ base: "20px 10px", lg: "20px" }}
      w={"100%"}
      maxW={{ base: "300px", lg: "316px" }}
      mx={{ base: "auto", lg: "unset" }}
      role="group"
      borderRadius={"50px"}
      cursor={"pointer"}
      _hover={{
        "@media screen and (min-width: 62em)": {
          bg: "lightGreen",
        },
      }}
    >
      <AspectRatio
        position={"relative"}
        w={{ base: "220px", lg: "260px" }}
        ratio={1}
        m={"10px"}
        _after={{
          content: '""',
          position: "absolute",
          left: "5px",
          bottom: "5px",
          w: "100%",
          h: "100%",
          borderRadius: "50%",
          border: "1px solid rgba(158, 202, 203, 1)",
          transition: "all 0.3s ease",
        }}
        transition={"transform .3s"}
        _groupHover={{
          _after: {
            background: "rgba(158, 202, 203, 1)",
          },
          transformStyle: "preserve-3d",
          transform: "scale3d(1.1, 1.1, 1.05)",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="100%"
          style={{
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
      </AspectRatio>

      <Flex
        flexDir={"column"}
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"mulish"}
        textAlign={"center"}
        px={"16px"}
      >
        <Text fontSize={"18px"} fontWeight={"700"} color={"darkGreen"}>
          {name}
        </Text>

        <Text fontSize={"16px"} fontWeight={"500"} color={"paragraph"}>
          {position}
        </Text>
        <Text fontSize={"16px"} fontWeight={"500"} color={"paragraph"}>
          {specialization}
        </Text>
      </Flex>

      <Flex
        flexDir={"column"}
        gap={"10px"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
      >
        <Button variant={"brandPrimary"} position={"relative"}>
          Записаться на прием
          <Link
            href={"?doctor="+id+"#form"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Button>
        <Button variant={"brandSecondary"} position={"relative"}>
          Подробнее
          <Link
            prefetch={false}
            href={`/specialisty/${id}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Button>
      </Flex>
    </Flex>
  );
};

export default DoctorCard;
