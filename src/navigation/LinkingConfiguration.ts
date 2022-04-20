import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import type { RootStackParamList } from '@Types/main.type';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        screens: {
          HomeScreen: 'home',
          AuthScreen: 'auth',
        },
      },
      Books: {
        screens: {
          BooksScreen: 'books',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
