"use client";

import { MiscotaListItems } from "@/utils/interfaces/listProps";
import { List, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface HeaderListProps {
  dataList: MiscotaListItems[];
}

export default function HeaderList({ dataList }: HeaderListProps) {
  const pathname = usePathname();
  const isXlOrLarger = useBreakpointValue({ base: false, xl: true });

  const filteredList = isXlOrLarger
    ? dataList.filter((item) => item.description !== "Home")
    : dataList;

  return (
    <List.Root
      display="flex"
      w="100%"
      align="center"
      h="100%"
      paddingY="16"
      flexDirection={{ base: "column", xl: "row" }}
    >
      {filteredList.map((link, index) => (
        <List.Item
          display="flex"
          w="100%"
          h="100%"
          justifyContent="center"
          key={index}
          borderRight={
            link.hasRightBorder ? { base: "", xl: "3px solid #FFFF" } : ""
          }
          fontSize={{
            base: "1.8rem",
            md: "3rem",
            xl: "1.4rem",
          }}
          color={{ base: "light", xl: "secondary" }}
          fontFamily="RemoraSansDemi"
          _hover={{ color: "light" }}
          transition="all 0.3s ease-in-out"
        >
          <Link href={link.link} target="self">
            <Flex w="100%" align="center">
              <Text
                borderBottom={
                  pathname == link.link
                    ? { base: "", xl: "4px solid #ffff" }
                    : ""
                }
                color={pathname == link.link ? { base: "primary", xl: "secondary" } : ""}
              >
                {link.description}
              </Text>
            </Flex>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
}
