import { useAuthStore } from '@Lib/context/auth-store.context';
import { useAppStore } from '@Lib/context/app-store.context';
import type {
  AuthUserStorageService,
  BooksStorageService,
  ErrorStorageService,
} from 'interfaces/ports/storage-service.interface';

export const useAuthUserStorage = (): AuthUserStorageService => {
  return useAuthStore();
};

export const useBooksStorage = (): BooksStorageService => {
  return useAppStore();
};

export const useErrorStorage = (): ErrorStorageService => {
  return useAppStore();
};
