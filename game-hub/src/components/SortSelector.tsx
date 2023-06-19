import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {/* 관계(relevance) */}
        <MenuItem>Relevance</MenuItem>
        {/* 추가 날짜(date added) */}
        <MenuItem>Date added</MenuItem>
        {/* 이름(name) */}
        <MenuItem>Name</MenuItem>
        {/* 출시 날짜(release date) */}
        <MenuItem>Release date</MenuItem>
        {/* 인기(popularity) */}
        <MenuItem>Popularity</MenuItem>
        {/* 평점(average rating) */}
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
