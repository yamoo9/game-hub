import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 70 ? 'cyan' : score > 60 ? 'orange' : '';

  return (
    <Badge colorScheme={color} px={2} py={1} borderRadius={4}>
      {score}
    </Badge>
  );
}

export default CriticScore;
