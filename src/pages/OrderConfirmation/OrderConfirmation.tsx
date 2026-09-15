import { useTranslation } from 'react-i18next';
import Button from '../../components/atoms/Button/Button';
import checkCircle from '../../assets/images/check-circle.svg';
import './styles.scss';

type OrderConfirmationProps = {
  orderNumber: number;
  onReset: () => void;
}

function OrderConfirmation({ orderNumber, onReset }: OrderConfirmationProps) {
  const { t } = useTranslation();

  return (
    <div className="orderconfirmation">
      <img src={checkCircle} alt="" width={96} height={96} />
      <p>{t('order.confirmedTitle')}
        <span>
          #{orderNumber}
        </span>
        </p>
      <Button onClick={onReset}>
        {t('order.newOrder')}
      </Button>
    </div>
  );
}

export default OrderConfirmation;
