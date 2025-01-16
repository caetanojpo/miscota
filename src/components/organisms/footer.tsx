"use client";

import { Flex } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/atoms/toaster";
import Image from "next/image";
import React from "react";
import FooterList, { FooterListItems } from "../atoms/footer/footerList";
import { usePathname } from "next/navigation";

const copyEmail = (description: string) => {
  navigator.clipboard.writeText(description);
  toaster.create({
    title: "Email copiado para área de transferência.",
    placement: "bottom-end",
    duration: 3000,
    type: "info",
  });
};

const navLinks: FooterListItems[] = [
  { description: "Sobre a miscota", link: "sobre" },
  { description: "Onde comprar", link: "comprar" },
  { description: "Perguntas frequentes", link: "perguntas" },
];

const contactLinks: FooterListItems[] = [
  {
    description: "@miscotabr",
    icon: "mdi:instagram",
    link: "https://www.instagram.com/miscotabr/",
  },
  {
    description: "(14) 99795-5048",
    icon: "mynaui:telephone",
    link: "https://api.whatsapp.com/send?phone=5514997955048",
  },
  {
    description: "miscotabr@gmail.com",
    icon: "ic:outline-email",
    link: "/",
  },
  {
    description: "Antônio Almeida Leite, 469 - Ourinhos",
    icon: "teenyicons:pin-outline",
    link: "https://maps.app.goo.gl/RCMupSxmEAJcgzfcA",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <Flex
        w="100vw"
        h="48vh"
        bg="light"
        backgroundImage="url('/bg-footer.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justify="center"
        align="center"
      >
        <Flex
          w={{ base: "70%", md: "50%", xl: "100%" }}
          maxW={{ xl: "550px", "2xl": "590px" }}
          h={"100%"}
          position={"relative"}
          zIndex={30}
        >
          <Image
            width={"100"}
            height={"100"}
            alt="RA Automóveis Logo"
            src={"/bg-footer.png"}
            style={{ position: "absolute" }}
          />
        </Flex>
        <Flex w="100%" justify="space-evenly">
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
      <Toaster />
    </>
  );
}
