// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // No necesitas escapar los valores traducidos
    }
  });

export default i18n;