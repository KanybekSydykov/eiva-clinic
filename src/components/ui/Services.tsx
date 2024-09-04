import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { getData } from "@/lib/getData";
import { ENDPOINTS } from "@/lib/api";
import StaggerServices from "./StaggerServices";

const Services = async () => {
  const data = await getData(ENDPOINTS.getAboutServices());
  return (
    <Container
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
      pb={"60px"}
      mt={{ base: "40px", lg: "60px" }}
    >
      <Heading variant={"title"} fontSize={{ base: "20px", lg: "32px" }}>
        {data.cards_title ? data.cards_title : "Услуги"}
      </Heading>
  <StaggerServices data={data} />
    </Container>
  );
};

export default Services;
