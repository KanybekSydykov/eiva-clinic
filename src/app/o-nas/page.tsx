import AboutUs from "@/components/common/AboutUs/AboutUs";
import AccordionCover from "@/components/common/Accordion/AccordionCover";
import EivaForm from "@/components/common/Form/EivaForm";
import GetSomeData from "@/components/common/GetSomeData";
import BirthCounter from "@/components/homepage/BirthCounter/BirthCounter";
import ImageGrid from "@/components/ui/ImageGrid";
import PartnerTabs from "@/components/ui/PartnerTabs";
import Services from "@/components/ui/Services";
import StatisticsCounters from "@/components/ui/StatisticsCounters";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import { Container, Skeleton, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const page = () => {
  return (
    <main>
      <Suspense
        fallback={
          <div>
            <Container
              h="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxW={{ base: "100%", lg: "1280px" }}
            >
              <div>
                <Spinner size="xl" color="heading" />
              </div>
            </Container>
          </div>
        }
      >
        <BirthCounterData />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <Container
              h="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxW={{ base: "100%", lg: "1280px" }}
            >
              <div>
                <Spinner size="xl" color="heading" />
              </div>
            </Container>
          </div>
        }
      >
        <AboutUsData />
      </Suspense>

      <Suspense
        fallback={
          <Skeleton
            maxW={{ base: "container.xl", xl: "1296px", "2xl": "1440px" }}
            width={"100vw"}
            h={"100vh"}
            mx={"auto"}
          />
        }
      >
        <Services />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            maxW={{ base: "container.xl", xl: "1296px", "2xl": "1440px" }}
            width={"100vw"}
            h={"100vh"}
            mx={"auto"}
          />
        }
      >
        <AccordionCover />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            maxW={{ base: "container.xl", xl: "1296px", "2xl": "1440px" }}
            width={"100vw"}
            h={"100vh"}
            mx={"auto"}
          />
        }
      >
        <GetSomeData Component={PartnerTabs} url={ENDPOINTS.getPartners} />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            maxW={{ base: "container.xl", xl: "1296px", "2xl": "1440px" }}
            width={"100vw"}
            h={"100vh"}
            mx={"auto"}
          />
        }
      >
        <GetSomeData Component={ImageGrid} url={ENDPOINTS.getGallery} />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            maxW={{ base: "container.xl", xl: "1296px", "2xl": "1440px" }}
            width={"100vw"}
            h={"100vh"}
            mx={"auto"}
          />
        }
      >
        <GetFormImages />
      </Suspense>
    </main>
  );
};

export default page;

async function AboutUsData() {
  const data = await getData(ENDPOINTS.getAboutPageAbout());

  return (
    <div>
      <AboutUs
        hasLink={false}
        title={data.title}
        description={data.text}
        photo={data.image}
      />
      <StatisticsCounters
        counter1={data.counter_1_value}
        counter2={data.counter_2_value}
        counter3={data.counter_3_value}
      />
    </div>
  );
}

async function BirthCounterData() {
  const data = await getData(ENDPOINTS.getBirthCounter());

  return (
    <BirthCounter
      counter_title={data.counter_title}
      counter_sub_title={data.counter_sub_title}
      birth_counter={data.birth_counter}
      birth_counter_text={data.birth_counter_sub_title}
      boys_counter={data.boys_counter}
      girls_counter={data.girls_counter}
    />
  );
}


async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());
  return <EivaForm bg={data.about_background ? data.about_background : "/form-bg.jpeg"} />;
}
