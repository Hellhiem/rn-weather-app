import { ElementsText, ForecastIcon } from '@components';
import { formatTemperatureToCelsius } from '@lib';
import { APIWeatherCityList } from '@types';
import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type PropsType = {
  forecast: APIWeatherCityList;
};

export const ForecastItem: React.FC<PropsType> = ({ forecast }) => {
  const celsiusTemperature = formatTemperatureToCelsius(
    forecast.temp,
    forecast.tempType,
  );

  return (
    <View style={styles.container}>
      <ElementsText>
        {format(new Date(forecast.date), 'dd.mm.yyyy HH:mm')}
      </ElementsText>
      <ForecastIcon temperature={Number(celsiusTemperature)} />
      <View style={styles.temperature}>
        <ElementsText type="subHeader" bold>
          {celsiusTemperature}
        </ElementsText>
        <ElementsText>C</ElementsText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperature: {
    flexDirection: 'row',
  },
});
