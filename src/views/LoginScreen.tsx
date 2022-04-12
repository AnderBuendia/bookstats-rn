import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import type { FC } from 'react';
import { Image, Platform, Pressable, StyleSheet } from 'react-native';
import Colors from 'lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import LoginForm from '@Components/Forms/LoginForm';
import type { RootStackScreenProps } from '@Types/main.type';

export type LoginScreenProps = RootStackScreenProps<'Login'>;

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <AntDesign
            name="arrowleft"
            size={24}
            color={Colors.light.background}
          />
        </Pressable>

        <Image
          style={styles.headerImage}
          source={require('../../assets/images/book.png')}
        />
        <Text style={styles.headerTitle}>Bookstats</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>
        <LoginForm navigation={navigation} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    fontSize: 18,
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
