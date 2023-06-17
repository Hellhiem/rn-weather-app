import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
} from 'react-native';

interface PropsType extends ActivityIndicatorProps {
  isLoading: boolean;
  children: ReactNode;
}

export const LoaderWrapper: React.FC<PropsType> = ({
  isLoading,
  children,
  ...props
}) => {
  return isLoading ? (
    <ActivityIndicator size="large" style={styles.loader} {...props} />
  ) : (
    children
  );
};

const styles = StyleSheet.create({
  loader: {
    padding: 16,
  },
});
