import { Flex, Text } from "@chakra-ui/react";
import ServiceList from "./ServiceList";

const ServiceContent = ({ services, title }: { services: any[]; title: string }) => {
    if (!services.length) return null;
  
    return (
      <Flex flexDir="column" gap={{ base: "70px", lg: "80px" }}>
        <Text fontWeight="600" fontSize="16px" textAlign="center">
          {services[0]?.title || title}
        </Text>
  
        <ServiceList services={services} />
      </Flex>
    );
  };
  
  
  export default ServiceContent
  