import { iceCube, sunCloud, sun } from '@assets';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

type PropsType = {
  temperature: number;
};

export const ForecastIcon: React.FC<PropsType> = ({ temperature }) => {
  const getIconSource = () => {
    if (temperature < 0) {
      return iceCube;
    }

    if (temperature > 0 && temperature < 16) {
      return sunCloud;
    }

    return sun;
  };

  return <Image source={getIconSource()} style={styles.iconStyle} />;
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 34,
    height: 34,
  },
});
