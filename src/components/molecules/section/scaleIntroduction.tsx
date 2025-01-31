"use client";

import ImageContainer from "@/components/atoms/images/imageContainer";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ScaleIntroduction() {
  return (
    <Flex
      h={{ base: "100%", xl: "100%" }}
      mb={{ xl: "20" }}
      display="column"
      align="center"
      p={{base:2, xl: "20"}}
      position="relative"
    >
      <Flex w="100%" h="100%" mb="8" minH={{base:"10dvh"}}>
        <ImageContainer
          alt="Balança Pet"
          src="/page-intro-scale.png"
          width={500}
          height={500}
          top="-10dvh"
        />
      </Flex>

      <Flex
        h={{ base: "100%", xl: "100%" }}
        w="100%"
        direction="column"
        alignItems="center"
        pb={{ base: "12", xl: "0" }}
        px={{ base: "10", xl: "60" }}
        textAlign="center"
        color="secondary"
        fontFamily="RemoraSansMedium"
        gap={{ base: "6", xl: "8" }}
        fontSize={{ md: "1.4rem", lg: "1.4rem" }}
        position="relative"
      >
        <ImageContainer
          alt=""
          src="/diagonal-bone.png"
          width={80}
          height={80}
          top="-20%"
          right="27%"
          display={{ base: "none", xl: "initial" }}
        />
        <Text>
          Olá!! Bem vindo a balança virtual da{" "}
          <span style={{ color: "#F7C657" }}>Miscota!</span>
        </Text>
        <Text>
          Aqui você poderá descobrir a quantidade ideal de alimentação natural
          que seu Pet pode ingerir durante o dia.
        </Text>
        <Text>
          É bem simples! Insira as informações solicitadas no espaço abaixo, e
          clique em pesar, e depois o valor em gramas vai sair no visor da
          balança.
        </Text>
        <ImageContainer
          alt=""
          src="/diagonal-paw.png"
          width={80}
          height={80}
          bottom="-50%"
          left="10%"
          display={{ base: "none", xl: "initial" }}
        />
      </Flex>
    </Flex>
  );
}
