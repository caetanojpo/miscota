import { Box, BoxProps } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";

export interface ImageContainerProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  position?: string;
  sizes?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
  display?: BoxProps["display"];
}

export default function ImageContainer({
  alt,
  src,
  width,
  height,
  position = "absolute",
  sizes = "",
  top = "",
  left = "",
  right = "",
  bottom = "",
  transform = "",
  display = "block",
}: ImageContainerProps) {
  return (
    <Box
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      transform={transform}
      display={display}
    >
      <NextImage
        alt={alt}
        src={src}
        sizes={sizes}
        style={{
          width: "100%",
        }}
        width={width}
        height={height}
      />
    </Box>
  );
}
