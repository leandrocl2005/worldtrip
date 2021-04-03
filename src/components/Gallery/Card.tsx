import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Country } from "./types";

export default function Card({ id, image, name, capital, flag }: Country) {
  return (
    <Flex
      w="100%"
      as="li"
      key={id}
      direction="column"
      border="1px solid #FFBA0833"

    >
      <Image w="100%" h="173px" objectFit="cover" src={image} alt={name} />
      <Flex
        w="100%"
        direction="row"
        px="6"
        pt="6"
        pb="6"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text
            fontSize="20px"
            lineHeight="25px"
            fontWeight="600"
            color="gray.600"
          >{capital}</Text>
          <Text
            fontSize="16px"
            lineHeight="26px"
            fontWeight="500 "
            color="gray.300"
          >{name}</Text>
        </Box>

        <Box>
          <Image border="1px solid #efefef" w="38px" h="38px" borderRadius="50%" src={flag} />
        </Box>
      </Flex>

    </Flex>
  )
}