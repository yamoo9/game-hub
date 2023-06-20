import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
];

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => () => void;
}

function SortSelector({ selectedSortOrder, onSelectSortOrder }: Props) {
  const selectedSortOrderLabel = sortOrders.find(
    ({ value }) => value === selectedSortOrder
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSortOrderLabel || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
            onClick={onSelectSortOrder(value)}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
