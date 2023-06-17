import { APIWeatherCityList } from '@types';
import { betterFetch } from '../betterFetch';
import { weatherCityListEndpoint } from './endpoints';

export const fetchWeatherCityList = () => {
  return betterFetch<APIWeatherCityList[]>('GET', weatherCityListEndpoint);
};
