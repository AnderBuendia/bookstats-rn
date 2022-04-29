import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useFindBooksUseCase } from '@Application/book/find-books.use-case';
import { useBooksStorage } from '@Services/storage.service';
import Colors from '@Lib/constants/Colors';
import { View, Text } from '@Components/generic/Theme/Themed';
import type { RootStackScreenProps } from '@Types/main.type';

export type BooksScreenProps = RootStackScreenProps<'Books'>;
const BooksScreen: FC<BooksScreenProps> = ({ navigation }) => {
  const { books, setBooks } = useBooksStorage();
  const { findBooks } = useFindBooksUseCase();

  useEffect(() => {
    if (!books.length) fetchBooks();
  }, []);

  async function fetchBooks() {
    const response = await findBooks();

    if (response) setBooks(response);
  }

  console.log({ b: books[0]?.author });

  return (
    <View style={styles.booksContainer}>
      <View style={styles.booksView}>
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => navigation.navigate('CreateBook')}
        >
          <View style={styles.createBookButton}>
            <Text style={styles.createBookButton__text}>Create Book</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  booksContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerImage: {
    marginLeft: 14,
    width: 36,
    height: 36,
  },
  headerTitle: {
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 22,
  },
  signOutButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: Colors.bg_300.background,
  },
  signOutButton__text: {
    fontSize: 15,
  },
  createBookButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: Colors.secondary_500.background,
  },
  createBookButton__text: {
    fontSize: 15,
  },
  booksView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BooksScreen;
