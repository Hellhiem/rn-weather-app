/* eslint-disable react-native/no-unused-styles */
import { colors } from '@lib';
import React from 'react';
import { TextProps } from 'react-native';
import { StyleSheet, Text } from 'react-native';

interface PropsType extends TextProps {
  children: string | number;
  type?: 'body' | 'header' | 'subHeader';
  color?: string;
  bold?: boolean;
}

export const ElementsText: React.FC<PropsType> = ({
  children,
  type = 'body',
  color = colors.accentColors.white,
  bold,
  style,
  ...props
}) => {
  return (
    <Text
      style={[styles[type], style, { color }, bold && styles.bold]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
  },
  header: {
    fontSize: 32,
  },
  subHeader: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
});
