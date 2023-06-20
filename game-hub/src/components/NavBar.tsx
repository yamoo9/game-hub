import { HStack, Heading, Link, Image } from '@chakra-ui/react';
import logoPath from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <HStack justifyContent="space-between" gap={8} p={4} mb={2}>
      <Heading as="h1" title="Game Hub">
        <Link href="/">
          <Image src={logoPath} alt="Game Hub" boxSize={8} objectFit="cover" />
        </Link>
      </Heading>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
