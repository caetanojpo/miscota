"use client";

import CustomIcon from "@/components/atoms/icons/customIcon";
import ImageContainer from "@/components/atoms/images/imageContainer";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function MapSection() {
  const mapLinks = [
    {
      description: "Antônio Almeida Leite, 469 - Ourinhos",
      icon: "tabler:map-pin-filled",
      link: "https://maps.app.goo.gl/RCMupSxmEAJcgzfcA",
    },
    {
      description: "(14) 99795-5048",
      icon: "mynaui:telephone-solid",
      link: "https://api.whatsapp.com/send?phone=5514997955048",
    },
  ];

  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      minH={"105dvh"}
      mt={{ base: 10, xl: 0 }}
    >
      <Flex
        w="100%"
        h="100%"
        position={"relative"}
        borderBottom="10px solid"
        borderColor="primary"
      >
        <ImageContainer
          alt="Onde Estamos"
          src="/where.png"
          boxWidth={"100%"}
          boxHeight={"100%"}
          boxMinHeight={"20dvh"}
          top="0"
          left="50%"
          transform="translate(-50%, -70%)"
          zIndex={10}
          objectFit="contain"
        />
      </Flex>
      <Flex
        w="100%"
        h="100%"
        minH={{ base: "100dvh", xl: "92dvh" }}
        position={"relative"}
        justify="center"
        mb={{ base: 10, xl: 0 }}
      >
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/gB5v3vbt4LMboS288"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <ImageContainer
            alt=""
            src="/map.png"
            boxWidth={"100%"}
            boxHeight={"100%"}
            objectFit="cover"
            sizes="200dvw"
          />
        </Link>
        <Flex
          w="100%"
          h={{ base: "20dvh", xl: "12dvh" }}
          position={"absolute"}
          bg="primary"
          align={{ xl: "center" }}
          p={{ base: 2, xl: 0 }}
          justifyContent={{ base: "space-evenly" }}
          fontSize={{ md: "1.2rem", lg: "1.4rem" }}
          bottom="-2"
          flexDirection={{ base: "column", xl: "row" }}
        >
          {mapLinks.map((link, index) => (
            <Link href={link.link} target="_blank" key={index}>
              <Flex
                w="100%"
                align="center"
                gap="5px"
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: "#893733",
                }}
              >
                <CustomIcon icon={link.icon} color="#FFFF" />
                <Text color={"secondary"} fontFamily="RemoraSansMedium">
                  {link.description}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
