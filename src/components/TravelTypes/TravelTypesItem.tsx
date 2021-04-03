import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";

interface TravelTypesItemProps {
  text: string;
  image: string;
}

export default function TravelTypesItem({ text, image }: TravelTypesItemProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={image} h="85px" w="85px" />
      <Text mt="2" fontWeight="600" fontSize="24px" color="gray.700">{text}</Text>
    </Flex>
  );
}