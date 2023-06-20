import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useId } from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchInput() {
  const id = useId();

  return (
    <InputGroup>
      <InputLeftElement
        as="label"
        htmlFor={id}
        color="cyan.500"
        children={<BsSearch />}
      />
      <Input
        id={id}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
}

export default SearchInput;
