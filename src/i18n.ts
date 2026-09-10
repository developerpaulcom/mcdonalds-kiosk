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
      category: { beef: "Rundvlees", fries: "Friet & sausjes", shakes: "Shakes & dranken" },
      cart: {
        title: "Je bestelling",
        empty: "Je mandje is nog leeg",
        total: "Totaal",
        checkout: "Bestellen",
      },
      product: {
        add: "Voeg toe",
        itemOnly: "Nee, aleen los product",
      },
      meal: {
        choice: "Wil je er een menu van maken?",
        size: "Kies jouw menu",
        drink: "Kies je drank",
        addMeal: "Maak er een menu van",
      }
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
      category: { beef: "Beef", fries: "Fries & sauces", shakes: "Shakes & drinks" },
      cart: {
        title: "Your order",
        empty: "Your basket is empty",
        total: "Total",
        checkout: "Order",
      },
      product: {
        add: "Add",
        itemOnly: "No, item only",
      },
      meal: {
        choice: "Would you like to make it a meal?",
        size: "Choose your meal",
        drink: "Choose your drink",
        addMeal: "Make it a meal",
      }
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
