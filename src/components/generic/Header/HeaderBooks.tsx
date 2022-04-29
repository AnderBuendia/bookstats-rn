import type { FC } from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuthenticate } from '@Application/user/authenticate-user.use-case';
import { View, Text } from '@Components/generic/Theme/Themed';
import Colors from '@Lib/constants/Colors';

export type HeaderBooksProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const HeaderBooks: FC<HeaderBooksProps> = ({ navigation }) => {
  const { signOut } = useAuthenticate();
  const sourceImage = require('../../../../assets/images/book.png');

  const handlePressSignOut = async () => {
    await signOut();

    navigation.navigate('Home');
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('Books')}>
        <Image style={styles.headerImage} source={sourceImage} />
      </Pressable>

      <Text style={styles.headerTitle}>Bookstats</Text>

      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={handlePressSignOut}
      >
        <View style={styles.signOutButton}>
          <Text style={styles.signOutButton__text}>Sign Out</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  booksContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerImage: {
    marginLeft: 14,
    width: 36,
    height: 36,
  },
  headerTitle: {
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 22,
  },
  signOutButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: Colors.bg_300.background,
  },
  signOutButton__text: {
    fontSize: 15,
  },
  createBookButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: Colors.secondary_500.background,
  },
  createBookButton__text: {
    fontSize: 15,
  },
  booksView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderBooks;
