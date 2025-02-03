"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";
import ImageContainer from "../../atoms/images/imageContainer";
import HomeForms from "../../molecules/forms/homeForms";

export default function ExtraFooterHome() {
  return (
    <Flex
      h={{ base: "75vh", xl: "50vh" }}
      bg="light"
      position="relative"
      align="center"
      justify="center"
      gap={{ base: "40px", xl: "100px" }}
      padding={{ base: "40px", xl: "0px" }}
    >
      {/* <ImageContainer
        alt="Ganhe 10% off na sua primeira compra"
        src="/promotion.png"
        width={500}
        height={500}
        top="0"
        left="0"
        transform="translate(20%, 40%)"
        sizes="(max-width: 767px) 70dvw, (max-width: 1023px) 50dvw, (max-width: 1279px) 40dvw, 30dvw"
      /> */}
      <Flex height="100%" w={{ base: "100%", xl: "60%" }}>
        <HomeForms />
      </Flex>
      <ImageContainer
        alt="Silvinho, um dos mascotes da Miscota."
        src="/silvinho.png"
        width={130}
        height={100}
        sizes="13dvw"
        bottom="-10"
        display={{ base: "none", xl: "flex" }}
        position="relative"
      />
    </Flex>
  );
}
