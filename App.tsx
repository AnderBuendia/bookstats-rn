import Amplify from 'aws-amplify';
import awsconfig from './aws-exports.js';
Amplify.configure({
  ...awsconfig,
  Analytics: { disabled: true },
});
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from '@Lib/hooks/useCachedResources';
import useColorScheme from '@Lib/hooks/useColorScheme';
import Navigation from '@Navigation/index';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
