"use client";

import { Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DoctorCard from "./DoctorCard";

const MotionFlex = motion(Flex); // Motion-enabled Flex component

const StaggerDoctors = ({
  data,
  hasLink,
}: {
  data: any;
  hasLink?: boolean;
}) => {
  const ref = useRef(null); // Create a ref for the container element
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true }); // Only animate once when in view
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  const doctors = hasLink ? data.slice(0, 12) :  data;

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
      w={{base:'100%',lg:'100%'}}
      flexDir={{ base: "row", lg: "row" }}
      flexWrap={{base:'nowrap',lg:'wrap'}}
      overflowX={{ base: "auto", lg: "hidden" }}
      gap={"40px"}
      justifyContent={{ base: "flex-start", lg: "flex-start" }}
      initial="hidden" // Initial state before animation starts
      animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
      variants={containerVariants} // Apply the container animation variants
    >
      {doctors?.map((doctor: any, index: number) => (
        <DoctorCard {...doctor} key={doctor.name} />
      ))}
    </MotionFlex>
  );
};

export default StaggerDoctors;
