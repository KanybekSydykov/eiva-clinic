'use client';

import { AspectRatio, Flex, Grid, Text, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import React,{useState} from 'react'
import ModalSlider from '../ui/ModalSlider';

const DoctorCertificates = ({data}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [currentSlide, setCurrentSlide] = useState(0);

// interface Certificate {
//         name: string;
//         image: string;
// }

// function splitIntoPairs(arr: Certificate[]): Certificate[][] {
//         return arr.reduce(
//           (result: Certificate[][], item: Certificate, index: number) => {
//             if (index % 2 === 0) {
//               result.push([item]);
//             } else {
//               result[result.length - 1].push(item);
//             }
//             return result;
//           },
//           []
//         );
// }
    
// const certificates = splitIntoPairs(data.certificates);

function handleModalSlider(index: number) {
  setCurrentSlide(index);
  onOpen();
}
    
  return (
    <>
            <Flex flexDir={"column"} gap={{ base: "16px", lg: "40px" }}>
              <Flex flexDir={"row"} gap={"20px"}>
                <AspectRatio
                  pos={"relative"}
                  w={"40px"}
                  h={"40px"}
                  ratio={1}
                  flexShrink={0}
                >
                  <Image
                    src={"/icons/doc-cert-icon.svg"}
                    alt="attribute icon"
                    fill
                    sizes="40px "
                  />
                </AspectRatio>
                <Flex flexDir={"column"} gap={"6px"}>
                  <Text
                    fontWeight={"500"}
                    fontSize={"16px"}
                    color={"rgba(101, 101, 101, 1)"}
                  >
                    Дипломы и сертификаты
                  </Text>
                </Flex>
              </Flex>
              <Flex
                flexDir={{ base: "column", lg: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={"16px"}
              >
                <Grid
                gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                width={'100%'}
                gap={"16px"}

                >

                {data.certificates.map((item: any, index: number) => (
                  <AspectRatio
                    key={index}
                    w={{ base: "100%", xl: "100%" }}
                    h={'auto'}
                    maxH={"447px"}
                    overflow={"hidden"}
                    // minH={'300px'}
                    onClick={() => handleModalSlider(index)}
                  >
                    <Image
                      src={item.image}
                      alt={"certificate"}
                      width={300}
                      height={300}
                      sizes={"@(max-width: 992px) 312px,398px"}
                      style={{
                        objectFit: "contain",
                        height: "auto",
                        maxHeight: "447px",
                      }}
                      onClick={onOpen}
                    />
                  </AspectRatio>
                ))}
                </Grid>

              </Flex>
            </Flex>
                <ModalSlider images={data.certificates} index={currentSlide} contain={true} isOpen={isOpen} onClose={onClose} title='Дипломы и сертификаты'  />
    </>

  )
}

export default DoctorCertificates