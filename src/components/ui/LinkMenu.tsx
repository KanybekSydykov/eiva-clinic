"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuItemStyles = {
  bg: "transparent",
  transition: "all .3s ease",
  _hover: {
    bg: "#9ECACB",
  },
};

const LinkMenu = ({ categories }: { categories: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Menu isOpen={isOpen} closeOnBlur>
        <MenuButton
          _hover={{
            textDecoration: "underline",
          }}
          onClick={() => router.push(`/services/${categories[0].slug}`)}
        >
          <Text
            color={"navbarColor"}
            fontFamily={"mulish"}
            fontWeight={"600"}
            fontSize={"18px"}
          >
            Направления
          </Text>
        </MenuButton>
        <MenuList bg={"#D2FFCE"} py={0} my={0} overflow={"hidden"}>
          {categories.map((category: any) => (
            <MenuItem {...MenuItemStyles} key={category.name}>
              <Link href={`/services/${category.slug}`}>{category.name}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LinkMenu;
