import type { FC } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import Input from '@Components/Forms/Input';
import { FormMessages } from '@Enums/config/messages.enum';
import type { RootStackParamList } from '@Types/main.type';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export type FormValuesLoginForm = {
  email: string;
  password: string;
};

const LoginForm: FC<LoginScreenProps> = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesLoginForm>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    navigation.navigate('Books');
  });

  return (
    <View>
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
            message: FormMessages.MIN_LENGTH,
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
    </View>
  );
};

const styles = StyleSheet.create({
  login__formButton: {
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
});

export default LoginForm;
