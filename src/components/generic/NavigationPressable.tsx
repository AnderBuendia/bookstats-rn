import type { FC } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@Components/generic/Theme/Themed';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@Types/main.type';

import Colors from '@Lib/constants/Colors';

export type NavigationPressableProps = {
  navigationTo: () => void;
  title: string;
};

const NavigationPressable: FC<NavigationPressableProps> = ({
  navigationTo,
  title,
}) => {
  return (
    <>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={navigationTo}
      >
        <View style={styles.home__loginButton}>
          <Text style={styles.loginButton__text}>{title}</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  home__loginButton: {
    padding: 14,
    borderRadius: 6,
    backgroundColor: Colors.primary_500.background,
  },
  loginButton__text: {
    fontSize: 18,
  },
});

export default NavigationPressable;
