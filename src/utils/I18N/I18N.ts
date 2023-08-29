import { createI18n } from 'vue-i18n';

import messages from './messages';
import dateTimeFormats from './dateTimeFormats';
import numberFormats from './numberFormats';

/** 18N */
let locale = navigator.language;
try {
  locale = locale.split('-')[0];
} catch (error) {
  locale = 'en';
}
export const i18n = createI18n({
  locale,
  messages,
  dateTimeFormats,
  numberFormats,
});

export type SUPPORTED_LANGUAGE_CODES = 'en' | 'fr' | 'en-US' | 'fr-FR';

export const setLanguage = (language: SUPPORTED_LANGUAGE_CODES): void => {
  try {
    const newLocale = language.split('-')[0];
    i18n.global.locale = newLocale as any;
  } catch (error) {
    locale = 'en';
  }
};
