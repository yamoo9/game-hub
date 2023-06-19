import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import ErrorMessage from './ErrorMessage';

function PlatformSelector() {
  const { data: platforms, isLoading, error } = usePlatforms();

  if (isLoading) {
    return (
      <Box>
        <Spinner color="cyan.500" />
      </Box>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
