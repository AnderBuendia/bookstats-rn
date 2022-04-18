import type { FC } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Colors from '@Lib/constants/Colors';
import { HomeBooks } from '@Lib/utils/fakeApiBooks';
import { Text, View } from '@Components/generic/Theme/Themed';
import Card from '@Components/generic/Card';
import type { RootStackScreenProps } from '@Types/main.type';

export type HomeProps = RootStackScreenProps<'Home'>;

const HomeScreen: FC<HomeProps> = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bookstats</Text>

        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => navigation.navigate('Auth')}
        >
          <View style={styles.home__loginButton}>
            <Text style={styles.loginButton__text}>Sign in for Bookstats</Text>
          </View>
        </Pressable>

        <View style={styles.indexTable}>
          <View style={styles.indexTable__header}>
            <View
              style={[
                styles.indexTable__header__button,
                { backgroundColor: Colors.error_500.background },
              ]}
            ></View>
            <View
              style={[
                styles.indexTable__header__button,
                { backgroundColor: Colors.warning_500.background },
              ]}
            ></View>
            <View
              style={[
                styles.indexTable__header__button,
                { backgroundColor: Colors.secondary_300.background },
              ]}
            ></View>
          </View>

          <View style={styles.indexTable__container}>
            <Card books={HomeBooks} route={route} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  home__loginButton: {
    padding: 14,
    borderRadius: 6,
    backgroundColor: Colors.primary_500.background,
  },
  loginButton__text: {
    fontSize: 18,
  },
  indexTable: {
    marginTop: 18,
    textAlign: 'center',
    width: '86%',
    borderRadius: 6,
    backgroundColor: Colors.bg_300.background,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  indexTable__header: {
    flexDirection: 'row',
    padding: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: Colors.secondary_700.background,
  },
  indexTable__header__button: {
    marginRight: 6,
    height: 16,
    width: 16,
    borderRadius: 80,
  },
  indexTable__container: {
    padding: 8,
    backgroundColor: Colors.bg_300.background,
  },
});

export default HomeScreen;
