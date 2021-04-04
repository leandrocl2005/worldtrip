import { Flex, Text } from "@chakra-ui/react";
import Link from 'next/link';

interface CarouselItemProps {
  id: number;
  image: string;
  name: string;
  description: string;
}

export default function CarouselItem({
  id, image, name, description
}: CarouselItemProps) {
  return (

    <Link href={`continent/${id}`}>
      <Flex
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
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
    </Link>
  );
}