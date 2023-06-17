import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '@lib';
import { ElementsText } from './ElementsText';
import FastImage from 'react-native-fast-image';

type PropsType = {
  imageUrl: string;
  city: string;
  onPress: () => void;
  testID?: string;
};

export const WeatherTile: React.FC<PropsType> = ({
  city,
  imageUrl,
  onPress,
  testID,
}) => {
  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <FastImage
        style={styles.background}
        source={{
          uri: imageUrl,
        }}>
        <View style={styles.contentContainer}>
          <ElementsText bold numberOfLines={1} type="header">
            {city}
          </ElementsText>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 80,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingHorizontal: 16,
    backgroundColor: colors.accentColors.black05,
  },
});
