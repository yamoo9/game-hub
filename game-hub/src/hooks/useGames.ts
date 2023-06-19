import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const selectedGenreId = selectedGenre?.id;
  const selectedPlatformId = selectedPlatform?.id;
  return useData<Game>(
    '/games',
    { params: { genres: selectedGenreId, platforms: selectedPlatformId } },
    [selectedGenreId, selectedPlatformId]
  );
};

export default useGames;
