import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import "./style.css";
import { ButtonPayment } from "@/components/molecules/button";

const Card = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <div className="body">
      <div
        className="container"
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "450px",
              width: "350px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-5.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="290px"
            />
            <Image
              alt=""
              src="/gluten-free-blue.png"
              w="60px"
              position="absolute"
              top="2"
              left="10px"
            />
            <Image
              alt=""
              src="/100-natural-blue.png"
              w="60px"
              position="absolute"
              top="2"
              left="80px"
            />
            <Flex position="absolute" left="270px" flexDir="column" top="20">
              <Text color="#024f6c" textAlign="center">
                Peso liquido
              </Text>
              <Text
                color="#024f6c"
                fontWeight="bold"
                textAlign="center"
                fontSize="20px"
              >
                100g
              </Text>
            </Flex>
            <Flex position="absolute">
              <Image alt="" src="/calm-dog.png" w="240px" />
            </Flex>
            <Flex
              flexDirection="column"
              justify="center"
              alignItems="center"
              w="100%"
              position="absolute"
              top="380px"
            >
              <Text fontSize="35px" fontWeight="bold" color="#024f6c">
                Calm Dog
              </Text>
              <Text
                fontSize="20px"
                color="#f5bb15"
                textAlign="center"
                fontWeight="bold"
                maxWidth="200px"
              >
                Spitulina azul, Maracujá e Frango.
              </Text>
            </Flex>
          </div>
          <div
            className="face face2"
            style={{ height: "300px", width: "350px" }}
          >
            <div
              className="content"
              style={{
                width: "100% !important",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Flex px="20px">
                <Text color="#024f6c" textAlign="center" fontWeight="bold">
                  Farinha de arroz, frango, Maracujá, Erva cidreira, Erva doce,
                  Camomila, Lavanda, Banha suina, ovo, Spirulina azul
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="center" mt="30px">
                <ButtonPayment />
              </Flex>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "450px",
              width: "350px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-6.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="290px"
            />
            <Image
              alt=""
              src="/gluten-free-brown.png"
              w="60px"
              position="absolute"
              top="2"
              left="10px"
            />
            <Image
              alt=""
              src="/100-natural-brown.png"
              w="60px"
              position="absolute"
              top="2"
              left="80px"
            />
            <Flex position="absolute" left="270px" flexDir="column" top="20">
              <Text color="#95584a" textAlign="center">
                Peso liquido
              </Text>
              <Text
                color="#95584a"
                fontWeight="bold"
                textAlign="center"
                fontSize="20px"
              >
                100g
              </Text>
            </Flex>
            <Flex position="absolute">
              <Image alt="" src="/cookie-frutas.png" w="240px" />
            </Flex>
            <Flex
              flexDirection="column"
              justify="center"
              alignItems="center"
              w="100%"
              position="absolute"
              top="380px"
            >
              <Text fontSize="35px" fontWeight="bold" color="#95584a">
                Frutinhas
              </Text>
              <Text
                fontSize="20px"
                color="#e2bb97"
                textAlign="center"
                fontWeight="bold"
                maxWidth="200px"
              >
                Frutas vermelhas, Banana e Mel
              </Text>
            </Flex>
          </div>
          <div
            className="face face2"
            style={{ height: "300px", width: "350px" }}
          >
            <div
              className="content"
              style={{
                width: "100% !important",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Flex px="20px">
                <Text color="#95584a" textAlign="center" fontWeight="bold">
                  Farinha de arroz, frango, Maracujá, Erva cidreira, Erva doce,
                  Camomila, Lavanda, Banha suina, ovo, Spirulina azul
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="center" mt="30px">
                <ButtonPayment />
              </Flex>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "450px",
              width: "350px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-7.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="290px"
            />
            <Image
              alt=""
              src="/gluten-free-green.png"
              w="60px"
              position="absolute"
              top="2"
              left="10px"
            />
            <Image
              alt=""
              src="/100-natural-green.png"
              w="60px"
              position="absolute"
              top="2"
              left="80px"
            />
            <Flex position="absolute" left="270px" flexDir="column" top="20">
              <Text color="#989c38" textAlign="center">
                Peso liquido
              </Text>
              <Text
                color="#989c38"
                fontWeight="bold"
                textAlign="center"
                fontSize="20px"
              >
                100g
              </Text>
            </Flex>
            <Flex position="absolute">
              <Image alt="" src="/dental-fresh.png" w="240px" />
            </Flex>
            <Flex
              flexDirection="column"
              justify="center"
              alignItems="center"
              w="100%"
              position="absolute"
              top="380px"
            >
              <Text fontSize="25px" fontWeight="bold" color="#989c38">
                Dental fresh
              </Text>
              <Text
                fontSize="20px"
                color="#e2bb97"
                textAlign="center"
                fontWeight="bold"
                maxWidth="200px"
              >
                Spitulina azul, Maracujá e Frango.
              </Text>
            </Flex>
          </div>
          <div
            className="face face2"
            style={{ height: "300px", width: "350px" }}
          >
            <div
              className="content"
              style={{
                width: "100% !important",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Flex px="20px">
                <Text color="#989c38" textAlign="center" fontWeight="bold">
                  Farinha de arroz, frango, Maracujá, Erva cidreira, Erva doce,
                  Camomila, Lavanda, Banha suina, ovo, Spirulina azul
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="center" mt="30px">
                <ButtonPayment />
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainerCookie: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      w="100%"
      bg="#f5f2e9"
      gap={6}
    >
      <Card />
    </Flex>
  );
};

export default CardContainerCookie;
