import CustomIcon from "@/components/atoms/icons/customIcon";
import { Flex } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import HeaderList, {
  HeaderListProps,
} from "@/components/atoms/lists/headerList";

export default function HeaderMobile({ dataList }: HeaderListProps) {
  return (
    <>
      <DrawerRoot size={{ base: "xs", md: "sm", lg: "lg" }}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Flex
            h={{ base: "3.2rem", md: "5rem" }}
            justify={{ base: "center" }}
            marginTop={{ base: "20px", xl: "0px" }}
          >
            <Flex display={{ base: "flex", md: "none" }}>
              <CustomIcon
                color="#893733"
                icon="solar:hamburger-menu-bold"
                width={"3.2rem"}
                height={"3.2rem"}
              />
            </Flex>
            <Flex display={{ base: "none", md: "flex" }}>
              <CustomIcon
                color="#893733"
                icon="solar:hamburger-menu-bold"
                width={"5rem"}
                height={"5rem"}
              />
            </Flex>
          </Flex>
        </DrawerTrigger>
        <DrawerContent bg="secondary">
          <DrawerBody>
            <Flex h="100%">
              <HeaderList dataList={dataList} />
            </Flex>
          </DrawerBody>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </>
  );
}
