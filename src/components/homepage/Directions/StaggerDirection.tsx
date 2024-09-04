"use client";

import { Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import DirectionItem from "./DirectionItem";
import { motion, useInView } from "framer-motion";

const MotionFlex = motion(Flex); // Motion-enabled Flex component

const StaggerDirection = ({ data }: any) => {
  const ref = useRef(null); // Create a ref for the container element
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true }); // Only animate once when in view

  // Variants for parent container animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Stagger children with a delay of 0.2 seconds
      },
    },
  };

  return (
    <MotionFlex
      ref={ref} // Reference the motion flex container
      flexDir={{ base: "column", lg: "row" }}
      flexWrap={{ base: "nowrap", lg: "wrap" }}
      gap={"10px"}
      mt={{ base: "20px", lg: "60px" }}
      initial="hidden" // Initial state before animation starts
      animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      variants={containerVariants} // Apply the container animation variants
    >
      {data?.map((item: any, index: number) => (
        <DirectionItem {...item} key={index} />
      ))}
    </MotionFlex>
  );
};

export default StaggerDirection;
