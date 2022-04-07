import type { FC } from 'react';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { StyleSheet, View as DefaultView } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '@Types/main.type';

export type StarRatingProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
};

const StarRating: FC<StarRatingProps> = ({ route }) => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <DefaultView>
      <Rating
        readonly={route.name === 'Home'}
        size={30}
        ratingValue={rating}
        onClick={handleRating}
      />
    </DefaultView>
  );
};

const styles = StyleSheet.create({});

export default StarRating;
