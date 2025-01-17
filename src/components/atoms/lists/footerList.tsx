"use client";

import { List, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import CustomIcon from "../icons/customIcon";

export interface FooterListItems {
  description: string;
  link: string;
  icon?: string;
}

interface FooterListProps {
  title: string;
  dataList: FooterListItems[];
  handleClick: (description: string) => void;
  hasIcons: boolean;
}

export default function footerList({
  dataList,
  handleClick,
  title,
  hasIcons = false,
}: FooterListProps) {
  return (
    <List.Root
      display="flex"
      flexDirection="column"
      gap={{ base: "10px", lg: "20px" }}
    >
      <Text
        color="secondary"
        fontFamily="RemoraSansBold"
        fontSize={{ base: "1rem", md: "1.6rem", lg: "1.8rem" }}
      >
        {title}
      </Text>
      {dataList.map((link, index) => (
        <List.Item
          display="flex"
          w="100%"
          key={index}
          fontSize={{ base: "0.9rem", md: "1.2rem", lg: "1.3rem", xl:"1.2rem" }}
          color="secondary"
          fontFamily="RemoraSansMedium"
          _hover={{ textDecoration: "underline" }}
          transition="all 0.3s ease-in-out"
        >
          <Link href={link.link} target={link.link === "/" ? "" : "_blank"}>
            <Flex
              w="100%"
              align="center"
              gap="5px"
              onClick={() => {
                if (link.link === "/") {
                  handleClick(link.description);
                }
              }}
            >
              {hasIcons && link.icon && (
                <CustomIcon icon={link.icon} color="#FFFF" />
              )}
              <Text>{link.description}</Text>
            </Flex>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
}
