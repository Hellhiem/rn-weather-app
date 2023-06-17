import { ElementsText } from '@components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WeatherCityList } from './components/WeatherCityList';
import { colors } from '@lib';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ElementsText type="header" bold>
          {t('homeScreen:headerTitle')}
        </ElementsText>

        <WeatherCityList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    backgroundColor: colors.primary,
    padding: 16,
    flex: 1,
  },
});
