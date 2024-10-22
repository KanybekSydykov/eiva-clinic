import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

const ServiceTextItem = ({ service }: { service: any }) => (
    <Flex className='service-item-right' flexDir={'column'} gap={'24px'}>
      <Box fontWeight="600" color="paragraph" whiteSpace="pre-wrap" dangerouslySetInnerHTML={{__html: service.text}}>
      </Box>
  
      <AspectRatio
        ratio={{ base: 358 / 170, lg: 858 / 425 }}
        width={{ base: "358px", lg: "858px" }}
        flexShrink={0}
        borderRadius={{ base: "30px", lg: "50px" }}
        overflow="hidden"
      >
        <Image
          src={service.image || "/about-img.png"}
          alt="image"
          fill
          sizes="@media (max-width: 992px) 358px 170px, @media (min-width: 992px) 858px 425px"
        />
      </AspectRatio>
    </Flex>
  );

  export default ServiceTextItem
  