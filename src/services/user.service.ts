import { Auth } from 'aws-amplify';

export function useUserService() {
  const createUserRequest = async (email: string, password: string) => {
    const data = await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    });

    console.log({ data });
    return data;
  };

  const confirmUserRequest = async (email: string, authCode: string) => {
    const data = await Auth.confirmSignUp(email, authCode);

    return data;
  };

  return { createUserRequest, confirmUserRequest };
}
