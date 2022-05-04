import { CreateBookDTO } from '@Lib/dto/book.dto';
import { DataStore } from '@aws-amplify/datastore';
import { Book } from '@Models/index';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure({
  ...awsconfig,
  Analytics: { disabled: true },
});

export function useBookService() {
  const findBooksRequest = async (username: string) => {
    try {
      const response = await DataStore.query(Book, (c) =>
        c.username('contains', username)
      );

      return response;
    } catch (error: any) {
      throw error;
    }
  };

  const createBookRequest = async (book: CreateBookDTO) => {
    try {
      const data = await DataStore.save(new Book(book));

      return data;
    } catch (error: any) {
      throw error;
    }
  };

  const updateRatingBookRequest = async (bookId: string, rate: number) => {
    try {
      const book = await DataStore.query(Book, bookId);

      if (book) {
        await DataStore.save(
          Book.copyOf(book, (updated) => {
            updated.rating = rate;
          })
        );
      }
    } catch (error: any) {
      throw error;
    }
  };

  return { findBooksRequest, createBookRequest, updateRatingBookRequest };
}
