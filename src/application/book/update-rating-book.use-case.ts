import { useBookService } from '@Services/book.service';
import { useErrorStorage } from '@Services/storage.service';

export function useUpdateRatingBookUseCase() {
  const { updateRatingBookRequest } = useBookService();
  const { setErrorState } = useErrorStorage();

  const updateRatingBook = async (bookId: string, rate: number) => {
    try {
      const data = await updateRatingBookRequest(bookId, rate);

      return data;
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  return { updateRatingBook };
}
