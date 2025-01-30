"use client"

import ImageContainer from "@/components/atoms/images/imageContainer";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ContactIntroduction() {
  return (
    <Flex
      h={{ base: "100%", xl: "100%" }}
      mb={{ xl: "20" }}
      display="column"
      align="center"
      pt="10"
    >
      <Flex w="100%" h="100%" align="center" justify="center" mb="8">
        <ImageContainer
          alt="Sobre a Miscota"
          src="/page-intro-about.png"
          width={500}
          height={500}
          position="relative"
        />
      </Flex>

      <Flex
        h={{ base: "100%", xl: "100%" }}
        w="100%"
        direction="column"
        alignItems="center"
        pb={{ base: "12", xl: "0" }}
        px={{ base: "10", xl: "40" }}
        textAlign="center"
        color="secondary"
        fontFamily="RemoraSansMedium"
        gap={{ base: "6", xl: "8" }}
        fontSize={{ base: "1rem", xl: "1.2rem" }}
        position="relative"
      >
        <ImageContainer
          alt=""
          src="/diagonal-bowl.png"
          width={100}
          height={100}
          top="-15%"
          left="8%"
          display={{ base: "none", xl: "initial" }}
        />
        <ImageContainer
          alt=""
          src="/diagonal-ball.png"
          width={60}
          height={60}
          top="-15%"
          right="12%"
          display={{ base: "none", xl: "initial" }}
        />
        <Text>
          Mas o que é a <span style={{ color: "#F7C657" }}>Miscota</span>?
        </Text>
        <Text>
          É a alimentação natural mais saudável, mais nutritiva e melhor
          elaborada que seu filho ou filha de 4 patas já comeu! É fruto de muito
          carinho, dedicação, atenção e trabalho das tias Carol e Julia e do Tio
          Fer para que seu pet tenha acesso a comida de verdade, sem
          processamento.
        </Text>
        <Text>
          Quer saber mais? Siga o nosso perfil, deixe a sua curtida e em breve
          apresentaremos muito mais novidades!
        </Text>
        <Text>
          É natural, é de verdade, é{" "}
          <span style={{ color: "#F7C657" }}>Miscota</span>!
        </Text>
        <ImageContainer
          alt=""
          src="/diagonal-ball.png"
          width={60}
          height={60}
          bottom="-15%"
          left="20%"
          display={{ base: "none", xl: "initial" }}
        />
        <ImageContainer
          alt=""
          src="/diagonal-bone.png"
          width={70}
          height={70}
          bottom="-15%"
          right="20%"
          display={{ base: "none", xl: "initial" }}
        />
      </Flex>
    </Flex>
  );
}
