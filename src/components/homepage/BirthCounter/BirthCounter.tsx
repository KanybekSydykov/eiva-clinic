import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { BirthCounterProps } from "@/types/BirthCounterTypes";

const BirthCounter = ({
  counter_title,
  counter_sub_title,
  birth_counter,
  birth_counter_text,
  boys_counter,
  girls_counter,
}: BirthCounterProps) => {
  return (
    <Container
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
      mt={"60px"}
      pb={"60px"}
    >
      <Heading variant={"title"} fontSize={{ base: "20px", lg: "32px" }}>
        {counter_title}
      </Heading>

      <Text
        fontSize={{ base: "18px", lg: "20px" }}
        color={"rgba(108, 108, 108, 1)"}
        fontFamily={"mulish"}
        fontWeight={"400"}
        textAlign={"center"}
        mt={"20px"}
      >
        {counter_sub_title}
      </Text>

      <AnimatedCounter
        counter_title={counter_title}
        counter_sub_title={counter_sub_title}
        birth_counter={birth_counter}
        birth_counter_text={birth_counter_text}
        boys_counter={boys_counter}
        girls_counter={girls_counter}
      />
    </Container>
  );
};

export default BirthCounter;
