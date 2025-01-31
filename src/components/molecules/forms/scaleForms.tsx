"use client";

import { Button, Flex, Input, Box, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Field as FieldUI } from "../../atoms/forms/field";
import ImageContainer from "@/components/atoms/images/imageContainer";
import { useState } from "react"; // Step 1: Import useState

interface FormValues {
  age: number;
  weight: number;
}

const ScaleForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [result, setResult] = useState<string>("0g"); // Step 2: Create state for the result

  const onSubmit = handleSubmit((data: FormValues) => {
    const weight = parseFloat(data.weight.toString());
    const age = parseFloat(data.age.toString());

    const originalQuantity = quantityPerWeight(weight);
    const adjustedQuantity = validateQuantityPerAge(originalQuantity, age);

    setResult(`${adjustedQuantity}g`);
    console.log({ weight, age, originalQuantity, adjustedQuantity });
  });

  function quantityPerWeight(weight: number): number {
    const ranges = [
      { min: 1, max: 2, value: 105 },
      { min: 2, max: 5, value: 205 },
      { min: 5, max: 10, value: 350 },
      { min: 10, max: 15, value: 470 },
      { min: 15, max: 20, value: 585 },
      { min: 20, max: 100, value: 795 },
    ];

    const range = ranges.find((r) => weight >= r.min && weight <= r.max);
    return range ? range.value : 0; // Return 0 if no match
  }

  function validateQuantityPerAge(quantity: number, age: number): number {
    if (age <= 0.4) return quantity * 0.9;
    if (age >= 7) return quantity * 0.8;
    return quantity;
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Flex
          width={{ base: "100%", xl: "70%" }}
          justifyContent={{ base: "center", xl: "center" }}
          height="100%"
          flexDirection="column"
          gap={{ base: "30px", xl: "40px" }}
          mt={{ base: "20px", xl: "0px" }}
          align="center"
          px={{ base: 4, md: 20, lg:28, xl: 0 }}
        >
          <Flex
            gap={{ base: "8", xl: "8" }}
            align="center"
            width={{ base: "100%", xl: "20%" }}
            justify="center"
            flexDirection="column"
          >
            <FieldUI invalid={!!errors.age} errorText={errors.age?.message}>
              <Box
                pos="relative"
                w="full"
                display="flex"
                justifyContent="center"
              >
                <Input
                  border="4px solid"
                  borderColor="primary"
                  borderRadius="50px"
                  className="peer"
                  type="number"
                  step="any"
                  textAlign="center"
                  fontSize={{base:'1.2rem', md:'1.4rem', xl:'1.2rem'}}
                  p={5}
                  placeholder="0.0 (anos/meses)"
                  {...register("age", {
                    required: "A idade do animal é necessária: 1.2 = 1 ano e 2 meses",
                  })}
                />
                <ImageContainer
                  alt="Idade"
                  src="/age.png"
                  width={80}
                  height={80}
                  top="-6"
                />
              </Box>
            </FieldUI>
            <FieldUI
              invalid={!!errors.weight}
              errorText={errors.weight?.message}
            >
              <Box
                pos="relative"
                w="full"
                display="flex"
                justifyContent="center"
              >
                <Input
                  border="4px solid"
                  borderColor="primary"
                  type="number"
                  step="any"
                  fontSize={{base:'1.2rem', md:'1.4rem', xl:'1.2rem'}}
                  borderRadius="50px"
                  textAlign="center"
                  className="peer"
                  placeholder="0.0 (quilos/gramas)"
                  {...register("weight", {
                    required: "O peso do animal é necessário: 1.2 = 1 kg e 200 gramas",
                  })}
                  p={5}
                />
                <ImageContainer
                  alt="Idade"
                  src="/weight.png"
                  width={80}
                  height={80}
                  top="-6"
                />
              </Box>
            </FieldUI>
          </Flex>
          <Flex justifyContent="center" width="100%">
            <Button
              type="submit"
              width={{ base: "100%", xl: "20%" }}
              bg="primary"
              p={7}
              fontFamily="RemoraSansMedium"
              borderRadius="50px"
              fontSize="1rem"
              _hover={{
                backgroundColor: "secondary",
              }}
            >
              <ImageContainer
                alt="Idade"
                src="/calculate.png"
                width={100}
                height={100}
              />
            </Button>
          </Flex>
        </Flex>
      </form>
      <Flex h={{ base: "30dvh", xl: "50dvh" }} w="full" position="relative">
        <ImageContainer
          alt=""
          src="/scale.png"
          boxWidth={"95%"}
          boxHeight="95%"
          objectFit="contain"
          top="0"
          left="50%"
          transform="translate(-47.5%, 0%)"
          display={{ base: "none", xl: "initial" }}
        />
        <ImageContainer
          alt=""
          src="/scale-mobile.png"
          boxWidth={"94%"}
          boxHeight="94%"
          objectFit="contain"
          top="0"
          left="50%"
          transform="translate(-50%, -7%)"
          display={{ base: "initial", xl: "none" }}
        />
        <Flex w="full" h="full" justify="center" align="center">
          <Text
            color="secondary"
            fontFamily="RemoraSansBold"
            fontSize={{base:'1.2rem', md:'1.8rem', xl: "4rem" }}
            zIndex={20}
          >
            {result} {/* Step 4: Display the dynamic result */}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ScaleForms;
