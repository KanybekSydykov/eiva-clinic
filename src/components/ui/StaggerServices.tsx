'use client'
import { ServiceCardProps } from '@/types/ServiceCard'
import { Grid, GridItem } from '@chakra-ui/react'
import React, { useRef } from 'react'
import ServiceCard from './ServiceCard'
import { motion, useInView } from 'framer-motion'

const StaggerServices = ({data}: {data: any}) => {
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
    const childVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden and slightly moved down
        visible: { opacity: 1, y: 0 ,transition: { duration: 0.3 }}, // Animate to visible and original position
      };
  return (
    <Grid as={motion.div}
    templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
    gap={"10px"}
    mt={"50px"}
    ref={ref}
    initial="hidden" // Initial state before animation starts
    animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
    variants={containerVariants}

  >
    {data.cards?.map((card: ServiceCardProps) => (
      <GridItem as={motion.div} variants={childVariants} key={card.id}>
        <ServiceCard item={card} />
      </GridItem>
    ))}
  </Grid>
  )
}

export default StaggerServices