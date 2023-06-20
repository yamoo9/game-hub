import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '../services/imageUrl';
import CriticScore from './CriticScore';
import RatingStars from './RatingStars';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt=""
        minH="150px"
      />
      <CardBody>
        <HStack justify="space-between" alignItems="center" mb={4}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" noOfLines={1} title={game.name}>
          {game.name}
        </Heading>
        <RatingStars rating={game.rating} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
