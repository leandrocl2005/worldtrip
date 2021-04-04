import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h="335px"
      backgroundImage="url(./BannerBackground.png)"
      justifyContent="space-around"
      alignItems="center"
      px="16"
    >
      <Box>
        <Text
          fontWeight="500"
          fontSize="36px"
          color="gray.100"
          mb="4"
        >5 Continentes, <br /> infinitas possibilidades.</Text>
        <Text
          fontWeight="400"
          fontSize="20px"
          color="gray.300"
        >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      </Box>

      <Box>
        <Image src="/AirPlane.svg" mb="-40%" />
      </Box>

    </Flex>
  );
}