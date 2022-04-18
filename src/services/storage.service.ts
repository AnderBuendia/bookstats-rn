import { useAuthStore } from '@Lib/context/auth-store.context';
import { useAppStore } from '@Lib/context/app-store.context';
import type {
  AuthUserStorageService,
  ErrorStorageService,
} from '@Interfaces/ports/storage.interface';

export const useAuthUserStorage = (): AuthUserStorageService => {
  return useAuthStore();
};

export const useErrorStorage = (): ErrorStorageService => {
  return useAppStore();
};
