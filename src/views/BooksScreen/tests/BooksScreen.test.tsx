import { Button, Text, TextInput, View } from 'react-native';
import { render, fireEvent, waitFor } from '@Lib/utils/test.utils';
import BooksScreen from '@Views/BooksScreen';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Test Auth Screen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('Should show Books title text', () => {
    render(<BooksScreen {...props} />);

    expect(/Bookstats/i).toMatchSnapshot();
  });
});
