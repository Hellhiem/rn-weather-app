import React from 'react';
import { View, ViewProps } from 'react-native';

interface PropsType extends ViewProps {
  width?: number;
  height?: number;
}

export const Separator: React.FC<PropsType> = ({ width, height, ...props }) => {
  return <View style={{ width, height }} {...props} testID="separator" />;
};
