import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { DoctorCardProps } from "@/types/Doctors";
import StaggerDoctors from "./StaggerDoctors";
import ButtonWithArrow from "@/components/ui/ButtonWithArrow";


const Doctors = ({
  hasLink = true,
  title,
  doctors,
}: {
  hasLink?: boolean;
  title?: string;
  doctors: DoctorCardProps[];
}) => {
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
        {title}
      </Heading>
      <StaggerDoctors data={doctors} />
      <Flex justifyContent={{ base: "center", lg: "flex-end" }}>
        {hasLink && (
        <ButtonWithArrow link="/specialisty" text="Посмотреть всех специалистов" />
        )}
      </Flex>
    </Container>
  );
};

export default Doctors;
