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
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => () =>
    setGameQuery({ ...gameQuery, genre });

  const handleSelectPlatform = (platform: Platform) => () =>
    setGameQuery({ ...gameQuery, platform });

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenreId={gameQuery.genre?.id}
            onSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
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
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
