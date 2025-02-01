"use client";

import { Flex } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/atoms/toaster/toaster";
import React from "react";
import FooterList from "../../atoms/lists/footerList";
import { usePathname } from "next/navigation";
import ImageContainer from "../../atoms/images/imageContainer";
import ExtraFooterHome from "./extraFooterHome";
import { MiscotaListItems } from "@/utils/interfaces/listProps";

const copyEmail = (description: string) => {
  navigator.clipboard.writeText(description);
  toaster.create({
    title: "Email copiado para área de transferência.",
    placement: "bottom-end",
    duration: 3000,
    type: "info",
  });
};

const navLinks: MiscotaListItems[] = [
  { description: "Sobre a miscota", link: "/contato" },
  { description: "Onde comprar", link: "/produtos" },
  { description: "Perguntas frequentes", link: "/contato" },
];

const contactLinks: MiscotaListItems[] = [
  {
    description: "@miscotabr",
    icon: "mdi:instagram",
    link: "https://www.instagram.com/miscotabr/",
  },
  {
    description: "(14) 99795-5048",
    icon: "mynaui:telephone-solid",
    link: "https://api.whatsapp.com/send?phone=5514997955048",
  },
  {
    description: "miscotabr@gmail.com",
    icon: "ic:email",
    link: "/",
  },
  {
    description: "Antônio Almeida Leite, 469 - Ourinhos",
    icon: "tabler:map-pin-filled",
    link: "https://maps.app.goo.gl/RCMupSxmEAJcgzfcA",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      {/* {pathname === "/" ? <ExtraFooterHome /> : ""} */}
      <Flex
        h={{ base: "70dvh", lg: "60dvh", xl: "50dvh" }}
        bg="light"
        align="flex-end"
        justify="flex-end"
        position="relative"
      >
        <Flex
          w="100%"
          h="100%"
          bg="primary"
          borderTop={"6px solid"}
          borderBottom="30px solid"
          borderColor={"secondary"}
          align={{ base: "space-evenly", lg: "center" }}
          justify="center"
          padding="40px"
        >
          <ImageContainer
            alt="Logo Miscota"
            src="/logo-border.png"
            height={500}
            width={500}
            sizes="(max-width: 768px) 50dvw, (max-width: 1280px) 30dvw, 23dvw"
            top="0"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          <Flex
            w="100%"
            justify="space-evenly"
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "40px", lg: "0px" }}
          >
            <FooterList
              title="Dúvidas"
              dataList={navLinks}
              handleClick={copyEmail}
              hasIcons={false}
            />
            <FooterList
              title="Contatos"
              dataList={contactLinks}
              handleClick={copyEmail}
              hasIcons={true}
            />
          </Flex>
        </Flex>
      </Flex>
      <Toaster />
    </>
  );
}
