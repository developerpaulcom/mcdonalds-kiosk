import type { CartItem } from '../../../data/products';
import './styles.scss';
import { EUR } from "../../../utils/formatCurrency";
import type { OrderType } from '../../../App';
import eatIn from "../../../assets/images/eat-in-color.svg";
import takeAway from "../../../assets/images/take-away-color.svg";
import { useTranslation } from 'react-i18next';
import { unitPrice } from '../../../utils/mealPrice';
import Button from '../../atoms/Button/Button';
import { useState } from 'react';

type CartProps = {
  cart: CartItem[];
  orderType: OrderType | null;
  onRemove: (index: number)=> void;
  onCheckout: ()=>void;
}


function Cart({ cart, orderType, onRemove, onCheckout }: CartProps) {
  const total = cart.reduce((sum, item) => sum + unitPrice(item) * item.quantity, 0);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <aside className={`cart ${open && cart.length > 0 ? "cart--open" : ""}`}>
      <button className="cart__title" onClick={() => setOpen(o => !o)} aria-expanded={open && cart.length > 0}>
        {orderType && (<img src={orderType === "eat in" ? eatIn : takeAway} alt={orderType === "eat in" ? t('start.eatIn') : t('start.takeAway')} width={30} height={30} />)}
        <h2>{t('cart.title')}</h2>
        <span className="cart__chevron" aria-hidden="true">▾</span>
      </button>

      {cart.length === 0 ? (
        <p className="cart__empty">{t('cart.empty')}</p>
      ) : (
        <ul className="cart__list">
          {cart.map((item, index) => (
            <li className="cart__item" key={index}>
              <Button variant='icon' onClick={() => onRemove(index)} aria-label={t('cart.remove')}>
                X
              </Button>
              <img className="cart__item-img" src={item.meal ? item.product.imageMeal : item.product.image} alt={t(`productName.${item.product.key}`)} />
              <div className="cart__item-info">
                <span className="cart__item-name">{t(`productName.${item.product.key}`)} {item.meal && t('meal.label')}</span>
                {item.meal && (
                  <span className="cart__item-meal">
                    {item.meal.size.charAt(0).toUpperCase() + item.meal.size.slice(1)} · {t(`productName.${item.meal.drink.key}`)}
                  </span>
                )}
                <span className="cart__item-qty">{item.quantity} × {EUR.format(unitPrice(item))}</span>
              </div>
              <span className="cart__item-price">{EUR.format(unitPrice(item) * item.quantity)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="cart__footer">
        <div className="cart__total">
          <span>{t('cart.total')}</span>
          <span>{EUR.format(total)}</span>
        </div>
        <Button disabled={cart.length === 0} onClick={onCheckout}>
          {t('cart.checkout')}
        </Button>
      </div>
    </aside>
  );
}

export default Cart;
