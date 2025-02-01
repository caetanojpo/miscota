"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Carousel({ typeSlide }: { typeSlide: number }) {
  const slides =
    typeSlide === 1
      ? [
          { text: "Vida saudável para seu pet", rotate: "0deg" },
          { text: "Vida saudável para seu pet", rotate: "-50deg" },
        ]
      : typeSlide === 2
        ? [
            { text: "Ingredientes selecionados", rotate: "25deg" },
            { text: "Ingredientes selecionados", rotate: "-25deg" },
          ]
        : [
            { text: "Os biscoitos mais crocantes", rotate: "8deg" },
            { text: "Os biscoitos mais crocantes", rotate: "-10deg" },
          ];

  return (
    <Box
      overflow="hidden"
      overflowX="hidden"
      width="100%"
      position="relative"
      bgColor="#f7c657"
      transform={
        typeSlide === 1
          ? "rotate(-2deg)"
          : typeSlide === 2
            ? "rotate(2deg)"
            : "rotate(-2deg)"
      }
      py="20px"
    >
      <Flex
        as="div"
        width="200%"
        style={{
          animation: "slideAnimation 20s linear infinite",
        }}
      >
        {[...slides, ...slides, ...slides].map((slide, index) => (
          <Flex
            key={index}
            color="#893733"
            justifyContent="center"
            alignItems="center"
            minWidth="18%"
            p={0.5}
            flexDirection="row"
          >
            <Text fontSize="30px" mr="3px" fontWeight="bold">
              {slide.text}
            </Text>
            {typeSlide === 1 ? (
              <Image
                alt=""
                src="/paw-white-stroke.png"
                w={16}
                h={16}
                ml="3px"
                transform={`rotate(${slide.rotate})`}
              />
            ) : typeSlide === 2 ? (
              <Image
                alt=""
                src="/bowl.png"
                w={78}
                h={39}
                ml="10px"
                transform={`rotate(${slide.rotate})`}
                filter="drop-shadow(1px 1px white) drop-shadow(1px -1px white) drop-shadow(-1px 1px white) drop-shadow(-1px -1px white)"
              />
            ) : (
              <Image
                alt=""
                src="/bone.png"
                w={20}
                h={49}
                ml="30px"
                transform={`rotate(${slide.rotate})`}
                filter="drop-shadow(0px 0px 1px #000000)"
              />
            )}
          </Flex>
        ))}
      </Flex>

      <style jsx global>{`
        @keyframes slideAnimation {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
