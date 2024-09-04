"use client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Flex,
  AspectRatio,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import ModalSlider from "./ModalSlider";
import { useState } from "react";
import { motion } from "framer-motion";

// Motion versions of Chakra UI components
const MotionTab = motion(Tab);
const MotionFlex = motion(Flex);

const PartnerTabs = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<any>(data.partners[0].images);

  function handleModalSlider(index: number) {
    setCurrentSlide(index);
    onOpen();
  }
  const containerVariants={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Stagger children with a delay of 0.2 seconds
      },
    },
  }

  const tabVariants = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.3,
        damping: 8,
        bounce: 0.25,
      },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 8,
        bounce: 0.1,
      },
    },
  };

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
    >
      <Heading variant={"title"} fontSize={{ base: "20px", lg: "32px" }}>
        {data.partners_title}
      </Heading>
      <Tabs variant={"unstyled"} mt={"50px"}>
        <TabList
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          gap={"10px"}
          viewport={{ amount: 0.9, once: true }}
          justifyContent={{ base: "space-between", lg: "center" }}
        >
          {data?.partners?.map((partner: any, index: number) => (
            <MotionTab
              key={partner.id}
              variants={tabVariants}
              _selected={{ border: "0.57px solid rgba(102, 51, 51, 1)" }}
              borderRadius={"30px"}
              bg={"#f9f9f9"}
              width={"31%"}
              aspectRatio={1}
              pos={"relative"}
              maxW={"200px"}
              maxH={"200px"}
              p={4}
              onClick={()=>setImages(partner.images)}
            >
              <AspectRatio
                ratio={1}
                position={"relative"}
                width={"100%"}
                h={"100%"}
              >
                <Image
                  src={partner?.image ? partner?.image : "/icons/mvshm-tab.svg"}
                  fill
                  alt="logo"
                  sizes="(max-width: 768px) 120px, (max-width: 1200px) 190px,190px"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </AspectRatio>
            </MotionTab>
          ))}
        </TabList>
        <TabPanels mt={{ base: "20px", lg: "40px" }}>
          {data?.partners?.map((partner: any, index: number) => (
            <TabPanel p={0} key={partner.id}>
              <Flex as={motion.div}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.25,
                    },
                  },
                }}
                viewport={{once:true}}
                flexDir={"row"}
                flexWrap={"nowrap"}
                overflowX={"auto"}
                gap={"10px"}
                width={"100%"}
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {partner.images.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    variants={panelVariants}
                  >
                    <AspectRatio
                      onClick={() => handleModalSlider(index)}
                      ratio={208 / 278}
                      w={{ base: "208px", lg: "366px" }}
                      borderRadius={{ base: "30px", lg: "50px" }}
                      overflow={"hidden"}
                      flexShrink={0}
                    >
                      <Image
                        src={item.image}
                        fill
                        alt="gallery img"
                        sizes="(max-width: 1024px) 208px,278px, (min-width: 1024px) 366px,490px"
                      />
                    </AspectRatio>
                  </motion.div>
                ))}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {/* Uncomment and ensure ModalSlider component is used correctly */}
      <ModalSlider
        images={images}
        isOpen={isOpen}
        onClose={onClose}
        index={currentSlide}
      />
    </Container>
  );
};

export default PartnerTabs;
