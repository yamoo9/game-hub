import { Heading } from '@chakra-ui/react';

interface Props {
  platform?: string;
  genre?: string;
}

function GameHeading({ platform, genre }: Props) {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games

  return (
    <Heading fontSize="6xl" mb={5}>
      {`${platform ?? ''} ${genre ?? ''} Games`.trim()}
    </Heading>
  );
}

export default GameHeading;
