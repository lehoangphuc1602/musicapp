import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationEN from '../../../static/Language/en.json';
import translationJA from '../../../static/Language/ja.json';
import translationVIE from '../../../static/Language/vie.json';

const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJA
  },
  vie: {
    translation: translationVIE
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng:'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;