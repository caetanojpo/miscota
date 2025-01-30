"use client";
import ImageContainer from "@/components/atoms/images/imageContainer";
import { Flex } from "@chakra-ui/react";
import React from "react";
import ContactIntroduction from "@/components/molecules/section/contactIntroduction";
import TeamCard from "@/components/molecules/cards/teamCard";
import MapSection from "@/components/organisms/contact/mapSection";

export default function Contact() {
  return (
    <Flex
      bg="light"
      h="100%"
      w="100%"
      position="relative"
      direction="column"
      gap={{ xl: "20" }}
    >
      <ContactIntroduction />
      <Flex
        direction="column"
        w="100%"
        h="100%"
        minHeight="100dvh"
        align="center"
        gap={{ base: "10", xl: "14" }}
        mb={{ base: 20, md:60, xl: 40 }}
        justify="center"
      >
        <ImageContainer
          alt="Conheça nosso time"
          src="/team.png"
          width={500}
          height={500}
          position="relative"
        />
        <Flex
          w="100%"
          flexDirection="column"
          gap={8}
          justify="center"
          px={{ base: 2, md: 20, xl: 40 }}
        >
          <Flex
            position="relative"
            flexDirection={{ base: "column", xl: "row" }}
          >
            <TeamCard
              nameImage="/carol.png"
              teamMemberImage="/carol-miscota.png"
              principalText="A médica veterinária da Miscota e responsável por cuidar da sua 
            alimentação diária. Vou calcular e selecionar os melhores alimentos 
            para garantir uma refeição saudável, balanceada e deliciosa."
              complementText="Também vou fazer bolos e biscoitos deliciosos para você!"
            />
            <ImageContainer
              alt=""
              src="/diagonal-bone.png"
              width={50}
              height={50}
              bottom="0"
              right="15%"
              display={{ base: "none", xl: "initial" }}
            />
          </Flex>
          <Flex
            position="relative"
            flexDirection={{ base: "column", xl: "row" }}
          >
            <TeamCard
              nameImage="/julia.png"
              teamMemberImage="/julia-miscota.png"
              principalText="Serei responsável por preparar a sua alimentação com muito 
            cuidado, amor e dedicação. Sou apaixonada por festa pet."
              complementText="Conte comigo para muita diversão!"
              flexOrder="0"
            />
            <ImageContainer
              alt=""
              src="/diagonal-ball.png"
              width={50}
              height={50}
              bottom="20%"
              left="30%"
              display={{ base: "none", xl: "initial" }}
            />
            <ImageContainer
              alt=""
              src="/diagonal-paw.png"
              width={50}
              height={50}
              bottom="0"
              right="0%"
              display={{ base: "none", xl: "initial" }}
            />
          </Flex>
          <Flex
            position="relative"
            flexDirection={{ base: "column", xl: "row" }}
          >
            <ImageContainer
              alt=""
              src="/diagonal-bowl.png"
              width={70}
              height={70}
              top="0"
              right="40%"
              display={{ base: "none", xl: "initial" }}
            />
            <TeamCard
              nameImage="/fer.png"
              teamMemberImage="/fer-miscota.png"
              principalText="Sou o administrador da Miscota e responsável por relações e 
            representações comerciais"
              complementText="Te ajudarei nas compras e estarei aqui para sanar todas as 
            suas dúvidas! "
            />
            <ImageContainer
              alt=""
              src="/diagonal-paw.png"
              width={50}
              height={50}
              bottom="10%"
              left="40%"
              display={{ base: "none", xl: "initial" }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" pos="relative">
        <MapSection />
      </Flex>
    </Flex>
  );
}
