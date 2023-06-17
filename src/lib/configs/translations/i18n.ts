import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { en } from './en';
import { pl } from './pl';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: RNLocalize.getLocales()[0].languageCode,
  resources: {
    en,
    pl,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
