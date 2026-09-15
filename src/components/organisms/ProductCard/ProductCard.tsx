import type { Product } from '../../../data/products';
import './styles.scss';
import { EUR } from "../../../utils/formatCurrency";
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/Button/Button';

type ProductCardProps = {
  title?: string;
  product: Product;
  onSelect: (product: Product) => void;
}

function ProductCard({ title, product, onSelect }: ProductCardProps) {
  const { t } = useTranslation();
  const name = t(`productName.${product.key}`);
  return (
    <Button className="productcard btn btn--panel" role='button' onClick={() => onSelect(product)}>
      <div>
        <img src={product.image} alt={name} />
        <h3>{
          title ?? name
        }</h3>
      </div>
      <p>{EUR.format(product.price)}</p>
    </Button>
  );
}

export default ProductCard;
