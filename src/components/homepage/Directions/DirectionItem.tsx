"use client";
import BoxArrow from "@/components/common/BoxArrow";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface DirectionItemProps {
  icon: string;
  name: string;
  description: string;
  slug: string;
}

const DirectionItem = ({
  icon,
  name,
  description,
  slug,
}: DirectionItemProps) => {
  // Variants for child animation
  const childVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly moved down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        damping: 8, // Damping controls how "bouncy" the animation is
        bounce: 0.25,
        type: "spring",
      },
    },
    // Animate to visible and original position
  };

  return (
    <Flex
      as={motion.div}
      variants={childVariants} // Apply the child animation variants
      flexDir={"column"}
      p={"15px 10px 50px"}
      gap={"16px"}
      fontFamily={"mulish"}
      borderRadius={"30px"}
      border={"1px solid rgba(15, 95, 98, 0.3)"}
      role="group"
      // transition={"all 0.3s ease"}
      _hover={{
        "@media screen and (min-width: 62em)": {
          bg: "lightGreen",
        },
      }}
      pos={"relative"}
      w={{ base: "100%", lg: "calc(50% - 10px)" }}
    >
      <Flex
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={"4px"}
      >
        <Image src={icon} alt={name} width={30} height={30} />
        <BoxArrow />
      </Flex>

      <Heading color={"darkGreen"} fontWeight={"700"} fontSize={"18px"}>
        {name}
      </Heading>
      <Text color={"cardText"} fontSize={"16px"} fontWeight={"400"}>
        {description}
      </Text>
      <Link
        href={`services/${slug}`}
        prefetch={false}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </Flex>
  );
};

export default DirectionItem;
