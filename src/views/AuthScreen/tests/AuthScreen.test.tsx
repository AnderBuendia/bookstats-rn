import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../../../aws-exports';
Amplify.configure(awsconfig);
import { Button, Text, TextInput, View } from 'react-native';
import { render, fireEvent, waitFor } from '@Lib/utils/test.utils';
import AuthScreen from '@Views/AuthScreen';
import { UIState } from '@Enums/config/ui-state.enum';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

Auth.signIn = jest.fn().mockImplementation(() => {
  return true;
});

describe('Test Auth Screen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('Should show Login title text', async () => {
    const providerProps = {
      uiState: UIState.SIGN_IN,
      errorState: { hasError: false },
      setUiState: () => {},
    };

    render(<AuthScreen {...props} />, { providerProps });

    expect(/Login/i).toMatchSnapshot();
  });
});
