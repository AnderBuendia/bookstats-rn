import type { FC, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useAuthenticate } from '@Application/user/authenticate-user.use-case';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import Input from '@Components/Forms/Input';
import { UIState } from '@Enums/config/ui-state.enum';
import { FormMessages } from '@Enums/config/messages.enum';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@Types/main.type';
import type { FormValuesLoginForm } from '@Types/forms/login-form.type';

export type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Auth'>;
  handleUiState: Dispatch<SetStateAction<UIState | null>>;
};

const LoginForm: FC<LoginFormProps> = ({ navigation, handleUiState }) => {
  const { signIn } = useAuthenticate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesLoginForm>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    const response = await signIn(email, password);

    console.log({ response });

    if (response) navigation.navigate('Books');
  });

  return (
    <View>
      <Text style={styles.formTitle}>Login</Text>

      <Controller
        name="email"
        control={control}
        rules={{
          required: FormMessages.EMAIL_REQUIRED,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: FormMessages.EMAIL_FORMAT_INVALID,
          },
        }}
        defaultValue={''}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-username'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={value}
            textPlaceholder="Email"
            textContent="emailAddress"
          />
        )}
      />

      {errors.email && (
        <Text style={styles.errorMessage}>{errors.email.message}</Text>
      )}

      <Controller
        name="password"
        defaultValue={''}
        control={control}
        rules={{
          required: FormMessages.PASSWORD_REQUIRED,
          minLength: {
            value: 7,
            message: FormMessages.MIN_PASSWORD_LENGTH,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-password'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={value}
            textPlaceholder="Password"
            secureText={true}
            textContent="password"
          />
        )}
      />

      {errors.password && (
        <Text style={styles.errorMessage}>{errors.password.message}</Text>
      )}

      <Pressable style={styles.login__formButton} onPress={onSubmit}>
        <Text style={styles.login__formButton_text}>LOGIN</Text>
      </Pressable>

      <Pressable onPress={() => handleUiState(UIState.SIGN_UP)}>
        <Text style={styles.login__signUp_text}>
          You don't have an account? Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  login__formButton: {
    marginBottom: 10,
    backgroundColor: Colors.dark.background,
    color: Colors.dark.text,
    textAlign: 'center',
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.light.background,
  },
  login__formButton_text: {
    fontWeight: 'bold',
  },
  errorMessage: {
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    color: Colors.error_700.text,
    backgroundColor: Colors.error_100.background,
    borderLeftWidth: 4,
    borderColor: Colors.error_700.text,
  },
  login__signUp_text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.bg_100.text,
  },
});

export default LoginForm;
