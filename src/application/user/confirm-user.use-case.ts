import { useUserService } from '@Services/user.service';
import { useAuthUserStorage, useErrorStorage } from '@Services/storage.service';

export function useConfirmUserUseCase() {
  const { confirmUserRequest } = useUserService();
  const { setErrorState } = useErrorStorage();
  const { user, setUiState } = useAuthUserStorage();

  const confirmUser = async (authCode: string) => {
    try {
      const data = await confirmUserRequest(user.getUsername(), authCode);

      if (data === 'SUCCESS') setUiState(null);
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  return { confirmUser };
}
