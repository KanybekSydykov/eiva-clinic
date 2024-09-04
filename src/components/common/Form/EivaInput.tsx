import { Input } from "@chakra-ui/react";
import React from "react";

interface InputProps {
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EivaInput = ({
  placeholder,
  value,
  onChange,
  name,
  ...props
}: InputProps) => {
  return (
    <Input
      placeholder={placeholder ? placeholder : ""}
      value={value}
      name={name}
      onChange={onChange}
      w={"100%"}
      h={'auto'}
      p={"13px 18px"}
      color={"rgba(6, 51, 52, 1)"}
      borderRadius={"60px"}
      border={"1px solid rgba(208, 213, 221, 1)"}
      background={"rgba(255, 255, 255, 0.6)"}
      box-shadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
      _hover={{
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        borderColor: "#fff",
        transform: "scale3d(1.01, 1.01, 1.02)",
      }}
      _focus={{
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        borderColor: "#fff",
        transform: "scale3d(1.02, 1.01, 1.02)",
        background: "rgba(255, 255, 255, 1)",
      }}
      _placeholder={{
        color: "rgba(6, 51, 52, 1)",
      }}
      transition={"all 0.3s ease"}
      {...props}
    />
  );
};

export default EivaInput;
