"use client";
import { TextDecoration } from "@/components/atoms/textDecoration";
import CardContainer from "@/components/organisms/cardContainer";
import CardContainerCookie from "@/components/organisms/cardContainerCookie";
import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export default function Products() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bgColor="#f5f2e9" flexDir="column">
      <Flex position="relative">
        <Image
          alt=""
          src="/bone.png"
          display={{ base: "none", xl: "initial" }}
          width={isMobile ? "64.5px" : "129px"}
          transform={
            isMobile
              ? "translate(100px, 90px) rotate(-15deg)"
              : "translate(200px, 20px) rotate(-15deg)"
          }
          height={isMobile ? "38.5px" : "77px"}
          zIndex={999}
        />
        <TextDecoration
          text="Nossos"
          position="absolute"
          maxW="380px"
          top={isMobile ? "0px" : "-100px"}
          left={isMobile ? "" : "-500px"}
          textAlign="center"
          textStrokeColor2="#f5f2e9"
          fontSize={isMobile ? "40px" : "80px"}
        />
        <TextDecoration
          text="Produtos"
          position="absolute"
          transform={isMobile ? "rotate(0deg)" : "rotate(-5deg)"}
          maxW="500px"
          top={isMobile ? "30px" : "-50px"}
          left={isMobile ? "" : "-400px"}
          textAlign="center"
          textStrokeColor1="#f7c657"
          textStrokeColor2="#f5f2e9"
          fontSize={isMobile ? "40px" : "80px"}
        />
      </Flex>
      <Flex
        w="100%"
        justify="center"
        align="center"
        mt={isMobile ? "100px" : "200px"}
        mb={isMobile ? "100px" : "200px"}
        flexDir="column"
        position="relative"
      >
        <Image
          alt=""
          src="/paw.png"
          display={{ base: "none", xl: "initial" }}
          w={isMobile ? "50px" : "100px"}
          position="absolute"
          left={isMobile ? "80%" : "75%"}
          top={isMobile ? "170px" : "100px"}
          transform="rotate(20deg)"
        />
        <Image
          alt=""
          src="/bone.png"
          display={{ base: "none", xl: "initial" }}
          w={isMobile ? "80px" : "160px"}
          top={isMobile ? "180px" : "400px"}
          left={isMobile ? "13%" : "26%"}
          position="absolute"
          transform="rotate(20deg)"
        />
        <Text
          color="#893733"
          maxW="70%"
          fontSize={isMobile ? "15px" : "30px"}
          textAlign="center"
          fontWeight="bold"
        >
          Você ja ouviu aquela frase que diz que nós somos aquilo que comemos?
          Com os nossos pets são a mesma coisa , a alimentação saudável é
          essencial para a longevidade e qualidade de vida dos nossos bichinhos!
        </Text>
        <Text
          color="#893733"
          maxW="70%"
          fontSize={isMobile ? "15px" : "30px"}
          textAlign="center"
          mt="100px"
          fontWeight="bold"
        >
          A maior missão da Miscota é trazer para todos de forma prática e
          acessivel uma forma de levar o alimento mais puro e fresco para o seu
          pet, trazendo não só a nutrição mas tambem saciedade e alegria para
          ele. Confira abaixo os nossos produtinhos.
        </Text>
      </Flex>
      <Flex
        borderTop="4px solid #f7c657"
        w="100%"
        h={isMobile ? "" : "900px"}
        mb="70px"
        position="relative"
        flexDir={isMobile ? "column" : "row"}
      >
        <TextDecoration
          text="Alimentação"
          position="absolute"
          maxW="900px"
          top={isMobile ? "-40px" : "-80px"}
          textAlign="center"
          textStrokeColor1="#893733"
          textStrokeColor2="#f5f2e9"
          fontSize={isMobile ? "35px" : "70px"}
        />
        <TextDecoration
          text="Natural"
          position="absolute"
          maxW="500px"
          top={isMobile ? "-2.5px" : "-5px"}
          left={isMobile ? "50px" : "100px"}
          textAlign="center"
          textStrokeColor1="#f7c757"
          textStrokeColor2="#f5f2e9"
          fontSize={isMobile ? "35px" : "70px"}
        />
        <Image
          alt=""
          src="/pote.png"
          width="160px"
          display={{ base: "none", xl: "initial" }}
          h="100px"
          filter="drop-shadow(0px 0px 13px black)"
          position="absolute"
          left="700px"
          top="10px"
        />
        <Flex
          w="100%"
          mt={isMobile ? "80px" : ""}
          flexDir={isMobile ? "column" : "row"}
        >
          <CardContainer />
        </Flex>
      </Flex>
      <Flex
        borderTop="4px solid #f7c657"
        w="100%"
        h={isMobile ? "" : "900px"}
        mb="70px"
        position="relative"
        flexDir={isMobile ? "column" : "row"}
      >
        <TextDecoration
          text="Biscoitos"
          position="absolute"
          maxW="500px"
          top={isMobile ? "-45px" : "-90px"}
          textAlign="center"
          textStrokeColor1="#893733"
          textStrokeColor2="#f5f2e9"
          fontSize={isMobile ? "35px" : "70px"}
        />
        <TextDecoration
          text="Pet"
          position="absolute"
          maxW="500px"
          top={isMobile ? "-2.5px" : "-5px"}
          left={isMobile ? "50px" : "100px"}
          textAlign="center"
          textStrokeColor1="#f7c757"
          textStrokeColor2="#f5f2e9"
          fontSize={isMobile ? "35px" : "70px"}
        />
        <Image
          alt=""
          src="/bone.png"
          display={{ base: "none", xl: "initial" }}
          width="165px"
          h="100px"
          transform="rotate(9deg)"
          position="absolute"
          left="780px"
          top="10px"
        />
        <Flex
          w="100%"
          mt={isMobile ? "80px" : "50px"}
          flexDir={isMobile ? "column" : "row"}
        >
          <CardContainerCookie />
        </Flex>
      </Flex>
    </Flex>
  );
}
