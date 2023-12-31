import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';
import ErrorMessage from './ErrorMessage';

const styles = {
  disabled: {
    cursor: 'not-allowed',
  },
  active: {
    color: 'cyan.400',
  },
};

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => () => void;
}

function GenreList({ selectedGenreId, onSelectGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) {
    return (
      <Box mt={3} mx={5}>
        <Spinner color="cyan.500" />
      </Box>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <Heading as="h3" fontSize="2xl" mb={4}>
        Genre
      </Heading>
      <List display="flex" flexFlow="column" gap={2}>
        {genres.map((genre) => {
          const isSelected = genre.id === selectedGenreId;
          return (
            <ListItem key={genre.id} py={1}>
              <HStack>
                <Image
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  variant="link"
                  fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={onSelectGenre(genre)}
                  color={isSelected ? 'cyan.400' : 'gray.500'}
                  isDisabled={isSelected}
                  _disabled={styles.disabled}
                  _active={styles.active}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default GenreList;
