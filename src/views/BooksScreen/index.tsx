import type { FC } from 'react';
import { View, Text } from '@Components/generic/Theme/Themed';

export interface BooksScreenProps {}

const BooksScreen: FC<BooksScreenProps> = () => {
  return (
    <View>
      <Text>Hello from BooksScreen</Text>
    </View>
  );
};

export default BooksScreen;
