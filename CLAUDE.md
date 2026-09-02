# McDonald's Kiosk — projectcontext

Leerproject van Paul: een McDonald's self-order bestelzuil in React. Paul is
HTML/CSS/JS-developer, nieuw in React en TypeScript. De vorige oefening (Audi S5
configurator) is af.

## Werkwijze (belangrijk)

**Paul schrijft zelf de code — jij bent tutor, geen codegenerator.** Leg uit,
geef stappen en hints, review wat hij maakt, wijs bugs aan en laat hém het
oplossen. Schrijf geen hele componenten voor hem tenzij hij daar expliciet om
vraagt. Hij vraagt ook actief om hulp bij **design**. Antwoord in het Nederlands.

## Tech & conventies

- **TypeScript** (Vite `react-ts`). Type props met een `type XProps = {...}`.
- **Atomic Design**: `src/components/atoms`, `/molecules`, `/organisms`, `src/pages`.
  Pragmatisch beginnen (atoms/organisms/pages); molecules/templates pas wanneer nodig.
- **Component-generator**: `npm run new <Naam> [atoms|molecules|organisms|pages]`
  (script: `scripts/new-component.mjs`) — maakt map + `.tsx` + `styles.scss` met
  boilerplate. Laag is meervoud (`organisms`, niet `organism`).
- **SCSS**: component-scoped `styles.scss` naast elk component; globale stijlen +
  variabelen in `src/assets/scss` (`@import` in `index.scss`, geladen via `main.tsx`).
- **Thema**: licht (witte achtergrond). Merkkleuren: `--red: #DA291C`, `--yellow: #FFC72C`.
- **Prijzen**: `EUR` formatter in `src/utils/formatCurrency.js` (`€ 4,95`).
- Type-check tussendoor met `npx tsc --noEmit`.

## Wat er staat

- **StartScreen** (page): fullscreen rood, gele arches-`Logo` (atom) + `Button`
  (atom, getypte props met `children` + optionele `onClick`). Werkt.
- **Navigatie**: in `App.tsx` een union type `type Screen = "start" | "menu"` +
  `useState<Screen>`, conditioneel `<StartScreen onStart=…>` of `<MenuPage>`.
- **MenuPage** (page): `.map()` over `products` (uit `src/data/products.ts`,
  getypt `Product[]`) → grid van `ProductCard` (organism). Rendert met echte
  productfoto's, EUR-prijzen, witte kaarten. Werkt en ziet er goed uit.

## Volgende stap: categorie-navigatie (in MenuPage)

1. Categorieën afleiden uit data: `const categories = [...new Set(products.map(p => p.category))]`
2. `const [activeCategory, setActiveCategory] = useState<string>(categories[0])`
3. Filteren: `const visibleProducts = products.filter(p => p.category === activeCategory)`
4. Tab-knoppen per categorie met `active`-class; daarna eventueel extraheren als
   `CategoryNav`-component.

Daarna: winkelmandje (items toevoegen + totaalprijs), besteloverzicht, bevestigen.

## Later: hardware "bestelling klaar"

Paul heeft een **Raspberry Pi 3**. Plan: één `notifyOrderReady()`-seam in de app;
begin met een browser-piepje (Web Audio), koppel later de Pi (lokaal servertje dat
GPIO/LED/buzzer schakelt) zonder de rest te wijzigen. React-app eerst afmaken.
