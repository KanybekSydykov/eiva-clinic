import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "../ui/Slider";

const DoctorReviews = ({ reviews }: any) => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      mt={"100px"}
      gap={{ base: "30px", lg: "50px" }}
    >
      <Heading
        variant={"title"}
        fontSize={{ base: "20px", lg: "32px" }}
        textAlign={"center"}
      >
        Отзывы пациентов
      </Heading>
      <Slider
        perPage={1}
        ratio={9 / 16}
        maxHeight="630px"
        lg={3}
        xl={3}
        xxl={3}
        images={reviews}
        cover={false}
      />
    </Flex>
  );
};

export default DoctorReviews;
