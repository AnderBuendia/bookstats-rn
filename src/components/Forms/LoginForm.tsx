import type { FC } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Colors from '@Lib/constants/Colors';
import { Text, View } from '@Components/generic/Theme/Themed';
import Input from '@Components/Forms/Input';

export type FormValuesLoginForm = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesLoginForm>();

  const onSubmit = handleSubmit(async (data) => console.log(data));
  return (
    <View>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        defaultValue={''}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-username'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={value}
            textPlaceholder="Email"
            textContent="emailAddress"
            error={errors.email}
          />
        )}
      />

      {errors.email && <Text>{errors.email}</Text>}

      <Controller
        name="password"
        defaultValue={''}
        control={control}
        rules={{ minLength: 7 }}
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
});

export default LoginForm;
