import type { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import type { Noop, FieldError } from 'react-hook-form';
import Colors from 'lib/constants/Colors';
import { Text } from '@Components/generic/Theme/Themed';
import type { TextInputContentType } from '@Types/form.type';

export interface InputProps {
  testID: string;
  textContent: TextInputContentType;
  secureText?: boolean;
  value: string;
  error?: FieldError;
  textPlaceholder: string;
  handleChange: (...event: any[]) => void;
  handleBlur: Noop;
}

const Input: FC<InputProps> = ({
  testID,
  textContent,
  secureText,
  value,
  error,
  textPlaceholder,
  handleBlur,
  handleChange,
}) => {
  return (
    <>
      <TextInput
        style={styles.input}
        testID={testID}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={textPlaceholder}
        placeholderTextColor={Colors.bg_100.text}
        secureTextEntry={secureText}
        textContentType={textContent}
      />

      {error && <Text>{error.message}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 38,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: Colors.bg_300.background,
    color: Colors.dark.text,
    marginBottom: 14,
    borderRadius: 8,
  },
  textPlaceholder: {
    color: '#fff',
  },
});

export default Input;
