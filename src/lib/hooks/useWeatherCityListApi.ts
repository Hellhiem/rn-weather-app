import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { InAppNotification } from '@screens';
import { fetchWeatherCityList } from '@services';
import { APIWeatherCityList, RootStackParams } from '@types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

export const useWeatherCityListApi = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();
  const [filteredWeatherCityList, setFilteredWeatherCityList] = useState<
    APIWeatherCityList[]
  >([]);
  const [searchText, setSearchText] = useState<string>('');

  const { data, isLoading, refetch } = useQuery(
    'weatherCityList',
    fetchWeatherCityList,
    {
      onError: () => {
        InAppNotification.showErrorNotification({
          message: t('common:somethingWentWrong'),
        });
      },
    },
  );

  const uniqueCityList = useMemo(
    () =>
      data?.reduce(
        (
          previousValue: APIWeatherCityList[],
          currentValue: APIWeatherCityList,
        ) => {
          const exists = previousValue.some(
            item => item.city.name === currentValue.city.name,
          );

          if (!exists) {
            previousValue.push(currentValue);
          }

          return previousValue;
        },
        [],
      ),
    [data],
  );

  const weatherCityList = useMemo(
    () =>
      (searchText ? filteredWeatherCityList : uniqueCityList)?.sort((a, b) =>
        a.city.name.localeCompare(b.city.name),
      ),
    [data, filteredWeatherCityList],
  );

  const navigateToWeatherCityDetailsScreen = (city: string) => {
    const cityWeatherData = data?.filter(
      cityWeather => cityWeather.city.name === city,
    );

    if (cityWeatherData) {
      navigate('WeatherCityDetailsScreen', {
        cityWeatherData,
      });
    }
  };

  useEffect(() => {
    const filteredList = uniqueCityList?.filter(cityWeather => {
      const city = cityWeather.city.name.toLowerCase();

      return city.includes(searchText.toLowerCase());
    });

    setFilteredWeatherCityList(filteredList ?? []);
  }, [searchText]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  return {
    weatherCityList,
    isLoading,
    setSearchText,
    searchText,
    refetch,
    navigateToWeatherCityDetailsScreen,
  };
};
