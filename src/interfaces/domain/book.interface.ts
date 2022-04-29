import { BookStatus } from '@Enums/book-status.enum';

export type Book = {
  id: string;
  title: string;
  author: string;
  username: string;
  status: string;
  rating: number;
  pages: number;
  image: string | null;
  review: string | null;
  read_pages: number[];
  createdAt: Date;
  updatedAt: Date;
};
