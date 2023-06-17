import { magnifyingGlass } from '@assets';
import { colors } from '@lib';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

export const SearchBar: React.FC<TextInputProps> = props => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={magnifyingGlass}
        style={styles.magnifyingGlassIcon}
        resizeMode="contain"
      />
      <TextInput
        placeholder={t('common:search')}
        placeholderTextColor={colors.accentColors.white}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primaryAccent,
    borderRadius: 8,
    height: 38,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  magnifyingGlassIcon: {
    position: 'relative',
    top: 8,
    width: 24,
    height: 24,
    paddingHorizontal: 16,
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    color: colors.accentColors.white,
  },
});
