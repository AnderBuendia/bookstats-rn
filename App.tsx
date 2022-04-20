import type { FC } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure({
  ...awsconfig,
  Analytics: { disabled: true },
});
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthStoreProvider } from '@Lib/context/auth-store.context';
import { AppStoreProvider } from '@Lib/context/app-store.context';
import useCachedResources from '@Lib/hooks/useCachedResources';
import useColorScheme from '@Lib/hooks/useColorScheme';
import Navigation from '@Navigation/index';

const App: FC = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthStoreProvider>
          <AppStoreProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </AppStoreProvider>
        </AuthStoreProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
