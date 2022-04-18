import type { FC, ReactNode } from 'react';
import { useState, createContext, useContext } from 'react';
import type { ErrorState } from '@Interfaces/config/errors.interface';

export type AppStoreProviderProps = {
  children: ReactNode;
};

const AppStoreContext = createContext<any>({});

export const useAppStore = () => {
  const context = useContext(AppStoreContext);

  if (context === undefined || !Object.keys(context).length) {
    throw new Error('useAppStore must be used within AppStoreProvider');
  }

  return context;
};

export const AppStoreProvider: FC<AppStoreProviderProps> = ({ children }) => {
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  const value = {
    errorState,
    setErrorState,
  };

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};

export default AppStoreContext;
