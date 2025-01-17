"use client";

import ImageContainer from "@/components/atoms/images/imageContainer";
import HeaderList from "@/components/atoms/lists/headerList";
import HeaderMobile from "@/components/molecules/navigation/headerMobile";
import { MiscotaListItems } from "@/utils/interfaces/listProps";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks: MiscotaListItems[] = [
  { description: "Home", link: "/" },
  { description: "Produtos", link: "/produtos", hasRightBorder: true },
  { description: "Balança pet", link: "/balanca", hasRightBorder: true },
  { description: "Confeitaria", link: "/confeitaria", hasRightBorder: true },
  { description: "Contato", link: "/contato" },
];

const pathsMap: { [key: string]: string } = {
  "/": "/bg-header-home.png",
  "/produtos": "/bg-header-products.png",
  "/balanca": "/bg-header-scale.png",
  "/confeitaria": "/bg-header-confectionery.png",
  "/contato": "/bg-header-contact.png",
};

export default function Header() {
  const pathname = usePathname();
  return (
    <Flex
      h={{ base: "68dvh", lg: "90dvh", xl:"78dvh" }}
      maxH={{base:"500px", lg:"1150px"}}
      bg="primary"
      flexDirection="column"
      bgImage={{ base: "url(/bg-header-home.png)", xl: "none" }}
      backgroundPosition={{base:"-60px 60px", lg:"-150px 130px"}}
      backgroundSize="280%"
      backgroundRepeat="no-repeat"
    >
      <ImageContainer
        alt=""
        src={pathsMap[pathname]}
        width={100}
        height={100}
        sizes="150dvw"
        left="-4"
        display={{ base: "none", xl: "block" }}
      />
      <Flex w="100%" h="20dvh" zIndex={10}>
        <Flex
          w={{ xl: "40%" }}
          h="100%"
          cursor="pointer"
          zIndex={20}
          display={{ base: "none", xl: "flex" }}
        >
          <Link
            href={"/"}
            target="self"
            style={{ width: "100%", height: "100%" }}
          />
        </Flex>
        <Flex
          w={{ base: "100%", xl: "60%" }}
          h="100%"
          justifyContent="flex-end"
        >
          <Flex w="100%" display={{ base: "none", xl: "flex" }}>
            <HeaderList dataList={navLinks} />
          </Flex>
          <Flex
            w="100%"
            justify={{ base: "center", xl: "start" }}
            display={{ base: "flex", xl: "none" }}
          >
            <HeaderMobile dataList={navLinks}/>
          </Flex>
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}
