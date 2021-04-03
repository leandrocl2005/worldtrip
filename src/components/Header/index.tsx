import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';

export default function Header() {

  return (
    <Flex
      as='header'
      w="100%"
      mx="auto"
      alignItems="center"
      justifyContent="center"
      px="6"
      h="100px">

      <Logo />

    </Flex>
  )
}