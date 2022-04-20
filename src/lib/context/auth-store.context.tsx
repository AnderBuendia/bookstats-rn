import type { FC, ReactNode } from 'react';
import { useState, createContext, useContext } from 'react';
import { UIState } from '@Enums/config/ui-state.enum';
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

export const AuthStoreProvider: FC<AuthStoreProviderProps> = ({ children }) => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [uiState, setUiState] = useState<UIState>(UIState.SIGN_IN);

  const value = {
    user,
    setUser,
    uiState,
    setUiState,
  };

  return (
    <AuthStoreContext.Provider value={value}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export default AuthStoreContext;
