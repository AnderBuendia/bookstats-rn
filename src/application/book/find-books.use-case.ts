import { useBookService } from '@Services/book.service';
import { useAuthUserStorage, useErrorStorage } from '@Services/storage.service';

export function useFindBooksUseCase() {
  const { findBooksRequest } = useBookService();
  const { user } = useAuthUserStorage();
  const { setErrorState } = useErrorStorage();

  const findBooks = async () => {
    try {
      const username = user.getUsername();
      const data = await findBooksRequest(username);

      return data;
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  return { findBooks };
}
