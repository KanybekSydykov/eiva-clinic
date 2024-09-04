import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Ornament = ({
  top = "unset",
  left = "unset",
  bottom = "unset",
  right = "unset",
  width = "390px",
  height = "228px",
}) => {
  return (
    <AspectRatio
      position={"absolute"}
      top={top ? top : "0px"}
      left={left ? left : "0px"}
      width={width}
      height={height}
      ratio={{ base: 390 / 228, lg: 734 / 430 }}
    >
      <Image
        src={"/hero-bg.png"}
        alt="hero-bg"
        fill
        sizes={`${width} ${height}`}
      />
    </AspectRatio>
  );
};

export default Ornament;
