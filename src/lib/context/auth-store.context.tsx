import type { FC, ReactNode } from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import { UIState } from '@Enums/config/ui-state.enum';
import { Auth } from 'aws-amplify';
import type { CognitoUser } from '@aws-amplify/auth';

export type AuthStoreProviderProps = {
  children: ReactNode;
};

export const AuthStoreContext = createContext<any>({});

export const useAuthStore = () => {
  const context = useContext(AuthStoreContext);

  if (context === undefined || !Object.keys(context).length) {
    throw new Error('useAuthStore must be used within AuthStoreProvider');
  }

  return context;
};

// TODO: Think in include a userInfo state to store user email
export const AuthStoreProvider: FC<AuthStoreProviderProps> = ({ children }) => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [uiState, setUiState] = useState<UIState>(UIState.SIGN_IN);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();

    if (user) setUser(user);
  }

  const value = {
    user,
    setUser,
    uiState,
    setUiState,
  };

  console.log({ user });

  return (
    <AuthStoreContext.Provider value={value}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export default AuthStoreContext;
