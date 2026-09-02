import { useState } from "react"
import StartScreen from "./pages/StartScreen/StartScreen"
import MenuPage from "./pages/MenuPage/MenuPage";
import Cart from "./components/organisms/Cart/Cart";
import { type CartItem, type Product } from "./data/products";

type Screen = "start" | "menu";
export type OrderType = "eat in" | "take away";

function App() {

  const [orderType, setOrderType] = useState<OrderType | null>(null)
  const [screen, setScreen] = useState<Screen>("start");
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [
        ...prev, { product, quantity: 1 }
      ]
    })
  }

  return (
    <>
      {screen === "start" && <StartScreen onStart={(type) => { setOrderType(type); setScreen("menu") }} />}
      {screen === "menu" && (
        <div className="menu-layout">
          <MenuPage onAddToCart={addToCart} onCancel={() => setScreen("start")} />
          <Cart cart={cart} orderType={orderType} />
        </div>
      )}
    </>
  )
}

export default App
