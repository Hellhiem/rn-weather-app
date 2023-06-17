import './lib/configs/translations';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { InAppNotification } from '@screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <InAppNotification />
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
