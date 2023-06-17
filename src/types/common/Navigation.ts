import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { APIWeatherCityList } from '@types';

export enum Route {
  HomeScreen = 'HomeScreen',
  WeatherCityDetailsScreen = 'WeatherCityDetailsScreen',
}

/* Params of navigators */

export type RootStackParams = {
  HomeScreen: undefined;
  WeatherCityDetailsScreen: {
    cityWeatherData: APIWeatherCityList[];
  };
};

/* Utility types for screens */

export type RootStackNavigationProp<R extends keyof RootStackParams> =
  NativeStackNavigationProp<RootStackParams, R>;

export type RootStackRouteProp<R extends keyof RootStackParams> = RouteProp<
  RootStackParams,
  R
>;

export interface RootStackScreenProps<R extends keyof RootStackParams> {
  navigation: RootStackNavigationProp<R>;
  route: RootStackRouteProp<R>;
}

export type NavigationParams = {
  navigation: NavigationProp<RootStackParams>;
};
