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
      <div className="cart__title">
        {orderType && (<img src={orderType === "eat in" ? eatIn : takeAway} alt={orderType === "eat in" ? t('start.eatIn') : t('start.takeAway')} width={30} height={30} />)}
        <h2>{t('cart.title')}</h2>
      </div>

      {cart.length === 0 ? (
        <p className="cart__empty">{t('cart.empty')}</p>
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
          <span>{t('cart.total')}</span>
          <span>{EUR.format(total)}</span>
        </div>
        <button className="btn btn--primary" disabled={cart.length === 0}>
          {t('cart.checkout')}
        </button>
      </div>
    </aside>
  );
}

export default Cart;
