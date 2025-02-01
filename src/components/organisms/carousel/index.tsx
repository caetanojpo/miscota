"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const slides = [
  { text: "Vida saudável para seu pet", rotate: "0deg" },
  { text: "Vida saudável para seu pet", rotate: "-50deg" },
];

export default function Carousel() {
  return (
    <Box
      overflow="hidden"
      overflowX="hidden"
      width="100%"
      position="relative"
      bgColor="#f7c657"
      transform="rotate(-2deg)"
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
            <Text fontSize="30px" mr="3px">
              {slide.text}
            </Text>
            <Image
              alt=""
              src="/paw-white-stroke.png"
              w={16}
              h={16}
              ml="3px"
              transform={`rotate(${slide.rotate})`}
            />
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
