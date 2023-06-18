import { HStack, Image, Text } from '@chakra-ui/react';
import logoPath from '../assets/logo.png';

function NavBar() {
  return (
    <HStack p={2}>
      <Image src={logoPath} alt="" boxSize={8} objectFit="cover" />
      <Text fontSize="sm" aria-label="게임 허브">
        Game Hub
      </Text>
    </HStack>
  );
}

export default NavBar;
