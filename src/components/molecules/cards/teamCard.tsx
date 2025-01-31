"use client"

import ImageContainer from "@/components/atoms/images/imageContainer";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TeamCardProps {
  nameImage: string;
  teamMemberImage: string;
  principalText: string;
  complementText: string;
  flexOrder?: string;
}

export default function TeamCard({
  nameImage,
  teamMemberImage,
  principalText,
  complementText,
  flexOrder = "2",
}: TeamCardProps) {
  return (
    <Flex
      h="100%"
      px={{ base: 2, xl: 40 }}
      gap={10}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex h="100%" order={1}>
        <ImageContainer
          alt={principalText}
          src={teamMemberImage}
          width={350}
          height={350}
          position="relative"
        />
      </Flex>
      <Flex
        h="100%"
        w="100%"
        flexDirection="column"
        order={{ base: 2, xl: flexOrder }}
        gap={4}
        align={{
          base: "center",
          xl: flexOrder == "2" ? "flex-start" : "flex-end",
        }}
      >
        <Flex>
          <ImageContainer
            alt={`${principalText} secondary`}
            src={nameImage}
            width={200}
            height={200}
            position="relative"
          />
        </Flex>
        <Flex
          flexDir="column"
          gap={4}
          color="secondary"
          fontFamily="RemoraSansMedium"
          w="80%"
          textAlign={{
            base: "center",
            xl: flexOrder == "2" ? "left" : "right",
          }}
          fontSize={{ md: "1.2rem", lg: "1.4rem" }}
        >
          <Text>{principalText}</Text>
          <Text>{complementText}</Text>
          <Box
            style={{
              width: "100%",
              border: "2px solid #DDDD",
            }}
            marginTop={{base:'10px', md:'100px'}}
            display={{ base: nameImage === "/fer.png" ? "none" : "initial", xl:'initial' }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
