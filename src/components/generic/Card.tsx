import type { FC } from 'react';
import { StyleSheet, Pressable, View as DefaultView } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import StarRating from '@Components/generic/StarRating';
import type { RootStackParamList } from '@Types/main.type';
import type { Book } from '@Interfaces/domain/book.interface';

export type CardProps = {
  books: Book[];
  route: RouteProp<RootStackParamList, 'Home'>;
};

const Card: FC<CardProps> = ({ books, route }) => {
  return (
    <>
      {books?.map((book) => (
        <Pressable key={book.id}>
          <View style={styles.cardContainer}>
            <DefaultView style={styles.cardContainer__top}>
              <Text>{book.title}</Text>
              <Text>{book.author}</Text>
            </DefaultView>

            <DefaultView style={styles.cardContainer__bottom}>
              <Text>{book.status}</Text>
              <StarRating route={route} />
            </DefaultView>
          </View>
        </Pressable>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 8,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: Colors.bg_700.background,
    borderColor: Colors.light.background,
  },
  cardContainer__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer__bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Card;
