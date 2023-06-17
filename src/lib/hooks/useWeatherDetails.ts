import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '@types';
import { useMemo } from 'react';

export const useWeatherDetails = () => {
  const route: RouteProp<RootStackParams, 'WeatherCityDetailsScreen'> =
    useRoute();

  const weatherData = useMemo(
    () =>
      route.params.cityWeatherData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      }),
    [route],
  );

  return { weatherData };
};
