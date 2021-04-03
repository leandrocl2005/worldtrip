import { Divider, Flex, Heading } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';

export default function Home() {

  return (
    <Flex
      w="100%"
      alignItems="center"
      direction="column"
      justifyContent="center">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider as="hr" w="20%" borderWidth="2px" borderColor="gray.500" />
      <Heading
        w="100%"
        textAlign="center"
        mt="16"
        mb="8"
        fontSize="36px"
        color="gray.700"
        fontWeight="500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <Carousel />
    </Flex>
  );
}
