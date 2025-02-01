import { Flex, Image, Text } from "@chakra-ui/react";

export const ContainerBenefits = () => {
  return (
    <Flex w="100%" justify="center" align="center" position="relative">
      <Flex
        borderRadius="20px"
        border="5px solid #f7c757"
        flexDir="row"
        w="90%"
        py="40px"
      >
        <Flex
          flexDir="column"
          w="33%"
          justify="center"
          align="center"
          borderRight="2px solid #d8d2bc"
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
          w="33%"
          justify="start"
          align="center"
          borderRight="2px solid #d8d2bc"
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
        <Flex flexDir="column" w="33%" justify="start" align="center">
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
