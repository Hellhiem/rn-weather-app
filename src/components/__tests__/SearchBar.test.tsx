import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  it('should render component', () => {
    const { getByTestId } = render(<SearchBar testID="search-bar" />);

    expect(getByTestId('search-bar')).toBeOnTheScreen();
  });

  it('should contain proper value', () => {
    const { getByTestId } = render(
      <SearchBar testID="search-bar" value="test" />,
    );

    expect(getByTestId('search-bar').props.value).toBe('test');
  });
});
