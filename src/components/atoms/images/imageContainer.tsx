"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";

interface BaseImageContainerProps {
  alt: string;
  src: string;
  position?: BoxProps["position"];
  top?: BoxProps["top"];
  left?: BoxProps["left"];
  right?: BoxProps["right"];
  bottom?: BoxProps["bottom"];
  transform?: BoxProps["transform"];
  display?: BoxProps["display"];
  zIndex?: BoxProps["zIndex"];
  sizes?: NextImageProps["sizes"];
  objectFit?: React.CSSProperties["objectFit"];
  boxMinWidth?: BoxProps["minWidth"];
  boxMinHeight?: BoxProps["minHeight"];
  boxMaxWidth?: BoxProps["maxWidth"];
  boxMaxHeight?: BoxProps["maxHeight"];
}

interface WithBoxDimensions extends BaseImageContainerProps {
  boxWidth: BoxProps["width"];
  boxHeight: BoxProps["height"];
  width?: never;
  height?: never;
  layout?: never;
}

interface WithImageDimensions extends BaseImageContainerProps {
  width: NextImageProps["width"];
  height: NextImageProps["height"];
  boxWidth?: never;
  boxHeight?: never;
  layout?: NextImageProps["layout"];
}

type ImageContainerProps = WithBoxDimensions | WithImageDimensions;

export default function ImageContainer({
  alt,
  src,
  boxWidth,
  boxHeight,
  boxMinWidth,
  boxMinHeight,
  boxMaxWidth,
  boxMaxHeight,
  width,
  height,
  layout,
  position = "absolute",
  sizes = "",
  top = "",
  left = "",
  right = "",
  bottom = "",
  transform = "",
  display = "block",
  zIndex = 0,
  objectFit = "cover",
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
      zIndex={zIndex}
      width={boxWidth}
      height={boxHeight}
      minWidth={boxMinWidth}
      minHeight={boxMinHeight}
      maxHeight={boxMaxHeight}
      maxWidth={boxMaxWidth}
    >
      <NextImage
        alt={alt}
        src={src}
        width={width}
        height={height}
        layout={layout}
        fill={!!boxWidth && !!boxHeight}
        sizes={sizes}
        style={{
          width: "100%",
          height: "100%",
          objectFit: objectFit,
        }}
        quality={100}
      />
    </Box>
  );
}
