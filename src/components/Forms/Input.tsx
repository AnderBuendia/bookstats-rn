import type { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import type { Noop } from 'react-hook-form';
import Colors from 'lib/constants/Colors';
import type { TextInputContentType } from '@Types/forms/forms.type';

export interface InputProps {
  testID: string;
  textContent: TextInputContentType;
  secureText?: boolean;
  value: string;
  textPlaceholder: string;
  handleChange: (...event: any[]) => void;
  handleBlur: Noop;
}

const Input: FC<InputProps> = ({
  testID,
  textContent,
  secureText,
  value,
  textPlaceholder,
  handleBlur,
  handleChange,
}) => {
  return (
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
