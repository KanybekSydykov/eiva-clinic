import { Flex } from "@chakra-ui/react";
import ServiceItem from "./ServiceItem";
import ServiceTextItem from "./ServiceTextItem";

const ServiceList = ({ services }: { services: any[] }) => {
    const leftAlignedServices = services[0].items.filter(
      (service: any) => service.image_duration === "left"
    );
    const rightAlignedServices = services[0].items.filter(
      (service: any) => service.image_duration === "right"
    );
  
    return (
      <>
        <Flex flexDir="column" gap="70px">
          {leftAlignedServices.map((service: any, index: number) => (
            <ServiceItem
              key={index}
              service={service}
              reverse={index % 2 === 1}
            />
          ))}
        </Flex>
  
        <Flex flexDir="column" gap={{ base: "30px", lg: "50px" }}>
          {rightAlignedServices.map((service: any, index: number) => (
            <ServiceTextItem key={index} service={service} />
          ))}
        </Flex>
      </>
    );
  };

  export default ServiceList