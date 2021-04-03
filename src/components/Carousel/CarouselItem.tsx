import { Flex, Text } from "@chakra-ui/react";

interface CarouselItemProps {
  image: string;
  name: string;
  description: string;
}

export default function CarouselItem({
  image, name, description
}: CarouselItemProps) {
  return (
    <Flex
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      h="450px">
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        w="100%"
      >
        <Text fontWeight="600" fontSize="48px">{name}</Text>
        <Text fontWeight="500" fontSize="24px">{description}</Text>
      </Flex>
    </Flex>
  )
}