import type { CartItem } from '../../../data/products';
import './styles.scss';
import { EUR } from "../../../utils/formatCurrency";
import type { OrderType } from '../../../App';
import eatIn from "../../../assets/images/eat-in.svg";
import takeAway from "../../../assets/images/take-away.svg";
import { useTranslation } from 'react-i18next';

type CartProps = {
  cart: CartItem[];
  orderType: OrderType | null
}


function Cart({ cart, orderType }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const { t } = useTranslation();
  return (
    <aside className="cart">
      <img src={orderType === "eat-in" ? eatIn : takeAway} alt={orderType === "eat-in" ? t('start.eatIn') : t('start.takeAway')} width={40} height={40} />
      <h2 className="cart__title">Je bestelling</h2>

      {cart.length === 0 ? (
        <p className="cart__empty">Je mandje is nog leeg</p>
      ) : (
        <ul className="cart__list">
          {cart.map(item => (
            <li className="cart__item" key={item.product.id}>
              <img className="cart__item-img" src={item.product.image} alt={item.product.name} />
              <div className="cart__item-info">
                <span className="cart__item-name">{item.product.name}</span>
                <span className="cart__item-qty">{item.quantity} × {EUR.format(item.product.price)}</span>
              </div>
              <span className="cart__item-price">{EUR.format(item.product.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="cart__footer">
        <div className="cart__total">
          <span>Totaal</span>
          <span>{EUR.format(total)}</span>
        </div>
        <button className="btn btn--primary" disabled={cart.length === 0}>
          Bestellen
        </button>
      </div>
    </aside>
  );
}

export default Cart;
