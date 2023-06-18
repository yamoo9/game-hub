import { HStack, FormLabel, Switch, useColorMode } from '@chakra-ui/react';
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
      <FormLabel htmlFor={id} m={0} mr={2}>
        Dark Mode
      </FormLabel>
    </HStack>
  );
}

export default ColorModeSwitch;
