import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Book {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly status: string;
  readonly rating: number;
  readonly pages: number;
  readonly username: string;
  readonly review?: string;
  readonly image?: string;
  readonly read_pages?: (number | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}