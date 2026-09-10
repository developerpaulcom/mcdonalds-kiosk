import type { Product } from '../../../data/products';
import './styles.scss';
import { EUR } from "../../../utils/formatCurrency";

type ProductCardProps = {
  title?: string;
  product: Product;
  onSelect: (product: Product) => void;
}

function ProductCard({ title, product, onSelect }: ProductCardProps) {
  return (
    <div className="productcard" onClick={() => onSelect(product)}>
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{
          title ? title : product.name
        }</h3>
      </div>
      <p>{EUR.format(product.price)}</p>
      {/* <button className='btn btn--primary' >
        {t('product.add')}
      </button> */}
    </div>
  );
}

export default ProductCard;
