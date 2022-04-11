import { render } from '@testing-library/react-native';
import { MonoText } from '@Components/generic/Theme/StyledText';

describe('Example Text', () => {
  it('Sum 1 + 1 equals 2', () => {
    expect(1 + 1).toEqual(2);
  });

  it(`renders correctly`, () => {
    render(<MonoText>Snapshot test!</MonoText>);

    expect(/Snapshot test!/i).toMatchSnapshot();
  });
});
