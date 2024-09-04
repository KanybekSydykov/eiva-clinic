"use client";

import React from "react";
import {
  Box,
  Flex,
  Button,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { getMediaType } from "@/lib/defineFileType";

interface ModalSliderProps {
  images: {
    image: string;
    name: string;
    plaseholder: string;
    id: number;
    page: number;
  }[];
  isOpen: boolean;
  onClose: () => void;
  index?: number;
}

const ModalSlider = ({
  images,
  index = 0,
  isOpen,
  onClose,
}: ModalSliderProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        width={"90vw"}
        h={{ base: "fit-content", lg: "90vh" }}
        overflow={"hidden"}
        maxW={{ base: "100%", lg: "900px" }}
        maxH={{ base: "100%", lg: "900px" }}
      >
        <ModalCloseButton
          zIndex={2}
          top={{ base: "0px", lg: "16px" }}
          right={{ base: "0px", lg: "16px" }}
        />
        <ModalBody
          padding={{ base: "32px 16px", lg: "30px" }}
          h={"fit-content"}
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Box
            as={Splide}
            aria-label="My Favorite Images"
            hasTrack={false}
            options={{
              type: "fade",
              pagination: false,
              mediaQuery: "min",
              start: index,
              keyboard: "global",
            }}
            w={{ base: "100%", lg: "750px" }}
            h={{ base: "100%", lg: "750px" }}
            pb={{ base: "32px", lg: "0px" }}
          >
            <Box as={SplideTrack} w={"100%"} h={"100%"}>
              {images.map((image, index) => {

                const mediaType = getMediaType(image.image);

                return (
                  <SplideSlide key={index}>
                    <AspectRatio
                      pos={"relative"}
                      width={{ base: "100%", lg: "750px" }}
                      ratio={1}
                    >
                      {mediaType === "video" ? (
                        <video
                          src={image.image}
                          autoPlay={true}
                          controls
                          muted
                          style={{
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      ) : (
                        <Image
                          src={image.image ? image.image : "/about-img.png"}
                          alt="slider-img"
                          fill
                          sizes="@(max-width: 992px) 350px,750px"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </AspectRatio>
                  </SplideSlide>
                );
              })}
            </Box>
            <Flex
              mt={{ base: "32px", lg: "20px" }}
              className="splide__arrows"
              position={"relative"}
              w={"100%"}
              h={{ base: "32px", lg: "0px" }}
              zIndex={3}
            >
              <Button
                className="splide__arrow splide__arrow--prev"
                w={{ base: "32px", lg: "48px" }}
                h={{ base: "32px", lg: "48px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"50%"}
                position={"absolute"}
                p={0}
                opacity={"1"}
                top={0}
                right={"unset"}
                left={{ base: "calc(100% - 75px)", lg: "16px" }}
                minW={"unset"}
                border={"2px solid rgba(15, 95, 98, 0.5)"}
                transform={"rotate(180deg)"}
                bg={"#fff"}
                _disabled={{
                  opacity: "0.7 !important",
                  display: "flex",
                  cursor: "not-allowed",
                }}
              >
                <ArrowBackIcon color={"rgba(15, 95, 98, 1)"} boxSize={"14px"} />
              </Button>

              <Button
                className="splide__arrow splide__arrow--next"
                w={{ base: "32px", lg: "48px" }}
                h={{ base: "32px", lg: "48px" }}
                display={"flex"}
                justifyContent={"center"}
                p={0}
                alignItems={"center"}
                position={"absolute"}
                borderRadius={"50%"}
                opacity={"1"}
                top={0}
                zIndex={10}
                minW={"unset"}
                right={{ base: "0", lg: "16px" }}
                left={"unset"}
                border={"2px solid rgba(15, 95, 98, 0.5)"}
                transform={"none"}
                bg={"#fff"}
                _disabled={{
                  opacity: "0.7 !important",
                  display: "flex",
                  cursor: "not-allowed",
                }}
              >
                <ArrowForwardIcon
                  color={"rgba(15, 95, 98, 1)"}
                  boxSize={"14px"}
                />
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSlider;
