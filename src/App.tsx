import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./App.scss"
import StartScreen from "./pages/StartScreen/StartScreen"
import MenuPage from "./pages/MenuPage/MenuPage";
import Cart from "./components/organisms/Cart/Cart";
import { type CartItem, type Drink, type MealSize, type Product } from "./data/products";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";

type Screen = "start" | "menu" | "processing" | "confirmed";
export type OrderType = "eat in" | "take away";

function App() {

  const { t } = useTranslation();
  const [orderType, setOrderType] = useState<OrderType | null>(null)
  const [screen, setScreen] = useState<Screen>("start");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  function addToCart(product: Product, meal?: { size: MealSize; drink: Drink }) {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && !item.meal);
      if (meal) {
        return [
          ...prev, { product, quantity: 1, meal }
        ]
      }
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [
        ...prev, { product, quantity: 1 }
      ]
    })
  }

  function removeFromCart(index: number) {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  function checkout() {
    setScreen("processing");
    setOrderNumber(Math.floor(100 + Math.random() * 900)); // 100–999
    setTimeout(() => setScreen("confirmed"), 2000);         // na 2s: geplaatst
  }

  function resetOrder() {
    setCart([]);
    setOrderType(null);
    setOrderNumber(null);
    setScreen("start");
  }
  return (
    <>
      {screen === "start" && <StartScreen onStart={(type) => { setOrderType(type); setScreen("menu") }} />}
      {screen === "menu" && (
        <div className="menu-layout">
          <MenuPage onSelect={addToCart} onCancel={() => setScreen("start")} />
          <Cart onRemove={removeFromCart} cart={cart} orderType={orderType} onCheckout={checkout} />
        </div>
      )}
      {screen === "processing" && (
        <div className="processing">
          <div className="spinner" role="status" aria-label={t('order.processing')} />
          <p className="processing__text">{t('order.processing')}</p>
        </div>
      )}
      {screen === "confirmed" && orderNumber !== null && (
        <OrderConfirmation orderNumber={orderNumber} onReset={resetOrder} />
      )}
    </>
  )
}

export default App
