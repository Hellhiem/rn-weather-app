import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, WeatherCityDetailsScreen } from '@screens';
import { RootStackParams } from '@types';

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WeatherCityDetailsScreen"
        component={WeatherCityDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
