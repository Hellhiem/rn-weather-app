import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { WeatherTile } from '../WeatherTile';

describe('WeatherTile', () => {
  const weatherTileProps = {
    city: 'Budapest',
    imageUrl: '',
    onPress: jest.fn(),
    testID: 'details-button',
  };

  it('should render component with text', () => {
    const { getByText } = render(<WeatherTile {...weatherTileProps} />);

    expect(getByText('Budapest')).toBeOnTheScreen();
  });

  it('should call onPress when button is clicked', () => {
    const { getByTestId } = render(<WeatherTile {...weatherTileProps} />);

    const detailsButton = getByTestId('details-button');
    fireEvent.press(detailsButton);
    expect(weatherTileProps.onPress).toHaveBeenCalled();
  });
});
