import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import type { RootStackParamList } from '@Types/main.type';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: 'home',
      Auth: 'auth',
      Books: 'books',
      CreateBook: 'create-book',
      NotFound: '*',
    },
  },
};

export default linking;
