import type { FC } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { useCreateBookUseCase } from '@Application/book/create-book.use-case';
import { getColorStatus } from '@Domain/book.domain';
import { Text, View } from '@Components/generic/Theme/Themed';
import Colors from '@Lib/constants/Colors';
import Input from '@Components/Forms/Input';
import { FormMessages } from '@Enums/config/messages.enum';
import { BookStatus } from '@Enums/book-status.enum';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@Types/main.type';
import type { FormValuesCreateBookForm } from '@Types/forms/create-book-form.type';

export type CreateBookFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Books'>;
};

const CreateBookForm: FC<CreateBookFormProps> = ({ navigation }) => {
  const { createBook } = useCreateBookUseCase();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesCreateBookForm>({
    defaultValues: {
      pages: 0,
      status: BookStatus.TO_READ,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await createBook(data);

    if (response) navigation.navigate('Books');
  });

  return (
    <View style={styles.createBookFormContainer}>
      <Text style={styles.formTitle}>Add new book</Text>

      <Controller
        name="title"
        control={control}
        rules={{
          required: FormMessages.TITLE_REQUIRED,
        }}
        defaultValue={''}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-title'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={value}
            textPlaceholder="Title"
            textContent="none"
          />
        )}
      />

      {errors.title && (
        <Text style={styles.errorMessage}>{errors.title.message}</Text>
      )}

      <Controller
        name="author"
        control={control}
        rules={{
          required: FormMessages.AUTHOR_REQUIRED,
        }}
        defaultValue={''}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-author'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={value}
            textPlaceholder="Author"
            textContent="none"
          />
        )}
      />

      {errors.author && (
        <Text style={styles.errorMessage}>{errors.author.message}</Text>
      )}

      <Controller
        name="pages"
        control={control}
        defaultValue={0}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID={'input-pages'}
            handleChange={onChange}
            handleBlur={onBlur}
            value={String(value)}
            textPlaceholder="Author"
            textContent="none"
          />
        )}
      />

      {errors.pages && (
        <Text style={styles.errorMessage}>{errors.pages.message}</Text>
      )}

      <Controller
        name="status"
        control={control}
        defaultValue={BookStatus.TO_READ}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Picker
            style={[styles.selectStatus, getColorStatus(value)]}
            ref={ref}
            selectedValue={value}
            onValueChange={onChange}
          >
            {Object.values(BookStatus).map((element) => (
              <Picker.Item key={element} label={element} value={element} />
            ))}
          </Picker>
        )}
      />

      {errors.status && (
        <Text style={styles.errorMessage}>{errors.status.message}</Text>
      )}

      <Pressable style={styles.createBook__formButton} onPress={onSubmit}>
        <Text style={styles.createBook__formButton_text}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  createBookFormContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
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
  selectStatus: {
    width: 300,
    paddingHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 6,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  createBook__formButton: {
    width: 300,
    backgroundColor: Colors.secondary_700.background,
    textAlign: 'center',
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.secondary_300.background,
  },
  createBook__formButton_text: {
    fontWeight: 'bold',
  },
});

export default CreateBookForm;
