import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Avaliation = () => {
  const reviews = [
    {
      name: "Marianne",
      rating: 5,
      review:
        "Depois que inseri a alimentação natural na vida do meu pet, a disposição e ânimo dele mudou completamente",
    },
    {
      name: "Fabricio",
      rating: 5,
      review:
        "Depois que inseri a alimentação natural na vida do meu pet, a disposição e ânimo dele mudou completamente",
    },
    {
      name: "Gustavo",
      rating: 5,
      review:
        "Depois que inseri a alimentação natural na vida do meu pet, a disposição e ânimo dele mudou completamente",
    },
    {
      name: "Laila",
      rating: 5,
      review:
        "Depois que inseri a alimentação natural na vida do meu pet, a disposição e ânimo dele mudou completamente",
    },
  ];

  return (
    <Box id="webcrumbs" w="100vw" overflow="hidden">
      <Box maxW="100%" mx="auto">
        <Box bgGradient="linear(to-b, orange.50, white)" py={8}>
          <Box mx="auto">
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap={1}
              mb={8}
            >
              <Text fontSize="3xl" fontWeight="bold" color="amber.700">
                Avaliações
              </Text>
              <Box
                as="span"
                className="material-symbols-outlined"
                fontSize="3xl"
                color="amber.500"
              >
                star
              </Box>
            </Flex>

            <Flex
              borderTop="4px #f7c657"
              borderBottom="4px #f7c657"
              gap={6}
              overflowX="auto"
              px={4}
              pb={4}
              css={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth", // Suaviza o scroll
                scrollbarWidth: "none", // Oculta a barra de scroll no Firefox
                WebkitOverflowScrolling: "touch", // Suaviza o scroll em dispositivos móveis
                "&::-webkit-scrollbar": {
                  display: "none", // Esconde a barra de rolagem
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "transparent", // Deixa o thumb invisível
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "transparent", // Torna a trilha invisível
                },
              }}
            >
              {reviews.map((review, index) => (
                <Box
                  key={index}
                  w="280px"
                  bg="white"
                  borderRadius="lg"
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
                      src="https://webcrumbs.cloud/placeholder"
                      alt={review.name}
                      w="16"
                      h="16"
                      borderWidth="4px"
                      borderRadius="full"
                      border="2px"
                      borderColor="#f7c657"
                    />
                    <Text fontWeight="semibold" color="amber.700" mt={4}>
                      {review.name}
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      color="gray.600"
                      mt={4}
                    >
                      {review.review}
                    </Text>
                    <Flex gap={1} mt={4}>
                      {[...Array(review.rating)].map((_, idx) => (
                        <Box
                          key={idx}
                          as="span"
                          className="material-symbols-outlined"
                          color="amber.400"
                        >
                          star
                        </Box>
                      ))}
                    </Flex>
                    <Text color="amber.700" fontWeight="medium" mt={2}>
                      Excelente
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
