import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {en} from '../../i18n/en'
import {th} from '../../i18n/th'
i18n
  .use(initReactI18next) //* passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'th'],
    fallbackLng: "en",
    resources: {
      en: {
        translation: en
      },
      th: {
        translation: th
      }
    },
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    // backend: {
    //   loadPath: '/i18n/{{lng}}/translation.json',
    // },
    react: { useSuspense: false }
  });

export const FormatMessage = (keyWord: string) => {
  const { t } = useTranslation();
  return  t(keyWord);
}