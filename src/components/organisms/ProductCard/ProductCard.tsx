import type { Product } from '../../../data/products';
import './styles.scss';
import { EUR } from "../../../utils/formatCurrency";


type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="productcard">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{EUR.format(product.price)}</p>
      <button className='btn btn--primary' onClick={() => onAddToCart(product)}>
        Voeg toe
      </button>
    </div>
  );
}

export default ProductCard;
