import { Flex, Text } from "@chakra-ui/react";

interface TextDecorationProps {
  text: string;
  transform?: string;
  top?: string;
  left?: string;
  textAlign?: string;
  maxW?: string;
  lineHeight?: string;
  textStrokeColor1?: string;
  textStrokeColor2?: string;
  position?: string;
  fontSize?: string;
}

export const TextDecoration: React.FC<TextDecorationProps> = ({
  text,
  transform,
  top,
  left,
  textAlign,
  maxW = "100%",
  lineHeight,
  textStrokeColor1 = "#893733",
  textStrokeColor2 = "#f5f2e9",
  position,
  fontSize = "70px",
}) => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      transform={transform}
      top={top}
      left={left}
      textAlign={textAlign}
      position={position}
    >
      <Text
        color={textStrokeColor1}
        fontSize={fontSize}
        letterSpacing="3px"
        zIndex={9999}
        WebkitTextStroke={`3px ${textStrokeColor1}`}
        lineHeight={lineHeight}
        maxW={maxW}
        fontFamily={"RemoraSansBold"}
      >
        {text}
      </Text>
      <Text
        transform="translate(0%, -100%)"
        color={textStrokeColor2}
        letterSpacing="3px"
        fontSize={fontSize}
        WebkitTextStroke={`15px ${textStrokeColor2}`}
        textShadow="0px 0px 16px black;"
        lineHeight={lineHeight}
        maxW={maxW}
        fontFamily={"RemoraSansBold"}
      >
        {text}
      </Text>
    </Flex>
  );
};
