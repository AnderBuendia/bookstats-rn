import type { FC, Dispatch, SetStateAction } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, Platform, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@Components/generic/Theme/Themed';

export type ModalScreenProps = {
  showLoginModal: boolean;
  handleShowLoginModal: Dispatch<SetStateAction<boolean>>;
};

const ModalScreen: FC<ModalScreenProps> = ({
  showLoginModal,
  handleShowLoginModal,
}) => {
  return (
    <Modal visible={showLoginModal}>
      <View style={styles.container}>
        <Text style={styles.title}>Modal</Text>
        <Pressable
          style={styles.homeButton}
          onPress={() => handleShowLoginModal(!showLoginModal)}
        >
          <Text style={styles.textHomeButton}>Back to Home</Text>
        </Pressable>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  homeButton: {},
  textHomeButton: {},
});

export default ModalScreen;
