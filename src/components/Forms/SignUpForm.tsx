import type { FC, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useCreateUser } from '@Application/user/create-user.use-case';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import Input from '@Components/Forms/Input';
import { FormMessages } from '@Enums/config/messages.enum';
import { UIState } from '@Enums/config/ui-state.enum';

export type SignUpFormProps = {
  handleUiState: Dispatch<SetStateAction<UIState | null>>;
};

export type FormValuesSignUpForm = {
  email: string;
  password: string;
};

const SignUpForm: FC<SignUpFormProps> = ({ handleUiState }) => {
  const { createUser } = useCreateUser();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesSignUpForm>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

    createUser(email, password);
  });

  return (
    <View>
      <Text style={styles.formTitle}>Sign Up</Text>

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
        <Text style={styles.login__formButton_text}>SIGN UP</Text>
      </Pressable>

      <Pressable onPress={() => handleUiState(null)}>
        <Text style={styles.login__signUp_text}>
          You have an account? Log in
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

export default SignUpForm;
