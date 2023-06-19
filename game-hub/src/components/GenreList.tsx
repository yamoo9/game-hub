import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';

interface Props {
  onSelectGenre: (genre: Genre) => () => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) {
    return (
      <Box mt={3} mx={5}>
        <Spinner
          thickness="2px"
          speed="1.2s"
          emptyColor="gray.300"
          color="cyan.500"
          size="md"
        />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error" borderRadius={6} ml={1}>
        <AlertIcon />
        <Box>
          <AlertTitle>ERROR</AlertTitle>
          <AlertDescription fontSize="sm" display="inline-block" lineHeight="1">
            {error}
          </AlertDescription>
        </Box>
      </Alert>
    );
  }

  return (
    <List ml={4} mt={3}>
      {genres.map((genre) => (
        <ListItem key={genre.id} py={1}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button variant="link" fontSize="lg" onClick={onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
