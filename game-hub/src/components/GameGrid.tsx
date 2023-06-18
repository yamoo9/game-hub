import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => {
        setGameList(response.data.results);
      })
      .catch((error: Error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {gameList.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
