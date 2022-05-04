import type { FC } from 'react';
import { StyleSheet, View as DefaultView } from 'react-native';
import { Rating } from 'react-simple-star-rating';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '@Types/main.type';
import { useUpdateRatingBookUseCase } from '@Application/book/update-rating-book.use-case';

export type StarRatingProps = {
  route: RouteProp<RootStackParamList, 'Home' | 'Books'>;
  bookId: string;
  rating: number;
};

const StarRating: FC<StarRatingProps> = ({ route, bookId, rating }) => {
  const { updateRatingBook } = useUpdateRatingBookUseCase();

  const handleRating = (rate: number) => {
    updateRatingBook(bookId, rate);
  };

  return (
    <DefaultView>
      <Rating
        readonly={route.name === 'Home'}
        size={28}
        ratingValue={rating}
        onClick={handleRating}
      />
    </DefaultView>
  );
};

const styles = StyleSheet.create({});

export default StarRating;
