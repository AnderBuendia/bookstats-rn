import type { Dispatch, SetStateAction } from 'react';
import { UIState } from '@Enums/config/ui-state.enum';
import type { ErrorState } from '@Interfaces/config/errors.interface';
import type { CognitoUser } from '@aws-amplify/auth';

export interface AuthUserStorageService {
  user: CognitoUser;
  uiState: UIState;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
  setUiState: Dispatch<SetStateAction<UIState | null>>;
}

export interface ErrorStorageService {
  errorState: ErrorState;
  setErrorState: Dispatch<SetStateAction<ErrorState>>;
}
