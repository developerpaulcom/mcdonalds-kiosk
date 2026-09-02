import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Alle teksten van de app, per taal. Nieuwe teksten voeg je hier toe
// (zowel bij nl als en) en gebruik je daarna met t("start.title") o.i.d.
const resources = {
  nl: {
    translation: {
      start: {
        title: "Waar wil je vandaag eten?",
        eatIn: "Hier eten",
        takeAway: "Meenemen",
      },
      language: {
        title: "Taal",
        english: 'Engels',
        dutch: 'Nederlands'
      },
      cancel: "Annuleren",
    },
  },
  en: {
    translation: {
      start: {
        title: "Where will you be eating today?",
        eatIn: "Eat in",
        takeAway: "Take away",
      },
      language: {
        title: "Language",
        english: 'English',
        dutch: 'Dutch'
      },
      cancel: "Cancel",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "nl", // starttaal
  fallbackLng: "nl", // taal als een key in de gekozen taal ontbreekt
  interpolation: {
    escapeValue: false, // React ontsnapt zelf al tegen XSS
  },
});

export default i18n;
