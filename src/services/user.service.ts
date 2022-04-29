import { Auth } from 'aws-amplify';

export function useUserService() {
  const createUserRequest = async (email: string, password: string) => {
    try {
      const data = await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });

      return data;
    } catch (error: any) {
      throw error;
    }
  };

  const confirmUserRequest = async (email: string, authCode: string) => {
    try {
      const data = await Auth.confirmSignUp(email, authCode);

      return data;
    } catch (error: any) {
      throw error;
    }
  };

  return { createUserRequest, confirmUserRequest };
}
