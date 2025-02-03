import { Flex, Image, Text } from "@chakra-ui/react";
import "./style.css";
import { TextDecoration } from "@/components/atoms/textDecoration";
import { ButtonPayment } from "@/components/molecules/button";

const Card = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "320px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-1.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="240px"
            />
            <TextDecoration
              text="Boizinho"
              position="absolute"
              top="300px"
              textAlign="center"
              textStrokeColor1="#ad2b22"
              textStrokeColor2="#f5f2e9"
              fontSize="30px"
            />
          </div>
          <div className="face face2" style={{ height: "300px" }}>
            <div
              className="content"
              style={{
                width: "100% !important",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Text color="#ad2b22" fontWeight="bold">
                Contém:
              </Text>
              <Flex w="100%" justify="space-around">
                <Image alt="" src="/protein.png" w="32px" h="20px" />
                <Image alt="" src="/carbo.png" w="30px" h="30px" />
                <Image alt="" src="/legumes.png" w="30px" h="30px" />
              </Flex>
              <Flex w="100%" justify="space-around">
                <Text color="#ad2b22" fontWeight="bold">
                  Proteina
                </Text>
                <Text color="#ad2b22" fontWeight="bold">
                  Carboidrato
                </Text>
                <Text color="#ad2b22" fontWeight="bold">
                  Legume
                </Text>
              </Flex>
              <Text color="#ad2b22" textAlign="center" mt="20px">
                Músculo bovino, batata inglesa, chuchu, cenoura, pepino, couve
                manteiga, fígado bovino, azeite, alecrim, orégano, sal rosa
              </Text>
              <Flex w="100%" justifyContent="center">
                <ButtonPayment />
              </Flex>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "320px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-2.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="240px"
            />
            <TextDecoration
              text="Franguinho"
              position="absolute"
              top="300px"
              textAlign="center"
              textStrokeColor1="#ea7131"
              textStrokeColor2="#f5f2e9"
              fontSize="30px"
            />
          </div>
          <div className="face face2" style={{ height: "300px" }}>
            <div className="content">{/* aqui é o conteudo */}</div>
          </div>
        </div>
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "320px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-3.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="240px"
            />
            <TextDecoration
              text="Porquinho"
              position="absolute"
              top="300px"
              textAlign="center"
              textStrokeColor1="#9c1b50"
              textStrokeColor2="#f5f2e9"
              fontSize="30px"
            />
          </div>
          <div className="face face2" style={{ height: "300px" }}>
            <div className="content">{/* aqui é o conteudo */}</div>
          </div>
        </div>
        <div className="card">
          <div
            className="face face1"
            style={{
              height: "320px",
              position: "relative",
            }}
          >
            <Image
              alt=""
              src="/seal-4.png"
              w="90px"
              h="90px"
              position="absolute"
              top="-30px"
              left="240px"
            />
            <TextDecoration
              text="Baixo em Calorias"
              position="absolute"
              top="300px"
              textAlign="center"
              textStrokeColor1="#37abb6"
              textStrokeColor2="#f5f2e9"
              fontSize="30px"
            />
          </div>
          <div className="face face2" style={{ height: "300px" }}>
            <div className="content">{/* aqui é o conteudo */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer: React.FC = () => {
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

export default CardContainer;
