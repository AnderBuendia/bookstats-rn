import type { FC, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useConfirmUser } from '@Application/user/confirm-user.use-case';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import Input from '@Components/Forms/Input';
import { FormMessages } from '@Enums/config/messages.enum';
import { UIState } from '@Enums/config/ui-state.enum';

export type ConfirmSignUpFormProps = {
  handleUiState: Dispatch<SetStateAction<UIState | null>>;
};

export type FormValuesConfirmSignUpForm = {
  authCode: string;
};

const SignUpForm: FC<ConfirmSignUpFormProps> = ({ handleUiState }) => {
  const { confirmUser } = useConfirmUser();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesConfirmSignUpForm>();

  const onSubmit = handleSubmit(async (data) => {
    const { authCode } = data;

    confirmUser(authCode);
  });

  return (
    <View>
      <Text style={styles.formTitle}>Confirm your Account</Text>

      <Controller
        name="authCode"
        control={control}
        rules={{
          required: FormMessages.AUTH_CODE_REQUIRED,
          minLength: {
            value: 6,
            message: FormMessages.MIN_AUTH_CODE_LENGTH,
          },
        }}
        defaultValue={''}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-authcode'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={value}
            textPlaceholder="Auth code"
            textContent="oneTimeCode"
          />
        )}
      />

      {errors.authCode && (
        <Text style={styles.errorMessage}>{errors.authCode.message}</Text>
      )}

      <Pressable style={styles.login__formButton} onPress={onSubmit}>
        <Text style={styles.login__formButton_text}>CONFIRM ACCOUNT</Text>
      </Pressable>

      <Pressable onPress={() => handleUiState(null)}>
        <Text style={styles.login__signUp_text}>Back to Login</Text>
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
