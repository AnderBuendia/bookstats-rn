import { useAuthService } from '@Services/auth.service';
import { useErrorStorage, useAuthUserStorage } from '@Services/storage.service';

export function useAuthenticate() {
  const { loginRequest, logoutRequest } = useAuthService();
  const { setErrorState } = useErrorStorage();
  const { user, setUser } = useAuthUserStorage();

  const signIn = async (email: string, password: string) => {
    try {
      const data = await loginRequest(email, password);

      if (data) setUser(data);

      return data;
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  const signOut = async () => {
    try {
      await logoutRequest();

      setUser(null);
    } catch (error: any) {
      setErrorState({
        hasError: true,
        message: `${error.code}: ${error.message}`,
      });
    }
  };

  const isLogged =
    user && Boolean(user.getSignInUserSession()?.getAccessToken());

  return { signIn, signOut, isLogged };
}
