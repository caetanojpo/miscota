"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";
import ScaleIntroduction from "@/components/molecules/section/scaleIntroduction";
import ScaleForms from "@/components/molecules/forms/scaleForms";

export default function Scale() {
  return (
    <Flex
      bg="light"
      h="100%"
      w="100%"
      position="relative"
      direction="column"
      gap={{ xl: "10" }}
    >
      <ScaleIntroduction />
      <Flex
        direction="column"
        w="100%"
        h="100%"
        align="center"
        gap={{ base: "10", xl: "14" }}
        mb={{ base: 20, md: 20, xl: 40 }}
        justify="center"
      >
        <ScaleForms />
      </Flex>
    </Flex>
  );
}
