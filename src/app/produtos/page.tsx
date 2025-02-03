"use client";
import { TextDecoration } from "@/components/atoms/textDecoration";
import CardContainer from "@/components/organisms/cardContainer";
import CardContainerCookie from "@/components/organisms/cardContainerCookie";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Products() {
  return (
    <Flex bgColor="#f5f2e9" flexDir="column">
      <Flex position="relative">
        <Image
          alt=""
          src="/bone.png"
          width="129px"
          transform="translate(200px, 20px) rotate(-15deg)"
          height="77px"
          zIndex={999}
        />
        <TextDecoration
          text="Nossos"
          position="absolute"
          maxW="350px"
          top="-100px"
          left="-500px"
          textAlign="center"
          textStrokeColor2="#f5f2e9"
          fontSize="80px"
        />
        <TextDecoration
          text="Produtos"
          position="absolute"
          transform="rotate(-5deg)"
          maxW="500px"
          top="-50px"
          left="-400px"
          textAlign="center"
          textStrokeColor1="#f7c657"
          textStrokeColor2="#f5f2e9"
          fontSize="80px"
        />
      </Flex>
      <Flex
        w="100%"
        justify="center"
        align="center"
        mt="200px"
        mb="200px"
        flexDir="column"
        position="relative"
      >
        <Image
          alt=""
          src="/paw.png"
          w="100px"
          position="absolute"
          left="75%"
          top="100px"
          transform="rotate(20deg)"
        />
        <Image
          alt=""
          src="/bone.png"
          w="160px"
          top="400px"
          left="26%"
          position="absolute"
          transform="rotate(20deg)"
        />
        <Text
          color="#893733"
          maxW="70%"
          fontSize="30px"
          textAlign="center"
          fontWeight="bold"
        >
          Você ja ouviu aquela frase que diz que nós somos aquilo que comemos?
          Com os nossos pets são a mesma coisa, a alimentação saudável é
          essencial para a longevidade e qualidade de vida dos nossos bichinhos!
        </Text>
        <Text
          color="#893733"
          maxW="70%"
          fontSize="30px"
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
        h="900px"
        mb="70px"
        position="relative"
      >
        <TextDecoration
          text="Alimentação"
          position="absolute"
          maxW="500px"
          top="-20"
          textAlign="center"
          textStrokeColor1="#893733"
          textStrokeColor2="#f5f2e9"
          fontSize="70px"
        />
        <TextDecoration
          text="Natural"
          position="absolute"
          maxW="500px"
          top="-5"
          left="100px"
          textAlign="center"
          textStrokeColor1="#f7c757"
          textStrokeColor2="#f5f2e9"
          fontSize="70px"
        />
        <Image
          alt=""
          src="/pote.png"
          width="160px"
          h="100px"
          filter="drop-shadow(0px 0px 13px black)"
          position="absolute"
          left="700px"
          top="10px"
        />
        <Flex w="100%">
          <CardContainer />
        </Flex>
      </Flex>
      <Flex
        borderTop="4px solid #f7c657"
        w="100%"
        h="900px"
        mb="70px"
        position="relative"
      >
        <TextDecoration
          text="Biscoitos"
          position="absolute"
          maxW="500px"
          top="-90px"
          textAlign="center"
          textStrokeColor1="#893733"
          textStrokeColor2="#f5f2e9"
          fontSize="70px"
        />
        <TextDecoration
          text="Pet"
          position="absolute"
          maxW="500px"
          top="-5"
          left="100px"
          textAlign="center"
          textStrokeColor1="#f7c757"
          textStrokeColor2="#f5f2e9"
          fontSize="70px"
        />
        <Image
          alt=""
          src="/bone.png"
          width="165px"
          h="100px"
          transform="rotate(9deg)"
          position="absolute"
          left="780px"
          top="10px"
        />
        <Flex w="100%">
          <CardContainerCookie />
        </Flex>
      </Flex>
    </Flex>
  );
}
