import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { getData } from "@/lib/getData";
import { ENDPOINTS } from "@/lib/api";
import StaggerDirection from "./StaggerDirection";

// const directionData = {
//   icon: "/icons/pregnant.svg",
//   title: "Ведение беременности",
//   description:
//     "А период беременности важно обеспечить бережное и профессиональное наблюдение беременности. Наши врачи постараются, чтобы ваша беременность прошла легко и без потрясений. Мы обеспечиваем ведение беременности любой сложности!",
//   link: "/",
// };

const Directions = async ({ title }: { title?: string }) => {
  const data = await getData(ENDPOINTS.getServiceCategories());
  return (
    <Container
      maxW={{
        base: "container.xl",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      }}
      pb={"60px"}
    >
      <Heading variant={"title"} fontSize={{ base: "20px", lg: "32px" }}>
        Направления деятельности
      </Heading>

      <StaggerDirection data={data} />
    </Container>
  );
};

export default Directions;
