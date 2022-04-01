import { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@Components/Themed';
import ModalScreen from '@Views/ModalScreen';
import type { RootTabScreenProps } from '@Types/main.type';
import Colors from '@Lib/constants/Colors';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bookstats</Text>

        <Pressable
          style={styles.loginButton}
          onPress={() => setShowLoginModal(true)}
        >
          <Text style={styles.textLoginButton}>Sign in for Bookstats</Text>
        </Pressable>
      </View>

      <ModalScreen
        showLoginModal={showLoginModal}
        handleShowLoginModal={setShowLoginModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 36,
  },
  loginButton: {
    padding: 14,
    borderRadius: 6,
    backgroundColor: Colors.primary_500.background,
  },
  textLoginButton: {
    fontSize: 18,
  },
});
