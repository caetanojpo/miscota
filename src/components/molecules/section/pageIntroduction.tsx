import ImageContainer from "@/components/atoms/images/imageContainer";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function PageIntroduction() {
  return (
    <Flex h={{ base: "100%", xl: "100%" }} mb={{xl:'20'}}>
      <ImageContainer
        alt="Confeitaria PET"
        src="/page-intro-confectionery.png"
        width={500}
        height={500}
        top="-3%"
        left="50%"
        transform="translate(-50%, 0%)"
      />

      <Flex
        h={{ base: "100%", xl: "80%" }}
        w="100%"
        direction="column"
        alignItems="center"
        mt={{base:'12', md:'24', xl:"36"}}
        pb={{base:'12', xl:'0'}}
        px={{ base: "10", xl: "40" }}
        textAlign="center"
        color="secondary"
        fontFamily="RemoraSansMedium"
        gap={{base:"6", xl:'8'}}
        fontSize={{base:'1rem', xl:'1.2rem'}}
      >
        <Text>
          Nosso time possuí uma cozinha incrível e confeiteiros de mão cheia
          para fazer os melhores biscoitos, bolos e salgadinhos pet que você ja
          viu!
        </Text>
        <Text>
          Fazemos a festinha do seu Pet por completo, montamos o cardápio de sua
          escolha e fazemos bolos e docinhos temáticos! Seja qual for o tema da
          sua festa a miscota vai entregar pra você e seu aumiguinho o melhor
          aniversário pet possível!
        </Text>
        <Text>Confira as fotos das festinhas que ja fizemos:</Text>
      </Flex>
    </Flex>
  );
}
