import EivaForm from "@/components/common/Form/EivaForm";
import ServiceContent from "@/components/services/ServiceContent";
import { ENDPOINTS } from "@/lib/api";
import { getData } from "@/lib/getData";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Spinner,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

// Reusable Suspense Fallback
const FallbackSpinner = () => (
  <Container
    h="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    maxW={{ base: "100%", lg: "1280px" }}
  >
    <Spinner size="xl" color="heading" />
  </Container>
);

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      <Suspense fallback={<FallbackSpinner />}>
        <GetServiceData params={params} />
      </Suspense>
      <Suspense fallback={<FallbackSpinner />}>
        <GetFormImages />
      </Suspense>
    </main>
  );
};

export default page;

async function GetServiceData({ params }: { params: { slug: string } }) {
  const data = await getData(ENDPOINTS.getService(params.slug));

  return (
    <Container
      mt="100px"
      maxW={{
        base: "container.xl",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      }}
      pb="60px"
    >
      <Tabs position="relative" variant="unstyled" defaultIndex={0}>
        <TabList flexWrap="nowrap" overflowX="auto" >
          {data.types.map((item: any, index: number) => (
            <Tab
              key={index}
              transition="all 0.3s ease"
              _selected={{
                color: "heading",
                fontWeight: "700",
                borderColor: "heading",
              }}
              fontWeight="600"
              fontSize="14px"
              p={{ base: "8px 10px", lg: "16px 20px" }}
              w="240px"
              borderBottom="1px solid transparent"
              flexShrink={0}
            >
              {item.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt={{ base: "50px", lg: "95px" }}>
          {data.types.map((item: any, index: number) => (
            <TabPanel key={index} maxW="889px" mx="auto" color="paragraph">
              <ServiceContent services={item.services} title={item.title} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
}



async function GetFormImages() {
  "use server";
  const data = await getData(ENDPOINTS.getFormBackgrounds());

  return <EivaForm bg={data.directions_background || "/form-bg.jpeg"} />;
}
