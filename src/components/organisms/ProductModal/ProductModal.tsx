import { useTranslation } from 'react-i18next';
import './styles.scss';
import Button from '../../atoms/Button/Button';
import type { Drink, MealSize, Product } from '../../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';

type ProductModalProps = {
  product: Product;
  onCancel: () => void;
  onAdd: (product: Product, meal?: { size: MealSize; drink: Drink }) => void;
}

function ProductModal({ product, onCancel, onAdd }: ProductModalProps) {
  const { t } = useTranslation();
  const [step, setStep] = useState<"choice" | "size" | "drink">("choice");
  const [size, setSize] = useState<MealSize | null>(null);

  return (
    <div className="productmodal">
      <div className="productmodal-content">
        <div>
          {step === "choice" ? (<>
            <h2 className='h1'>
              {t('meal.choice')}
            </h2>
            <div className="buttons" data-align="center">
              <Button variant='panel' onClick={()=>setStep("size")}>
                <img src={product.imageMeal } alt={product.name} />
                <h3>
                  {t('meal.addMeal')}
                </h3>
              </Button>
              <ProductCard title={t('product.itemOnly')} product={product} onSelect={(product) => onAdd(product)} />
            </div>
          </>)
            : step === "size" ? (<>
              <h2 className='h1'>
                {t('meal.size')}
              </h2>
              <div className="buttons" data-align="center">
                <ProductCard title={t('product.itemOnly')} product={product} onSelect={(product) => onAdd(product)} />
              </div>
            </>)
              : (
                <>
                  <h2 className='h1'>
                    {t('meal.drink')}
                  </h2>
                  <div className="buttons" data-align="center">
                    <ProductCard title={t('product.itemOnly')} product={product} onSelect={(product) => onAdd(product)} />
                  </div>
                </>
              )}
        </div>
        <Button variant='outline' onClick={() => onCancel()}>
          {t('cancel')}
        </Button>
      </div>
    </div>
  );
}

export default ProductModal;
