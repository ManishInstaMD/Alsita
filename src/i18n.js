// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

//  Fix 1: `supportedLngs` should be declared as a normal variable
const supportedLngs = [
  "en", "hi", "bn", "gu", "kn", "ml", "mr", "or", "pa", "ta", "te"
];

//  Fix 2: `whiteList` is deprecated, use `supportedLngs` instead
const detectionOptions = {
  order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],
  caches: ['localStorage', 'cookie']
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs, //  correct way to define supported languages
    detection: detectionOptions,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // ensures loading from public/locales
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
