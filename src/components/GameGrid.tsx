import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

import useGames from '../hooks/useGames';
import { GameQuery } from '../App';
import ErrorMessage from './ErrorMessage';

const skeletons = Array(20).fill(null);

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);

  if (error) {
    return <ErrorMessage error={error} mt={4} />;
  }

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        '2xl': 6,
      }}
      py={4}
      px={{
        base: 4,
        lg: 0,
      }}
      spacing={4}
    >
      {isLoading
        ? skeletons.map((_, index) => <GameCardSkeleton key={index} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}

export default GameGrid;
