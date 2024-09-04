"use client";

import { Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DoctorCard from "./DoctorCard";

const MotionFlex = motion(Flex); // Motion-enabled Flex component

const StaggerDoctors = ({ data }: any) => {
  const ref = useRef(null); // Create a ref for the container element
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true }); // Only animate once when in view

  // Variants for parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
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
      mt={"40px"}
      flexDir={{ base: "column", lg: "row" }}
      flexWrap={"wrap"}
      gap={"40px"}
      justifyContent={{ base: "center", lg: "flex-start" }}
      initial="hidden" // Initial state before animation starts
      animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      variants={containerVariants} // Apply the container animation variants
    >
      {data?.map((doctor: any, index: number) => (
          <DoctorCard {...doctor} key={doctor.name} />
      ))}
    </MotionFlex>
  );
};

export default StaggerDoctors;
