

import { AspectRatio, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Slider from '../ui/Slider'

const DoctorsAtWork = ({data}:any) => {
  return (

    <Flex flexDir={"column"} mt={"100px"} gap={{ base: "30px", lg: "50px" }}>
    <Heading
      variant={"title"}
      fontSize={{ base: "20px", lg: "32px" }}
      textAlign={"center"}
    >
      Специалист на рабочем месте
    </Heading>

    <Flex flexDir={{ base: "column", lg: "row" }} mt={"20px"} gap={"10px"}>
      <Slider 
       perPage={1}
       ratio={9 / 16}
       maxHeight="630px"
       lg={3}
       xl={4}
       xxl={4}
       images={data.photos}
      />
    </Flex>
  </Flex>
  )
}

export default DoctorsAtWork