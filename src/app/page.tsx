import { TextDecoration } from "@/components/atoms/textDecoration";
import { Avaliation } from "@/components/organisms/avaliation";
import Carousel from "@/components/organisms/carousel";
import { ContainerBenefits } from "@/components/organisms/containerBenefits";
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
        <Carousel typeSlide={1} />
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
      <Flex
        pt="50px"
        pb="20px"
        mt="70px"
        borderTop="5px solid #f7c657"
        borderBottom="5px solid #f7c657"
        position="relative"
      >
        <Avaliation />
      </Flex>
      <Flex mt="70px" mb="100px">
        <Carousel typeSlide={2} />
      </Flex>
      <ContainerBenefits />
      <Flex mt="50px" px="90px" align="flex-end">
        <Flex position="relative">
          <Flex>
            <TextDecoration
              text="Alimentação balanceada"
              transform="rotate(-5deg)"
              position="absolute"
              maxW="700px"
              top="200px"
              textAlign="center"
              textStrokeColor2="#f5f2e9"
              fontSize="45px"
            />
            <TextDecoration
              text="+"
              position="absolute"
              transform="rotate(-5deg)"
              maxW="600px"
              top="276px"
              left="-260px"
              textAlign="center"
              textStrokeColor2="#f5f2e9"
              textStrokeColor1="#f7c657"
              fontSize="45px"
            />
            <TextDecoration
              text="Qualidade de vida"
              transform="rotate(-5deg)"
              position="absolute"
              maxW="600px"
              top="250px"
              textAlign="center"
              textStrokeColor2="#f5f2e9"
              fontSize="45px"
            />
            <TextDecoration
              text="+"
              position="absolute"
              transform="rotate(-5deg)"
              maxW="700px"
              top="317px"
              left="-190px"
              textAlign="center"
              textStrokeColor2="#f5f2e9"
              textStrokeColor1="#f7c657"
              fontSize="45px"
            />
            <TextDecoration
              text="Longevidade"
              transform="rotate(-5deg)"
              position="absolute"
              maxW="500px"
              top="300px"
              textAlign="center"
              textStrokeColor2="#f5f2e9"
              fontSize="45px"
            />
            <Image alt="" src="/image-food.png" w="800px" />
          </Flex>
        </Flex>
        <Flex position="relative" flexDir="column">
          <TextDecoration
            text="Alimentação natural"
            transform="rotate(-3deg)"
            position="absolute"
            maxW="300px"
            top="-100px"
            left="18px"
            textAlign="center"
            textStrokeColor2="#f7c657"
            fontSize="32px"
          />
          <Flex
            position="absolute"
            fontSize="20px"
            top="450px"
            left="140px"
            flexDir="column"
          >
            <Text color="#893733" fontWeight="bold" minW="300px">
              Alimentação natural
            </Text>
            <Text color="#f7c657" fontWeight="bold" minW="300px" ml="112px">
              Franguinho
            </Text>
          </Flex>
          <Text
            position="absolute"
            top="510px"
            left="170px"
            color="white"
            fontWeight="bold"
          >
            R$
          </Text>
          <Text
            position="absolute"
            top="510px"
            left="200px"
            color="#893733"
            fontWeight="bold"
          >
            25,00
          </Text>
          <Text
            position="absolute"
            top="530px"
            left="170px"
            color="white"
            fontWeight="bold"
          >
            500g
          </Text>
          <Text
            position="absolute"
            top="510px"
            left="270px"
            color="white"
            fontWeight="bold"
          >
            R$
          </Text>
          <Text
            position="absolute"
            top="510px"
            left="300px"
            color="#893733"
            fontWeight="bold"
          >
            50,00
          </Text>
          <Text
            position="absolute"
            top="530px"
            left="270px"
            color="white"
            fontWeight="bold"
          >
            500g
          </Text>
          <Image alt="" src="/image-container-one.png" h="600px" ml="60px" />
        </Flex>
        <Flex position="relative" flexDir="column">
          <TextDecoration
            text="Biscoitos"
            transform="rotate(4deg)"
            position="absolute"
            maxW="300px"
            top="-70px"
            left="18px"
            textAlign="center"
            textStrokeColor2="#f7c657"
            fontSize="32px"
          />
          <Flex
            position="absolute"
            fontSize="20px"
            top="75px"
            left="80px"
            flexDir="column"
          >
            <Text color="#893733" fontWeight="bold" minW="300px">
              Mix de biscoitinhos
            </Text>
            <Text color="#f7c657" fontWeight="bold" minW="300px">
              Calm dog
            </Text>
          </Flex>
          <Text
            position="absolute"
            top="140px"
            left="80px"
            color="white"
            fontWeight="bold"
          >
            R$
          </Text>
          <Text
            position="absolute"
            top="140px"
            left="108px"
            color="#893733"
            fontWeight="bold"
          >
            25,00
          </Text>
          <Text
            position="absolute"
            top="160px"
            left="80px"
            color="white"
            fontWeight="bold"
          >
            100g
          </Text>
          <Image alt="" src="/container-image-two.png" h="600px" ml="60px" />
        </Flex>
      </Flex>
      <Flex mt="70px">
        <Carousel typeSlide={3} />
      </Flex>
      <Flex
        mt="200px"
        position="relative"
        w="100%"
        align="center"
        justify="center"
      >
        <Image
          alt=""
          src="/here-icon.png"
          width="50px"
          top="-40px"
          position="absolute"
          left="57%"
        />
        <TextDecoration
          text="Saiba onde encontrar"
          position="absolute"
          top="-25px"
          left="420px"
          textAlign="center"
          textStrokeColor2="white"
          fontSize="32px"
        />
        <Image alt="" src="/find-what.png" w="70%" />
      </Flex>
    </Flex>
  );
}
