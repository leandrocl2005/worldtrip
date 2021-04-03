import { Box, Flex, Text } from "@chakra-ui/react";

interface TextInfoProps {
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
}

export default function TextInfo({ text, numberOfCountries, numberOfLanguages }: TextInfoProps) {
  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      alignItems="center"
      mt="16"
    >
      <Box
        w="40%"
      >
        <Text
          textAlign="justify"
          fontWeight="400"
          fontSize="24px"
          color="gray.500"
        >
          {text}
        </Text>
      </Box>
      <Box
        w="40%"
      >
        <Flex
          w="100%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            textAlign="center"
          >
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
              color="primary.900"
            >{numberOfCountries}</Text>
            <Text
              fontSize="18px"
              fontWeight="600"
              color="gray.500"
            >
              Países
          </Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
              color="primary.900"
            >
              {numberOfLanguages}
            </Text>
            <Text
              fontSize="18px"
              fontWeight="600"
              color="gray.500"
            >
              Línguas
          </Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
              color="primary.900"
            >27</Text>
            <Text
              fontSize="18px"
              fontWeight="600"
              color="gray.500"
            >
              Cidades +100
          </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}