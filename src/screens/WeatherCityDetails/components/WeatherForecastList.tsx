import { colors } from '@lib';
import { APIWeatherCityList } from '@types';
import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { ForecastItem } from './ForecastItem';
import { ElementsText, Separator } from '@components';
import { useTranslation } from 'react-i18next';

type PropsType = {
  weatherForecast: APIWeatherCityList[];
};

export const WeatherForecastList: React.FC<PropsType> = ({
  weatherForecast,
}) => {
  const { t } = useTranslation();

  const renderItem: ListRenderItem<APIWeatherCityList> = ({ item }) => {
    return <ForecastItem forecast={item} />;
  };

  return (
    <>
      <ElementsText type="subHeader" bold style={styles.forecastHeader}>
        {t('common:forecast')}
      </ElementsText>
      <View style={styles.container}>
        <FlatList
          renderItem={renderItem}
          data={weatherForecast}
          indicatorStyle="white"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator height={8} />}
          ListEmptyComponent={() => (
            <ElementsText type="subHeader" bold style={styles.noWeatherInfo}>
              {t('common:emptyListForecast')}
            </ElementsText>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 8,
    backgroundColor: colors.primaryAccent,
    borderRadius: 8,
  },
  noWeatherInfo: {
    textAlign: 'center',
  },
  forecastHeader: {
    color: colors.primaryAccent,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
