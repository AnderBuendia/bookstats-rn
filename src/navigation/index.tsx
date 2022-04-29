import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { useAuthenticate } from '@Application/user/authenticate-user.use-case';
import LinkingConfiguration from '@Navigation/LinkingConfiguration';
import AuthScreen from '@Views/AuthScreen';
import NotFoundScreen from '@Views/NotFoundScreen';
import BooksScreen from '@Views/BooksScreen';
import CreateBookScreen from '@Views/CreateBookScreen';
import HomeScreen from '@Views/HomeScreen';
import type { RootStackParamList } from '@Types/main.type';
import HeaderBooks from '@Components/generic/Header/HeaderBooks';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isLogged } = useAuthenticate();

  console.log({ isLogged });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {isLogged && (
        <>
          <Stack.Screen
            name="Books"
            component={BooksScreen}
            options={{
              header: ({ navigation }) => (
                <HeaderBooks navigation={navigation} />
              ),
            }}
          />

          <Stack.Screen
            name="CreateBook"
            component={CreateBookScreen}
            options={{
              header: ({ navigation }) => (
                <HeaderBooks navigation={navigation} />
              ),
            }}
          />
        </>
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
