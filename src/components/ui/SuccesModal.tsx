import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          display={"flex"}
          flexDir={'column'}
          justifyContent={"center"}
          alignItems={"center"}
          p={"72px  60px"}
        >
          <Image
            alt="logo"
            src={"/icons/form-logo.png"}
            width={74}
            height={100}
            style={{
              flexShrink: 0,
            }}
          />
          <Text
            color={"rgba(11, 72, 73, 1)"}
            fontSize={"32px"}
            fontWeight={"900"}
            mt={'16px'}
            textAlign={"center"}
          >
            Спасибо!
          </Text>
          <Text
            fontWeight={"400"}
            fontSize={"16px"}
            color={"rgba(12, 91, 92, 1)"}
            textAlign={"center"}
            mt={'20px'}
          >
            Мы скоро с Вами свяжемся
          </Text>

          <Button variant={"brandPrimary"} mt={"26px"} onClick={onClose}>
            Вернуться назад
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
