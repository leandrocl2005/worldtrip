import Link from 'next/link';
import { Flex, Icon } from '@chakra-ui/react';
import { RiArrowDropLeftLine } from 'react-icons/ri';

import { Logo } from './Logo';
import { useRouter } from 'next/router';

export default function Header() {

  const { asPath } = useRouter();

  return (
    <Flex
      as='header'
      w="100%"
      mx="auto"
      alignItems="center"
      justifyContent="center"
      px="6"
      position="relative"
      h="100px">

      { asPath !== "/" &&
        <Link href="/">
          <Icon
            as={RiArrowDropLeftLine}
            position="absolute"
            fontSize="36px"
            color="gray.200"
            top="30px"
            left="20px"
            cursor="pointer"
          />
        </Link>
      }
      <Logo />

    </Flex>
  )
}