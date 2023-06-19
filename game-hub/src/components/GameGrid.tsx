import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

const skeletons = Array(20).fill(null);

interface Props {
  selectedPlatform: Platform | null;
  selectedGenre: Genre | null;
}

function GameGrid({ selectedPlatform, selectedGenre }: Props) {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        py={4}
        spacing={3}
      >
        {isLoading
          ? skeletons.map((_, index) => <GameCardSkeleton key={index} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
