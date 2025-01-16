"use client";

import { Button, Flex, Field, Input, Box, defineStyle } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Field as FieldUI } from "./field";

interface FormValues {
  name: string;
  cellphone: string;
}

const HomeForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data);
  });

  const floatingStyles = defineStyle({
    pos: "absolute",
    fontFamily: "RemoraSans",
    color: "secondary !important",
    bg: "light",
    px: "0.5",
    top: "-3",
    insetStart: "5",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      fontFamily: "RemoraSansBold",
      top: "-2.5",
    },
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Flex
        width={{ base: "100%", xl: "70%" }}
        justifyContent={{ base: "center", xl: "center" }}
        height="100%"
        flexDirection="column"
        gap={{ base: "30px", xl: "50px" }}
        mt={{ base: "20px", xl: "0px" }}
      >
        <Flex
          gap={{ base: "8", xl: "4" }}
          align="center"
          width="100%"
          justify="center"
          flexDirection={{ base: "column", xl: "row" }}
        >
          <FieldUI invalid={!!errors.name} errorText={errors.name?.message}>
            <Box pos="relative" w="full">
              <Input
                border="3px solid"
                borderColor="secondary"
                borderRadius="20px"
                className="peer"
                placeholder=""
                {...register("name", { required: "O nome é necessário" })}
              />
              <Field.Label css={floatingStyles}>Digite seu nome</Field.Label>
            </Box>
          </FieldUI>
          <FieldUI
            invalid={!!errors.cellphone}
            errorText={errors.cellphone?.message}
          >
            <Box pos="relative" w="full">
              <Input
                border="3px solid"
                borderColor="secondary"
                borderRadius="20px"
                className="peer"
                placeholder=""
                {...register("cellphone", {
                  required: "Numero de telefone é necessário",
                })}
              />
              <Field.Label css={floatingStyles}>
                Seu número de telefone
              </Field.Label>
            </Box>
          </FieldUI>
        </Flex>
        <Flex justifyContent="center" width="100%">
          <Button
            type="submit"
            width={{ base: "100%", xl: "30%" }}
            bg="primary"
            fontFamily="RemoraSansMedium"
            borderRadius="20px"
            fontSize="1rem"
            _hover={{
                backgroundColor:"secondary"
            }}
          >
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default HomeForms;
