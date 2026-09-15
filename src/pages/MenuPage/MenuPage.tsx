import './styles.scss';
import { products, categories, type Product, type CategoryKey, type MealSize, type Drink } from '../../data/products';
import ProductCard from '../../components/organisms/ProductCard/ProductCard';
import { useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/atoms/Logo/Logo';
import ProductModal from '../../components/organisms/ProductModal/ProductModal';

type MenuPageProps = {
  onCancel: () => void;
  onSelect: (product: Product, meal?: { size: MealSize, drink: Drink }) => void;
}


function MenuPage({ onCancel, onSelect }: MenuPageProps) {

  const [activeCategory, setActiveCategory] = useState<CategoryKey>(categories[0].key);
  const visibleProducts = products.filter(p => p.category === activeCategory);
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="menu">
      <div className='menu--left'>
        <Logo />
        <div className='categories'>
          {categories.map(category => (
            <button key={category.key} onClick={() => setActiveCategory(category.key)} className={`category ${category.key === activeCategory ? "active" : ""}`}>
              <div>
                <img src={category.image} alt={t(`category.${category.key}`)} width={50} height={50} />
                <span>{t(`category.${category.key}`)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="menu--right">
        <div className="menupage">
          {visibleProducts.map(product =>
          (
            <ProductCard key={product.id} product={product} onSelect={() => setSelectedProduct(product)} />
          )
          )}
        </div>
        <Button onClick={onCancel} variant='outline'>
          {t('cancel')}
        </Button>
      </div>
      {selectedProduct && <ProductModal onAdd={(product, meal) => { onSelect(product, meal); setSelectedProduct(null) }} product={selectedProduct} onCancel={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default MenuPage;
