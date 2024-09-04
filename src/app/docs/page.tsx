import EivaForm from "@/components/common/Form/EivaForm";
import DocsTabs from "@/components/ui/DocsTabs";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import { Container, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const page = () => {
  return (
    <main>
      <Suspense
        fallback={
          <Container
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW={{
              base: "container.xl",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1440px",
            }}
          >
            <Spinner size="xl" color="heading" />
          </Container>
        }
      >
        <GetDocsData />
      </Suspense>
      <Suspense
        fallback={
          <Container
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW={{
              base: "container.xl",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1440px",
            }}
          >
            <Spinner size="xl" color="heading" />
          </Container>
        }
      >
        <GetFormImages />
      </Suspense>
    </main>
  );
};

export default page;

async function GetDocsData() {
  const data = await getData(ENDPOINTS.getDocs());

  return <DocsTabs content={data.document} />;
}



async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.docs_background ? data.docs_background : "/form-bg.jpeg"} />;
}
