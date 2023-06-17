import { arrowBack } from '@assets';
import { ElementsText, WeatherOverview } from '@components';
import { colors, useWeatherDetails } from '@lib';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { WeatherForecastList } from './components/WeatherForecastList';

export const WeatherCityDetailsScreen = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();
  const { weatherData } = useWeatherDetails();

  return weatherData.length > 0 ? (
    <View style={styles.container}>
      <WeatherOverview
        cityImageUri={weatherData[0].city.picture}
        cityName={weatherData[0].city.name}
        date={weatherData[0].date}
        temperature={weatherData[0].temp}
        units={weatherData[0].tempType}
        onBackPress={goBack}
      />
      <WeatherForecastList weatherForecast={weatherData} />
    </View>
  ) : (
    <View style={styles.noDataContainer}>
      <TouchableOpacity
        hitSlop={30}
        style={styles.backButton}
        onPress={goBack}
        testID="back-button-weather-overview">
        <Image source={arrowBack} />
      </TouchableOpacity>
      <ElementsText
        type="header"
        bold
        style={styles.noWeatherDetails}
        color={colors.accentColors.white}>
        {t('common:emptyList')}
      </ElementsText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accentColors.black,
  },
  noWeatherDetails: {
    textAlign: 'center',
  },
  backButton: {
    height: 64,
    justifyContent: 'center',
  },
  noDataContainer: {
    flex: 1,
    backgroundColor: colors.accentColors.black,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
});
