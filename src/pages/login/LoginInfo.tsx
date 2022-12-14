import { Grid, Image, Heading, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo-primary.svg";

export const LoginInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
      <Image
        src={Logo}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mt="4" as="h1">
        O jeito fácil, grátis
      </Heading>
      <Text maxWidth="350px">
        Flexível e atrativo de gerenciar
        <b> seus projetos em uma única plataforma</b>
      </Text>
    </Grid>
  );
};
