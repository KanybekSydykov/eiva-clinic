import { Accordion, Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AccordionElement from "./AccordionElement";
import Slider from "@/components/ui/Slider";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";

const AccordionCover = async() => {
  const data = await getData(ENDPOINTS.getAboutFaqs());
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
      {data.faq_title ? data.faq_title : "Вопросы - Ответы"}
      </Heading>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "32px", lg: "40px" }}
        mt={"20px"}
      >
        <Accordion
          borderRadius={"20px"}
          allowToggle
          border={"1px solid rgba(19, 114, 118, 0.1)"}
          overflow={"hidden"}
          flexGrow={1}
          h={"fit-content"}
        >
         {data.faqs?.map((faq: any,index: number) => (
            <AccordionElement key={faq.id} question={faq.question} answer={faq.answer} isFirst={index === 0} isLast={index === data.faqs.length - 1}  />
          ))}
        </Accordion>
        <Box
          width={{ base: "100%", lg: "390px" }}
          flexShrink={0}
          h={"fit-content"}
        >
          <Slider images={data.faq_images} />
        </Box>
      </Flex>
    </Container>
  );
};

export default AccordionCover;
