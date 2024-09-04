"use client";

import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import EivaInput from "./EivaInput";
import { postApplication } from "@/lib/postApplication";
import SuccessModal from "@/components/ui/SuccesModal";
import { useParams, useSearchParams } from "next/navigation";

const FormCover = ({
  bgImage,
  doctor,
  packageName,
}: {
  bgImage: string;
  doctor?: string;
  packageName?: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "+996",
    email: "",
    text: "",
    docktor: "",
    packege: "",
  });

  const [isApplication, setIsApplication] = useState(true);
  const searchParams = useSearchParams();
  const params = useParams();
  const name = Array.isArray(params.name) ? params.name[0] : params.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formValues.name) {
      toast({
        title: "Заполните поле Имя",
        status: "error",
        position: "bottom",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    if (formValues.phone.length < 12) {
      toast({
        title: "Заполните поле Телефон",
        position: "bottom",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const body = {
      ...formValues,
    };

    if (searchParams.get("package")) {
      body.packege = searchParams.get("package") || "";
    }
    if (name) {
      body.docktor = name || " ";
    } else if (searchParams.get("doctor")) {
      body.docktor = searchParams.get("doctor") || "";
    }

    const response = await postApplication(body);

    if (response === 201) {
      onOpen();
      setFormValues({
        name: "",
        phone: "+996",
        email: "",
        text: "",
        docktor: "",
        packege: "",
      });
    }
  };
  return (
    <Container
      maxW={{
        base: "container.xl",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      }}
      px={{ base: "16px", lg: "16px" }}
      mt={"60px"}
      pb={"60px"}
      id="form"
    >
      <Flex
        flexDir={"column"}
        gap={"30px"}
        position={"relative"}
        borderRadius={"30px"}
        width={"100%"}
        h={"100%"}
        p={{ base: "86px 16px", lg: "30px 60px",xl:'40px 80px','2xl':'45px 90px' }}
        overflow={"hidden"}
        maxH={isApplication ? "597px" : "689px"}
        transition={"all 0.3s ease"}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: -1,
        }}
      >
        <Image
          src={bgImage}
          fill
          sizes="100%"
          alt="form-bg"
          style={{ objectFit: "cover", zIndex: -2 }}
        />
        <Flex flexDir={"column"} gap={"26px"} maxW={"475px"}>
          <Heading
            variant={"title"}
            fontSize={{ base: "20px", lg: "30px" }}
            color={"#fff"}
            textAlign={"start"}
          >
            {isApplication
              ? "Запишитесь на консультацию"
              : "Задайте Ваш вопрос"}
          </Heading>
          <Text
            fontFamily={"mulish"}
            fontWeight={"500"}
            fontSize={"16px"}
            color="#fff"
            maxH={isApplication ? "48px" : "0px"}
            overflow={"hidden"}
            transition={"all .3s ease"}
          >
            Проконсультируем Вас по телефону или запишем на прием к лучшим
            специалистам
          </Text>
        </Flex>

        <Flex
          flexDir={"column"}
          gap={"18px"}
          maxW={"466px"}
          maxH={isApplication ? "122px" : "262px"}
          transition={"all .3s ease"}
        >
          <EivaInput
            placeholder="Ваше имя"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <EivaInput
            placeholder="+996 ___ __-__-__"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {!isApplication && (
            <EivaInput
              placeholder="Ваш email для ответа"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          )}
          {!isApplication && (
            <EivaInput
              placeholder="Ваш вопрос"
              name="text"
              value={formValues.text}
              onChange={handleChange}
            />
          )}
        </Flex>

        <Flex
          w={"100%"}
          justifyContent={{ base: "center", lg: "flex-start" }}
          gap={"18px"}
          flexDir={"column"}
          alignItems={"center"}
          maxW={"466px"}
        >
          <Button
            variant={"brandPrimary"}
            onClick={handleSubmit}
            maxW={"466px"}
          >
            {!isApplication ? "Задать вопрос" : "Записаться на прием"}
          </Button>

          <Text
            fontFamily={"mulish"}
            fontWeight={"600"}
            fontSize={"18px"}
            textAlign={"center"}
            color={"rgba(235, 235, 235, 1)"}
          >
            или
          </Text>

          <Text
            fontFamily={"mulish"}
            fontWeight={"800"}
            fontSize={"20px"}
            textAlign={"center"}
            color={"rgba(235, 235, 235, 1)"}
            onClick={() => setIsApplication(!isApplication)}
            cursor={"pointer"}
          >
            {isApplication ? "Задать вопрос" : "Записаться на прием"}
          </Text>
        </Flex>
      </Flex>
      <SuccessModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default FormCover;
