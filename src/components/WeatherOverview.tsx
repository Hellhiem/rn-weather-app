import { colors, constants, formatTemperatureToCelsius } from '@lib';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ElementsText } from './ElementsText';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import { format } from 'date-fns';
import { TemperatureTypes } from '@types';
import { arrowBack } from '@assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type PropsType = {
  cityImageUri: string;
  cityName: string;
  date: string;
  temperature: number;
  units: TemperatureTypes;
  onBackPress?: () => void;
};

export const WeatherOverview: React.FC<PropsType> = ({
  cityImageUri,
  cityName,
  date,
  temperature,
  units,
  onBackPress,
}) => {
  const { t } = useTranslation();
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <FastImage style={styles.container} source={{ uri: cityImageUri }}>
      <View style={styles.contentContainer}>
        {onBackPress ? (
          <TouchableOpacity
            hitSlop={30}
            style={[styles.backButton, { marginTop: safeAreaInsets.top }]}
            onPress={onBackPress}
            testID="back-button-weather-overview">
            <Image source={arrowBack} />
          </TouchableOpacity>
        ) : null}
        <ElementsText type="header" bold color={colors.accentColors.white}>
          {t('weatherDetailsScreen:headerTitle')}
        </ElementsText>
        <ElementsText color={colors.accentColors.white}>
          {format(new Date(date), 'dd.mm.yyyy HH:mm')}
        </ElementsText>
        <View style={styles.weatherDetails}>
          <ElementsText type="subHeader" bold color={colors.accentColors.white}>
            {cityName}
          </ElementsText>
          <View style={styles.temperature}>
            <ElementsText type="header" bold color={colors.accentColors.white}>
              {formatTemperatureToCelsius(temperature, units)}
            </ElementsText>
            <ElementsText bold color={colors.accentColors.white}>
              C
            </ElementsText>
          </View>
        </View>
      </View>
    </FastImage>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.accentColors.black05,
    height: constants.deviceDimensions.height / 2,
    paddingHorizontal: 16,
  },
  container: {
    height: constants.deviceDimensions.height / 2,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
  },
  weatherDetails: {
    alignItems: 'center',
    marginTop: 64,
  },
  temperature: {
    flexDirection: 'row',
  },
  backButton: {
    justifyContent: 'center',
  },
});
