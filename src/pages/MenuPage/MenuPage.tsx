import './styles.scss';
import { products, type Product } from '../../data/products';
import ProductCard from '../../components/organisms/ProductCard/ProductCard';
import { useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/atoms/Logo/Logo';

type MenuPageProps = {
  onAddToCart: (product: Product) => void;
  onCancel: () => void;
}


function MenuPage({ onCancel, onAddToCart }: MenuPageProps) {
  const categories = [...new Set(products.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const visibleProducts = products.filter(p => p.category === activeCategory);
  const { t } = useTranslation();

  return (
    <div className="menu">
      <div className='categories'>
        <Logo />
        {categories.map(category => (
          <button key={category} onClick={() => setActiveCategory(category)} className={`category ${category === activeCategory ? "active" : ""}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="menupage">
        {visibleProducts.map(product =>
        (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        )
        )}
      </div>
      <Button onClick={onCancel} variant='outline'>
        {t('cancel')}
      </Button>
    </div>
  );
}

export default MenuPage;
