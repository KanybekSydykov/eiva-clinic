"use client";
import {
  AspectRatio,
  Container,
  Grid,
  GridItem,
  Heading,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalSlider from "./ModalSlider";
import { getMediaType } from "@/lib/defineFileType";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery/1.png", alt: "Image 1", imageCover: "/image-cover.png" },
];

function ImageGrid({ data }: any) {
  const [isDesktop] = useMediaQuery("(min-width: 992px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger children with a delay of 0.2 seconds
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        damping: 8,
        bounce: 0.25,
      },
    },
  };

  function handleModalSlider(index: number) {
    setCurrentSlide(index);
    onOpen();
  }

  useEffect(() => {}, [isDesktop]);

  return (
    <Container
    maxW={{
      base: "container.xl",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    }}
      pb={"60px"}
      mt={{ base: "40px", lg: "60px" }}
      px={{ base: "16px", lg: "0" }}
    >
      <Heading variant={"title"} fontSize={{ base: "20px", lg: "32px" }}>
        {data.gallery_title}
      </Heading>
      <Grid
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        variants={gridVariants}
        mt={"50px"}
        viewport={{ once: true, amount: 0.5 }}
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }} // 3 columns on mobile, 6 columns on large screens
        gap={4} // Adjust the gap between grid items
      >
        {data?.gallery?.map((image: any, index: number) => {
          const isLargeImage =
            index === 0 || (isDesktop ? index === 2 : index % 6 === 0);
          const mediaType = getMediaType(image.image);
          return (
            <GridItem
              as={motion.div}
              variants={gridItemVariants}
              key={index}
              colSpan={isLargeImage ? 2 : 1} // Span all columns on mobile, 2 columns on large screens
              rowSpan={isLargeImage ? 2 : 1} // Span multiple rows for large images
              borderRadius={"20px"}
              overflow={"hidden"}
              gap={"18px"}
              onClick={() => handleModalSlider(index)}
              cursor={"pointer"}
            >
              <AspectRatio ratio={1} width={"100%"} position={"relative"}>
                {mediaType === "video" ? (
                  <>
                    <video
                      src={image.image}
                      autoPlay={false}
                      onClick={(e) => {
                        e.preventDefault(); // Prevents default click behavior
                      }}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <Image
                      src={"/icons/play-icon.png"}
                      alt="Play Icon"
                      width={60}
                      height={40}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "64px",
                        height: "45px",
                        transform: "translate(-50%,-50%)",
                      }}
                    />
                  </>
                ) : (
                  <Image
                    src={image.plaseholder ? image.plaseholder : image.image}
                    alt={image.name}
                    fill
                    sizes="100% 100%"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </AspectRatio>
            </GridItem>
          );
        })}
      </Grid>

      <ModalSlider
        images={data?.gallery}
        isOpen={isOpen}
        onClose={onClose}
        index={currentSlide}
      />
    </Container>
  );
}

export default ImageGrid;
