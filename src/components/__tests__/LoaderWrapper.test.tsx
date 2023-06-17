import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { LoaderWrapper } from '../LoaderWrapper';
import { ElementsText } from '../ElementsText';

describe('LoaderWrapper', () => {
  it('should render loader', () => {
    const { getByTestId } = render(
      <LoaderWrapper isLoading testID="loader">
        <ElementsText testID="children">text</ElementsText>
      </LoaderWrapper>,
    );

    expect(getByTestId('loader')).toBeOnTheScreen();
  });

  it('should render children elements', () => {
    const { getByTestId } = render(
      <LoaderWrapper isLoading={false} testID="loader">
        <ElementsText testID="children">text</ElementsText>
      </LoaderWrapper>,
    );

    expect(getByTestId('children')).toBeOnTheScreen();
  });
});
