"use client"

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
    <List.Root display="flex" flexDirection="column" gap="8px">
      <Text color="secondary" fontFamily="RemoraSansBold" fontSize="20px">
        {title}
      </Text>
      {dataList.map((link, index) => (
        <List.Item
          display="flex"
          w="100%"
          key={index}
          h="1.4rem"
          fontSize="14px"
          color="secondary"
          fontFamily="RemoraSansDemi"
          _hover={{ textDecoration: "underline" }}
          transition="all 0.3s ease-in-out"
        >
          <Link href={link.link} target={link.link === "/" ? "" : "_blank"}>
            <Flex
              w="100%"
              align="center"
              gap="10px"
              onClick={() => {
                if (link.link === "/") {
                  handleClick(link.description);
                }
              }}
            >
              {hasIcons && link.icon && (
                <CustomIcon icon={link.icon} color="#CB3438" />
              )}
              <Text>{link.description}</Text>
            </Flex>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
}
