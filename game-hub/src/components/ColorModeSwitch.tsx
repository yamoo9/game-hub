import {
  HStack,
  FormLabel,
  Switch,
  useColorMode,
  Hide,
} from '@chakra-ui/react';
import { useId } from 'react';

function ColorModeSwitch() {
  const id = useId();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <HStack>
      <Switch
        id={id}
        colorScheme="cyan"
        isChecked={isDarkMode}
        onChange={toggleColorMode}
      />
      <Hide below="lg">
        <FormLabel htmlFor={id} m={0} mr={2} whiteSpace="nowrap">
          Dark Mode
        </FormLabel>
      </Hide>
    </HStack>
  );
}

export default ColorModeSwitch;
