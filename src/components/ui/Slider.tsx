"use client";

import React from "react";
import { Box, Flex, Button, AspectRatio } from "@chakra-ui/react";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { SlideImageProps } from "@/types/SlideImage";
import { getMediaType } from "@/lib/defineFileType";

interface SliderProps {
  perPage?: number;
  ratio?: number;
  maxHeight?: string;
  lg?: number;
  xl?: number;
  xxl?: number;
  images?: SlideImageProps[];
}

const Slider = ({
  perPage = 1,
  ratio = 1,
  maxHeight = "unset",
  lg = 1,
  xl = 1,
  images = [],
  xxl = 1,
}: SliderProps) => {
  return (
    <Box
      as={Splide}
      aria-label="My Favorite Images"
      hasTrack={false}
      className={"group"}
      options={{
        type: "slide",
        pagination: false,
        mediaQuery: "min",
        perPage: perPage,
        perMove: 1,
        gap: "10px",
        breakpoints: {
          992: {
            perPage: lg,
          },
          1200: {
            perPage: xl,
          },
          1440: {
            perPage: xxl,
          },
        },
      }}
      w={"100%"}
      h={"100%"}
    >
      <Box as={SplideTrack} w={"100%"} h={"100%"}>
        {images?.map((image) => {
          const mediaType = getMediaType(image.image);

          return (
            <SplideSlide key={image.image}>
              <AspectRatio
                pos={"relative"}
                width={"100%"}
                ratio={ratio}
                maxH={maxHeight}
              >
                {mediaType === "image" ? (
                  <Image
                    src={image.image ? image.image : "/form-bg.jpeg"}
                    alt="slider-img"
                    fill
                    sizes="@(max-width: 992px) 100vw, 390px"
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                ) : mediaType === "video" ? (
                  <video
                    src={image.image}
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Box>Unsupported media type</Box>
                )}
              </AspectRatio>
            </SplideSlide>
          );
        })}
      </Box>
      <Flex
        className="splide__arrows"
        position={"absolute"}
        top={{ base: "102%", lg: "calc(50% - 12px)" }}
        left={0}
        w={"100%"}
        h={{ base: "32px", lg: "48px" }}
        zIndex={3}
        opacity={{base:"1",lg:'0'}}
        _groupHover={{ opacity: "1" }}
        transition={"all .3s ease"}
        
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
          left={{ base: "calc(100% - 75px)", lg: "0px" }}
          minW={"unset"}
          border={"2px solid rgba(15, 95, 98, 0.5)"}
          transform={"rotate(180deg)"}
          bg={"#fff"}
          _disabled={{
            opacity: "0.7 !important",
            display: "flex",
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
          }}
        >
          <ArrowForwardIcon color={"rgba(15, 95, 98, 1)"} boxSize={"14px"} />
        </Button>
      </Flex>
    </Box>
  );
};

export default Slider;
