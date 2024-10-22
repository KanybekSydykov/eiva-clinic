import { getMediaType } from "@/lib/defineFileType";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const ServiceItem = ({
  service,
  reverse,
}: {
  service: any;
  reverse: boolean;
}) => (
  <Flex
  className="service-item"
    flexDir={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
    gap={{ base: "26px", lg: "80px" }}
    alignItems="center"
    justifyContent="center"
  >
{  service.image && <div>
    {getMediaType(service.image) === "image" ? (
      <AspectRatio ratio={358 / 525} width="358px" flexShrink={0}>
        <Image
          src={service.image || "/about-img.png"}
          alt="image"
          fill
          sizes="358px 525px"
          style={{ objectFit: "cover", borderRadius: "45px" }}
        />
      </AspectRatio>
    ) : (
      <video
        width="358px"
        height="525px"
        controls
        style={{ borderRadius: "45px" }}
        src={service.image}
      ></video>
    )}
    </div>}


    <Box h="fit-content" className="text-editor-content" dangerouslySetInnerHTML={{ __html: service.text }}> 
    </Box>
  </Flex>
);

export default ServiceItem;
