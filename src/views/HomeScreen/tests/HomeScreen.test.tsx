import { Button, Text, TextInput, View } from 'react-native';
import { render, fireEvent, waitFor } from '@Lib/utils/test.utils';
import HomeScreen from '@Views/HomeScreen';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    name: 'Home',
  },
  ...props,
});

describe('Test Home Screen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('Should show Bookstats title text', () => {
    render(<HomeScreen {...props} />);

    expect(/Bookstats/i).toMatchSnapshot();
  });
});
