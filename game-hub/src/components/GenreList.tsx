import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
