import type { FC } from 'react';
import { StyleSheet, View as DefaultView } from 'react-native';
import { Rating } from 'react-simple-star-rating';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '@Types/main.type';
import type { Book } from '@Interfaces/domain/book.interface';

export type StarRatingProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  book: Book;
};

const StarRating: FC<StarRatingProps> = ({ route, book }) => {
  return (
    <DefaultView>
      <Rating
        readonly={route.name === 'Home'}
        size={28}
        ratingValue={book.rating}
      />
    </DefaultView>
  );
};

const styles = StyleSheet.create({});

export default StarRating;
