import { useAuthService } from '@Services/auth.service';
import { useErrorStorage } from '@Services/storage.service';

export function useAuthenticate() {
  const { loginRequest } = useAuthService();
  const { setErrorState } = useErrorStorage();

  const signIn = async (email: string, password: string) => {
    try {
      const data = await loginRequest(email, password);

      return data;
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  const signOut = () => {};

  return { signIn, signOut };
}
