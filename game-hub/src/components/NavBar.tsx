import { HStack, Image } from '@chakra-ui/react';
import logoPath from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent="space-between" p={4} mb={2}>
      <Image src={logoPath} alt="게임 허브" boxSize={8} objectFit="cover" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
