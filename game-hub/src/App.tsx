import { useCallback, useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';

import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSelectGenre = useCallback(
    (genre: Genre) => () => setSelectedGenre(genre),
    []
  );

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectPlatform = useCallback(
    (platform: Platform) => () => {
      setSelectedPlatform(platform);
    },
    []
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '240px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenreId={selectedGenre?.id}
            onSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatformName={selectedPlatform?.name}
          onSelectPlatform={handleSelectPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
