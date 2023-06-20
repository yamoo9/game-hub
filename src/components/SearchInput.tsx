import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEvent, useId, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchTerm: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const id = useId();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInputElement = searchInputRef.current;
    if (searchInputElement) {
      onSearch(searchInputElement.value);
      searchInputElement.value = '';
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement
          as="label"
          htmlFor={id}
          color="cyan.500"
          children={<BsSearch />}
        />
        <Input
          id={id}
          ref={searchInputRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
