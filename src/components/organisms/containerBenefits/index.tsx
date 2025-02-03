import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export const ContainerBenefits = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex w="100%" justify="center" align="center" position="relative">
      <Flex
        borderRadius="20px"
        border="5px solid #f7c757"
        flexDir={isMobile ? "column" : "row"}
        w="90%"
        py="40px"
      >
        <Flex
          flexDir="column"
          w={isMobile ? "100%" : "33%"}
          mt={isMobile ? "40px" : ""}
          justify="center"
          align="center"
          borderRight={isMobile ? "" : "2px solid #d8d2bc"}
        >
          <Image alt="" src="/nose-tongue.png" w="100px" h="100px" />
          <Text
            fontSize="30px"
            color="#f7c657"
            fontWeight="800"
            WebkitTextStroke="2px #f7c657"
          >
            + Sabor
          </Text>
          <Text
            color="#893733"
            maxW="250px"
            textAlign="center"
            fontWeight="bold"
          >
            Ingredientes naturais e frescos aumentam a palatibilidade
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          w={isMobile ? "100%" : "33%"}
          mt={isMobile ? "40px" : ""}
          justify="start"
          align="center"
          borderRight={isMobile ? "" : "2px solid #d8d2bc"}
        >
          <Image alt="" src="/hidratation-icon.png" w="80px" h="110px" />
          <Text
            fontSize="30px"
            color="#f7c657"
            fontWeight="800"
            WebkitTextStroke="2px #f7c657"
          >
            + Umidade
          </Text>
          <Text
            color="#893733"
            maxW="250px"
            textAlign="center"
            fontWeight="bold"
          >
            Seu pet mais hidratado
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          w={isMobile ? "100%" : "33%"}
          justify="start"
          align="center"
          mt={isMobile ? "40px" : ""}
        >
          <Image alt="" src="/carrot-icon.png" w="110px" h="100px" />
          <Text
            fontSize="30px"
            color="#f7c657"
            fontWeight="800"
            WebkitTextStroke="2px #f7c657"
          >
            + Nutrientes
          </Text>
          <Text
            color="#893733"
            maxW="250px"
            textAlign="center"
            fontWeight="bold"
          >
            Maior aproveitamento dos nutrientes dos alimentos
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
