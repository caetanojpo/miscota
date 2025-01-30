"use client"

import PageIntroduction from "@/components/molecules/section/pageIntroduction";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import ImageContainer from "@/components/atoms/images/imageContainer";
import Link from "next/link";

export default function Confectionery() {
  return (
    <Flex bg="light" h="100%" w="100%" position="relative" direction="column">
      <PageIntroduction />
      <Flex
        direction="column"
        w="100%"
        h="100%"
        minHeight="100dvh"
        justifyContent="center"
        align="center"
        gap={{ base: "10", xl: "14" }}
        mb={{ base: 20, xl: 20 }}
      >
        <Box position="relative" px={{ base: "10", xl: "0" }}>
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-paw.png"
              width={66}
              height={66}
              left="-8"
              top="-5"
            />
          </Box>
          <NextImage
            alt={"alt"}
            src={"/confectionery-1.png"}
            style={{
              width: "100%",
            }}
            width={500}
            height={500}
          />
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-bone.png"
              width={100}
              height={100}
              left="-12"
              bottom="-5"
            />
          </Box>
        </Box>
        <Box position="relative" px={{ base: "10", xl: "0" }}>
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-ball.png"
              width={65}
              height={65}
              right="-10"
              top="0"
            />
          </Box>
          <NextImage
            alt={"alt"}
            src={"/confectionery-2.png"}
            style={{
              width: "100%",
            }}
            width={500}
            height={500}
          />
        </Box>
        <Box position="relative" px={{ base: "10", xl: "0" }}>
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-bowl.png"
              width={100}
              height={100}
              left="-10"
              top="-5"
            />
          </Box>
          <NextImage
            alt={"alt"}
            src={"/confectionery-3.png"}
            style={{
              width: "100%",
            }}
            width={500}
            height={500}
          />
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-paw.png"
              width={70}
              height={70}
              right="-16"
              bottom="-5"
            />
          </Box>
        </Box>
        <Box position="relative" px={{ base: "10", xl: "0" }}>
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-ball.png"
              width={66}
              height={66}
              top="30%"
              left="-10"
            />
          </Box>
          <NextImage
            alt={"alt"}
            src={"/confectionery-4.png"}
            style={{
              width: "100%",
            }}
            width={500}
            height={500}
          />
          <Box display={{ base: "none", xl: "initial" }}>
            <ImageContainer
              alt=""
              src="/diagonal-bone.png"
              width={100}
              height={100}
              right="-16"
              bottom="-5"
            />
          </Box>
        </Box>

        <Box
          position="relative"
          marginY={{ base: "10", xl: "14" }}
          px={{ base: "10", xl: "0" }}
        >
          <Link href="" target={"_blank"}>
            <NextImage
              alt={"alt"}
              src={"/party.png"}
              style={{
                width: "100%",
              }}
              width={500}
              height={500}
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
