"use client";

import { MiscotaListItems } from "@/utils/interfaces/listProps";
import { List, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderListProps {
  dataList: MiscotaListItems[];
}

export default function HeaderList({ dataList }: HeaderListProps) {
  const pathname = usePathname();
  return (
    <List.Root
      display="flex"
      w="100%"
      flexDirection="row"
      align="center"
      h="100%"
      paddingY="16"
    >
      {dataList.map((link, index) => (
        <List.Item
          display="flex"
          w="100%"
          justifyContent="center"
          key={index}
          borderRight={link.hasRightBorder ? "3px solid #FFFF" : ""}
          fontSize={{
            base: "1rem",
            md: "1.2rem",
            lg: "1.3rem",
            xl: "1.4rem",
          }}
          color="secondary"
          fontFamily="RemoraSansDemi"
          _hover={{ color: "light" }}
          transition="all 0.3s ease-in-out"
        >
          <Link href={link.link} target="self">
            <Flex w="100%" align="center">
              <Text
                borderBottom={pathname == link.link ? "4px solid #ffff" : ""}
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
