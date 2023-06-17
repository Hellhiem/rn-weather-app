import { ElementsText } from '@components';
import { colors, useNetworkInformation } from '@lib';
import { NotificationConfig } from '@types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { create } from 'zustand';

type InAppNotificationState = {
  show: (config: NotificationConfig) => void;
};

const useInAppNotificationState = create<InAppNotificationState>(() => ({
  show: () => {},
}));

const getNotificationColor = (type?: NotificationConfig['type']): string => {
  switch (type) {
    case 'success':
      return colors.accentColors.darkGreen;
    case 'warning':
      return colors.accentColors.darkOrange;
    case 'error':
      return colors.accentColors.darkRed;
    default:
      return colors.accentColors.darkOrange;
  }
};

export const InAppNotification = () => {
  const { t } = useTranslation();
  const { isOnline } = useNetworkInformation();
  const safeAreaInsets = useSafeAreaInsets();
  const hiddenNotificationPosition = -(safeAreaInsets.top + 64);
  const displayedNotificationPosition = safeAreaInsets.top + 16;

  const topPosition = useSharedValue(hiddenNotificationPosition);

  const [notificationConfig, setNotificationConfig] =
    useState<NotificationConfig | null>(null);

  const animatedNotificationStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(topPosition.value, { duration: 500 }),
    };
  });

  useEffect(() => {
    if (!isOnline) {
      topPosition.value = displayedNotificationPosition;
      setNotificationConfig({
        message: t('common:youAreOffline'),
        type: 'error',
      });

      return;
    }

    topPosition.value = hiddenNotificationPosition;
  }, [isOnline]);

  useEffect(() => {
    useInAppNotificationState.setState({
      show: config => {
        topPosition.value = displayedNotificationPosition;
        setNotificationConfig(config);

        setTimeout(() => {
          topPosition.value = hiddenNotificationPosition;
        }, 4000);
      },
    });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedNotificationStyle]}>
      <View
        style={[
          styles.notificationContent,
          { backgroundColor: getNotificationColor(notificationConfig?.type) },
        ]}>
        <ElementsText bold>
          {notificationConfig?.message ?? t('common:somethingWentWrong')}
        </ElementsText>
      </View>
    </Animated.View>
  );
};

InAppNotification.showSuccessNotification = (config: NotificationConfig) => {
  useInAppNotificationState.getState().show({ ...config, type: 'success' });
};

InAppNotification.showWarningNotification = (config: NotificationConfig) => {
  useInAppNotificationState.getState().show({ ...config, type: 'warning' });
};

InAppNotification.showErrorNotification = (config: NotificationConfig) => {
  useInAppNotificationState.getState().show({ ...config, type: 'error' });
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    paddingHorizontal: 32,
  },
  notificationContent: {
    height: 64,
    backgroundColor: 'red',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
