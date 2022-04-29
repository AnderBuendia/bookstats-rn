import type { FC } from 'react';
import CreateBookForm from '@Components/Forms/CreateBookForm';
import type { RootStackScreenProps } from '@Types/main.type';

export type CreateBookScreenProps = RootStackScreenProps<'Books'>;

const CreateBookScreen: FC<CreateBookScreenProps> = ({ navigation }) => {
  return <CreateBookForm navigation={navigation} />;
};

export default CreateBookScreen;
