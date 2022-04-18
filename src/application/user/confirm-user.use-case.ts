import { useUserService } from '@Services/user.service';
import { useAuthUserStorage, useErrorStorage } from '@Services/storage.service';

export function useConfirmUser() {
  const { confirmUserRequest } = useUserService();
  const { setErrorState } = useErrorStorage();
  const { user, setUiState } = useAuthUserStorage();

  const confirmUser = async (authCode: string) => {
    try {
      console.log({ user });
      const data = await confirmUserRequest(user.getUsername(), authCode);

      console.log({ data });

      // // TODO ADD DATA TO USER STATE THROUGH SETSTATE
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
