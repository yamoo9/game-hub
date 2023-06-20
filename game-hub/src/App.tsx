import { useState } from 'react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';

import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  search: string;
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSearch = (searchTerm: string) => {
    setGameQuery({ ...gameQuery, search: searchTerm });
  };

  const handleSelectGenre = (genre: Genre) => () =>
    setGameQuery({ ...gameQuery, genre });

  const handleSelectPlatform = (platform: Platform) => () =>
    setGameQuery({ ...gameQuery, platform });

  const handleSelectSortOrder = (sortOrder: string) => () => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '264px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={handleSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" pl={4}>
          <GenreList
            selectedGenreId={gameQuery.genre?.id}
            onSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" pr={4}>
        <HStack
          spacing={4}
          marginLeft={{
            base: 4,
            lg: 0,
          }}
        >
          <PlatformSelector
            selectedPlatformName={gameQuery.platform?.name}
            onSelectPlatform={handleSelectPlatform}
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={handleSelectSortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
