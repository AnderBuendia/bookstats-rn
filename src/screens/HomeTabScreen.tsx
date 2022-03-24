import { StyleSheet } from 'react-native';
import EditScreenInfo from '@Components/EditScreenInfo';
import { Text, View } from '@Components/Themed';
import type { RootTabScreenProps } from '@Types/main.type';

export default function HomeTabScreen({
  navigation,
}: RootTabScreenProps<'HomeTab'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/HomeTabScreen.tsx" />
    </View>
  );
}

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
});
