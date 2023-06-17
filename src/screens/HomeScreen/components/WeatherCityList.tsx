import {
  WeatherTile,
  ElementsText,
  LoaderWrapper,
  SearchBar,
  Separator,
} from '@components';
import { useWeatherCityListApi } from '@lib';
import { APIWeatherCityList } from '@types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

const ITEM_SPACING = 16;

export const WeatherCityList = () => {
  const { t } = useTranslation();
  const {
    weatherCityList,
    isLoading,
    setSearchText,
    refetch,
    navigateToWeatherCityDetailsScreen,
  } = useWeatherCityListApi();

  const renderListItem: ListRenderItem<APIWeatherCityList> = ({
    item,
    index,
  }) => {
    return (
      <WeatherTile
        city={item.city.name}
        testID={`details-button-${index}`}
        key={index}
        onPress={() => navigateToWeatherCityDetailsScreen(item.city.name)}
        imageUrl={item.city.picture}
      />
    );
  };

  return (
    <>
      <SearchBar onChangeText={setSearchText} testID="weather-search-bar" />
      <LoaderWrapper isLoading={isLoading}>
        <FlatList
          onRefresh={refetch}
          refreshing={isLoading}
          data={weatherCityList}
          renderItem={renderListItem}
          ItemSeparatorComponent={() => <Separator height={ITEM_SPACING} />}
          removeClippedSubviews
          contentContainerStyle={styles.contentContainerStyles}
          indicatorStyle="white"
          ListEmptyComponent={() => (
            <ElementsText type="header" bold style={styles.noWeatherInfo}>
              {t('common:emptyList')}
            </ElementsText>
          )}
        />
      </LoaderWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyles: {
    paddingVertical: ITEM_SPACING,
  },
  noWeatherInfo: {
    textAlign: 'center',
  },
});
