import { useUserService } from '@Services/user.service';
import { useAuthUserStorage, useErrorStorage } from '@Services/storage.service';
import { UIState } from '@Enums/config/ui-state.enum';

export function useCreateUserUseCase() {
  const { createUserRequest } = useUserService();
  const { setErrorState } = useErrorStorage();
  const { setUser, setUiState } = useAuthUserStorage();

  const createUser = async (email: string, password: string) => {
    try {
      const data = await createUserRequest(email, password);

      if (data) {
        setUiState(UIState.CONFIRM_SIGN_UP);
        setUser(data.user);
      }
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  return { createUser };
}
