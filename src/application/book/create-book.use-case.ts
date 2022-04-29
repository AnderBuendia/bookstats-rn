import { bookToDomain } from '@Domain/book.domain';
import { useBookService } from '@Services/book.service';
import { useAuthUserStorage, useErrorStorage } from '@Services/storage.service';
import { AlertMessages } from 'enums/config/messages.enum';

export function useCreateBookUseCase() {
  const { user } = useAuthUserStorage();
  const { setErrorState } = useErrorStorage();
  const { createBookRequest } = useBookService();

  const createBook = async ({
    author,
    pages,
    status,
    title,
  }: {
    author: string;
    pages: number;
    status: string;
    title: string;
  }) => {
    try {
      // TODO: Throw error if variables are empty String

      if (!author || !title)
        throw new Error(AlertMessages.CREATE_BOOK_FORM_FIELDS_REQUIRED);

      const username = user.getUsername();
      const book = bookToDomain({ author, pages, status, title, username });
      const data = await createBookRequest(book);

      return data;
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code ?? 'Error'}: ${error.message}`,
      });
    }
  };

  return { createBook };
}
