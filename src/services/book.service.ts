import { CreateBookDTO } from '@Lib/dto/book.dto';
import { DataStore } from '@aws-amplify/datastore';
import { Book } from 'models';

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

  return { findBooksRequest, createBookRequest };
}
