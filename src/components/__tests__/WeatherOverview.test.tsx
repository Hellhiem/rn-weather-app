import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { WeatherOverview } from '../WeatherOverview';
import { SafeAreaProvider } from 'react-native-safe-area-context';

describe('WeatherOverview', () => {
  const weatherOverviewProps = {
    cityImageUri: '',
    cityName: 'Amsterdam',
    date: '2023-06-18T00:00:00+00:00',
    temperature: 294.78,
  };

  it('should render component with formatted details', () => {
    const { getByText } = render(
      <SafeAreaProvider
        initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <WeatherOverview {...weatherOverviewProps} units="K" />
      </SafeAreaProvider>,
    );

    expect(getByText('Amsterdam')).toBeOnTheScreen();
    expect(getByText('18.00.2023 02:00')).toBeOnTheScreen();
    expect(getByText('22.0')).toBeOnTheScreen();
  });
});
