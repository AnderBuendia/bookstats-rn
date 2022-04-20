import type { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { AppStoreContext } from '@Lib/context/app-store.context';
import AuthStoreContext from 'lib/context/auth-store.context';
import { UIState } from '@Enums/config/ui-state.enum';
import type { ErrorState } from '@Interfaces/config/errors.interface';

export interface RenderOptions {
  providerProps?: {
    uiState?: UIState | null;
    errorState?: ErrorState;
    setUiState?: () => void;
    setErrorState?: () => void;
  };
  renderOptions?: {};
}

const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  const authProviderValues = {
    uiState: options.providerProps?.uiState,
    setUiState: options.providerProps?.setUiState,
  };

  const appProviderValues = {
    errorState: options.providerProps?.errorState,
    setErrorState: options.providerProps?.setErrorState,
  };

  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <AuthStoreContext.Provider value={authProviderValues}>
        <AppStoreContext.Provider value={appProviderValues}>
          {children}
        </AppStoreContext.Provider>
      </AuthStoreContext.Provider>
    ),
    ...options.renderOptions,
  });
};

export * from '@testing-library/react-native';
// override render export
export { customRender as render };
