import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { FC, useEffect } from 'react';
import { Image, Platform, Pressable, StyleSheet } from 'react-native';
import { useAuthUserStorage } from '@Services/storage.service';
import { useErrorStorage } from '@Services/storage.service';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import LoginForm from '@Components/Forms/LoginForm';
import SignUpForm from '@Components/Forms/SignUpForm';
import ConfirmSignUpForm from '@Components/Forms/ConfirmSignUpForm';
import { UIState } from '@Enums/config/ui-state.enum';
import type { RootStackScreenProps } from '@Types/main.type';

export type AuthScreenProps = RootStackScreenProps<'Auth'>;

const AuthScreen: FC<AuthScreenProps> = ({ navigation }) => {
  const { uiState, setUiState, user } = useAuthUserStorage();
  const { errorState, setErrorState } = useErrorStorage();
  const sourceImage = require('../../../assets/images/book.png');

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setErrorState({ hasError: false }),
      4000
    );

    return () => clearTimeout(timeoutId);
  }, [errorState]);

  const uiStateForm = (uiState: UIState) => {
    switch (uiState) {
      case UIState.SIGN_IN:
        return <LoginForm navigation={navigation} handleUiState={setUiState} />;
      case UIState.CONFIRM_SIGN_UP:
        return <ConfirmSignUpForm handleUiState={setUiState} />;
      case UIState.SIGN_UP:
        return <SignUpForm handleUiState={setUiState} />;
      default:
        return <LoginForm navigation={navigation} handleUiState={setUiState} />;
    }
  };

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

        <Image style={styles.headerImage} source={sourceImage} />
        <Text style={styles.headerTitle}>Bookstats</Text>
      </View>

      <View style={styles.formContainer}>
        {errorState.hasError && (
          <Text style={styles.errorMessage_text}>{errorState.message}</Text>
        )}

        {uiState && uiStateForm(uiState)}
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
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
  errorMessage_text: {
    position: 'absolute',
    top: 0,
    textAlign: 'center',
    width: 350,
    padding: 2,
    borderWidth: 2,
    borderColor: Colors.error_300.background,
    borderRadius: 6,
    color: Colors.error_100.text,
    backgroundColor: Colors.error_700.background,
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthScreen;
