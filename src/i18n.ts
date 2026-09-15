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
      category: { beef: "Rundvlees", fries: "Friet & Fingerfood", shakes: "Shakes & Dranken" },
      productName: {
        bigMac: "Big Mac",
        hamburger: "Hamburger",
        bigTasty: "Big Tasty",
        fries: "Friet",
        nuggets: "6 Chicken McNuggets",
        frySauce: "Frietsaus",
        frappeMocha: "Ice Frappé Mokka-Chocolade",
        frappeCaramel: "Ice Frappé Karamel",
        cola: "Cola",
        colaZero: "Cola Zero",
      },
      cart: {
        title: "Je bestelling",
        empty: "Je mandje is nog leeg",
        remove: "Verwijder",
        total: "Totaal",
        checkout: "Bestellen",
      },
      product: {
        add: "Voeg toe",
        itemOnly: "Nee, alleen los product",
      },
      meal: {
        choice: "Wil je er een menu van maken?",
        size: "Kies jouw menu",
        drink: "Kies je drank",
        addMeal: "Maak er een menu van",
        label: "Menu",
      },
      order: {
        processing: "Je bestelling wordt verwerkt…",
        confirmedTitle: "Bedankt voor je bestelling!",
        number: "Je bestelnummer",
        newOrder: "Nieuwe bestelling",
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
      category: { beef: "Beef", fries: "Fries & Fingerfood", shakes: "Shakes & Drinks" },
      productName: {
        bigMac: "Big Mac",
        hamburger: "Hamburger",
        bigTasty: "Big Tasty",
        fries: "Fries",
        nuggets: "6 Chicken McNuggets",
        frySauce: "Fries sauce",
        frappeMocha: "Ice Frappé Mocha-Chocolate",
        frappeCaramel: "Ice Frappé Caramel",
        cola: "Cola",
        colaZero: "Cola Zero",
      },
      cart: {
        title: "Your order",
        empty: "Your basket is empty",
        remove: "Remove",
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
        label: "Menu",
      },
      order: {
        processing: "Processing your order…",
        confirmedTitle: "Thanks for your order!",
        number: "Your order number",
        newOrder: "New order",
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
