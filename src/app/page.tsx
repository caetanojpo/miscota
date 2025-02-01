import { TextDecoration } from "@/components/atoms/textDecoration";
import { Avaliation } from "@/components/organisms/avaliation";
import Carousel from "@/components/organisms/carousel";
import { Flex, Image, Text } from "@chakra-ui/react";
export default function Home() {
  return (
    <Flex bgColor="#f5f2e9" flexDir="column" overflow="hidden">
      <Flex flexDir="column" top="-3%" transform="translate(0%, -170%)" w="23%">
        <Flex
          px="10px"
          bgColor="#f7c657"
          justifyContent="center"
          alignItems="center"
          borderTopRightRadius="40px"
          borderBottomRightRadius="40px"
          pb="5px"
        >
          <Text
            maxW="330px"
            fontSize="27px"
            color="#893733"
            fontWeight={"bold"}
          >
            Alimentação Natural e Confeitaria Pet!
          </Text>
          <Image alt="" src="/paw-white.png" width={50} height={50} mx="20px" />
        </Flex>
        <Flex
          px="10px"
          py="5px"
          bgColor="#893733"
          width="60%"
          borderTopRightRadius="40px"
          borderBottomRightRadius="40px"
          top="-3%"
          transform="translate(0%, -25%)"
        >
          <Text fontSize="20px" fontWeight="bold">
            Venha Conhecer
          </Text>
        </Flex>
      </Flex>
      <TextDecoration
        text="Confira nossos produtos"
        transform="rotate(-5deg)"
      />
      <Flex w="100%" justifyContent="space-evenly" mt="40px">
        <Flex flexDir="column" position="relative">
          <Image
            alt=""
            src="/bowl.png"
            w={239}
            h={113}
            position="absolute"
            top="-50px"
            left="-80px"
            transform="rotate(-25deg)"
          />
          <TextDecoration
            transform="rotate(-6deg)"
            text="Alimentação Natural"
            position="absolute"
            maxW="400px"
            textAlign="center"
            left="30px"
            top="-50px"
            lineHeight="1"
            textStrokeColor2="#f7c657"
            fontSize="55px"
          />

          <Image alt="" src="/food-card-natural.png" w={600} h={626} />
        </Flex>
        <Flex flexDir="column" position="relative">
          <Image
            alt=""
            src="/bone.png"
            w={240}
            h={146}
            position="absolute"
            top="-80px"
            right="-85px"
            transform="rotate(25deg)"
          />
          <TextDecoration
            transform="rotate(11deg)"
            text="Biscoitos"
            position="absolute"
            maxW="400px"
            textAlign="center"
            left="-20px"
            top="-40px"
            lineHeight="1"
            textStrokeColor2="#f7c657"
            fontSize="55px"
          />
          <Image alt="" src="/food-card-cookies.png" w={600} h={626} />
        </Flex>
      </Flex>
      <Flex mt="70px">
        <Carousel />
      </Flex>
      <Flex
        flexDir="column"
        mt="150px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex w="60%" position="relative">
          <TextDecoration
            transform="rotate(-5deg)"
            text="Balança Pet"
            position="absolute"
            maxW="500px"
            textAlign="center"
            left="-380px"
            top="-40px"
            textStrokeColor2="white"
            fontSize="55px"
          />
          <Image alt="" src="/image-card-one.png" />
        </Flex>

        <Flex w="60%" position="relative" mt="100px">
          <Flex position="absolute" w="550px" left="52%" top="-40px">
            <TextDecoration
              text="Confeitaria Pet"
              maxW="500px"
              textAlign="center"
              textStrokeColor2="#f5f2e9"
              fontSize="55px"
            />
            <Image
              alt=""
              src="/paw.png"
              w="80px"
              h="70px"
              ml="30px"
              transform="rotate(-13deg)"
            />
          </Flex>
          <Image alt="" src="/image-card-two.png" />
        </Flex>
      </Flex>

      <Avaliation />
    </Flex>
  );
}
