import EivaForm from "@/components/common/Form/EivaForm";
import PriceTabs from "@/components/ui/PriceTabs";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import { Container, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Container
        maxW={{
          base: "container.xl",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        }}
        pt={{ base: "60px" }}
      >
        <Heading
          variant={"title"}
          fontSize={{ base: "20px", lg: "32px" }}
          textAlign={"center"}
        >
          Цены на услуги нашей клиники
        </Heading>
        <Text
          fontWeight={"500"}
          fontSize={"16px"}
          color={"rgba(88, 88, 88, 1)"}
          textAlign={"center"}
          mt={"26px"}
        >
          Все цены указаны в сомах
        </Text>
        <Suspense fallback={<Spinner />}>
          <GetPriceData />
        </Suspense>
    
      </Container>
      <Suspense fallback={<Spinner />}>
        <GetFormImages />
        </Suspense>
    </>
  );
};

export default page;

async function GetPriceData() {
  const data = await getData(ENDPOINTS.getPrices());

  return <PriceTabs content={data} />;
}


async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.prices_background ? data.prices_background : "/form-bg.jpeg"} />;
}
