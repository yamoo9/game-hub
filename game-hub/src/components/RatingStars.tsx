import { theme } from '@chakra-ui/react';
import { Rating, ThinStar } from '@smastrom/react-rating';

const ratingItemStyles = {
  itemShapes: ThinStar,
  activeFillColor: theme.colors.cyan[600],
  inactiveFillColor: theme.colors.gray[300],
};

const getLabel = (rating: number): string => {
  if (rating > 4.5) {
    return 'Excellent';
  } else if (rating > 4) {
    return 'Very Good';
  } else if (rating > 3) {
    return 'Average';
  } else if (rating > 2) {
    return 'Poor';
  } else {
    return 'Bad';
  }
};

interface Props {
  rating: number;
}

function RatingStars({ rating }: Props) {
  const label = getLabel(rating);
  return (
    <Rating
      style={{ maxWidth: 120, marginTop: 4 }}
      itemStyles={ratingItemStyles}
      invisibleLabel={label}
      rating={rating}
      value={rating}
      readOnly
    />
  );
}

export default RatingStars;
