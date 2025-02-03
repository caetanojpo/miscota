import { TextDecoration } from "@/components/atoms/textDecoration";
import { Rating } from "@/components/ui/rating";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export const Avaliation = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const reviews = [
    {
      name: "Marianne",
      rating: 5,
      review:
        "Depois que inseri a alimentação natural na vida do meu pet, a disposição e ânimo dele mudou completamente",
      picture: "/marianne.png",
    },
    {
      name: "Fabricio",
      rating: 5,
      review:
        "Meu cachorro amou! As refeições parecem tão frescas e saudáveis que até eu fiquei com vontade de experimentar. Recomendo demais!",
      picture: "/fabricio.png",
    },
    {
      name: "Gustavo",
      rating: 5,
      review:
        "Entrega rápida e comida de excelente qualidade. Meu pet é exigente, mas devorou tudo rapidinho!",
      picture: "/gustavo.png",
    },
    {
      name: "Laila",
      rating: 5,
      review:
        "O cheiro é agradável e meu pet adora. Notei uma melhora na digestão dele também. Comprarei novamente!",
      picture: "/laila.png",
    },
  ];

  return (
    <Box
      display="flex"
      border='4px #f7c657" borderBottom="4px #f7c657'
      w="100vw"
      overflow="hidden"
    >
      <Box maxW="100%" mx="auto">
        <Box mx="auto">
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap={1}
            mb={8}
          >
            <Flex
              position="absolute"
              top={isMobile ? "5px" : "-10"}
              justify="center"
              transform={isMobile ? "" : "rotate(-5deg)"}
            >
              <TextDecoration
                text="Avaliações"
                maxW="500px"
                textAlign="center"
                textStrokeColor2="#f7c657"
                fontSize="40px"
              />
              <Image alt="" src="/star.png" w={55} h={59} ml="10px" />
            </Flex>
          </Flex>

          <Flex
            flexDirection={isMobile ? "column" : "row"}
            justify="center"
            gap={16}
            overflowX="auto"
            px={4}
            pb={6}
            css={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
          >
            {reviews.map((review, index) => (
              <Box
                key={index}
                w="280px"
                bg="#f5f2e9"
                borderRadius="25px"
                borderWidth="4px"
                borderColor="#f7c657"
                p={6}
                _hover={{ boxShadow: "lg" }}
                transition="box-shadow 0.3s"
                css={{
                  scrollSnapAlign: "start",
                }}
              >
                <Flex direction="column" align="center">
                  <Image
                    src={
                      review.picture ?? "https://webcrumbs.cloud/placeholder"
                    }
                    alt={review.name}
                    w="20"
                    h="20"
                    borderWidth="6px"
                    borderRadius="full"
                    border="2px solid #f7c657"
                  />

                  <Text
                    fontWeight="semibold"
                    color="#893733"
                    mt={4}
                    fontSize="25px"
                  >
                    {review.name}
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="sm"
                    color="#893733"
                    mt={4}
                    fontWeight="bold"
                  >
                    {review.review}
                  </Text>
                  <Flex gap={1} mt={4}>
                    <Rating
                      colorPalette="orange"
                      readOnly
                      size="xs"
                      defaultValue={review.rating}
                    />
                  </Flex>
                  <Text
                    color="#893733"
                    fontWeight="bold"
                    fontSize="18px"
                    mt={2}
                  >
                    Excelente
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
