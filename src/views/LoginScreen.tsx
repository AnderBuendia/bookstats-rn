import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import type { FC, Dispatch, SetStateAction } from 'react';
import { Image, Modal, Platform, Pressable, StyleSheet } from 'react-native';
import Colors from 'lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import LoginForm from '@Components/Forms/LoginForm';

export type LoginScreenProps = {
  showLoginModal: boolean;
  handleShowLoginModal: Dispatch<SetStateAction<boolean>>;
};

const LoginScreen: FC<LoginScreenProps> = ({
  showLoginModal,
  handleShowLoginModal,
}) => {
  return (
    <Modal visible={showLoginModal}>
      <View style={styles.header}>
        <Pressable onPress={() => handleShowLoginModal(!showLoginModal)}>
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

        <LoginForm />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  headerImage: {
    marginLeft: 10,
    width: 36,
    height: 36,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textHomeButton: {},
});

export default LoginScreen;
