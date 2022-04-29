import { Auth } from 'aws-amplify';

export function useAuthService() {
  const loginRequest = async (email: string, password: string) => {
    try {
      const data = await Auth.signIn(email, password);

      return data;
    } catch (error: any) {
      throw error;
    }
  };

  const logoutRequest = async () => {
    try {
      await Auth.signOut();
    } catch (error: any) {
      throw error;
    }
  };

  return { loginRequest, logoutRequest };
}
