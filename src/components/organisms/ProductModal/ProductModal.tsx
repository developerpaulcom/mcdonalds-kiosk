import { useTranslation } from 'react-i18next';
import './styles.scss';
import Button from '../../atoms/Button/Button';
import { drinks, type Drink, type MealSize, type Product } from '../../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import { EUR } from '../../../utils/formatCurrency';
import { mealPrice } from '../../../utils/mealPrice';

type ProductModalProps = {
  product: Product;
  onCancel: () => void;
  onAdd: (product: Product, meal?: { size: MealSize; drink: Drink }) => void;
}

function ProductModal({ product, onCancel, onAdd }: ProductModalProps) {
  const { t } = useTranslation();

  const sizes: MealSize[] = ["small", "medium", "large"]
  const [step, setStep] = useState<"choice" | "size" | "drink">("choice");
  const [size, setSize] = useState<MealSize | null>(null);

  return (
    <div className="productmodal">
      <div className="productmodal-content">
        {product.canBeMeal ? (
          <div>
            {step === "choice" ? (<>
              <h2 className='h1'>
                {t('meal.choice')}
              </h2>
              <div className="buttons buttons--meal-choice" data-align="center">
                <Button variant='panel' onClick={() => setStep("size")}>
                  <div>
                    <img src={product.imageMeal} alt={t(`productName.${product.key}`)} />
                    <h3>
                      {t('meal.addMeal')}
                    </h3>
                  </div>
                </Button>
                <ProductCard title={t('product.itemOnly')} product={product} onSelect={(product) => onAdd(product)} />
              </div>
            </>)
              : step === "size" ? (<>
                <h2 className='h1'>
                  {t('meal.size')}
                </h2>
                <div className="buttons" data-align="center">
                  {sizes.map((item) => (
                    <Button key={item} variant='panel' onClick={() => { setSize(item); setStep("drink") }}>
                      <div>
                        <img src={product.imageMeal} alt={t(`productName.${product.key}`)} />
                        <h3>
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </h3>
                        <p>
                          {EUR.format(mealPrice(product, item))}
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              </>)
                : (
                  <>
                    <h2 className='h1'>
                      {t('meal.drink')}
                    </h2>
                    <div className="productmodal-content_inner">
                      <div className="buttons" data-align="center">
                        {drinks.map((drink) => (
                          <Button key={drink.id} variant='panel' onClick={() => onAdd(product, { size: size!, drink })}>
                            <div>
                              <img src={drink.image} alt={t(`productName.${drink.key}`)} />
                              <h3>
                                {t(`productName.${drink.key}`)}
                              </h3>
                              <p>
                                {drink.surcharge ? `+ ${EUR.format(drink.surcharge)}` : null}
                              </p>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
          </div>
        ) : (
          <>
            <h2 className='h1'>
              {t(`productName.${product.key}`)}
            </h2>
            <div className="buttons buttons--single" data-align="center">
              <ProductCard product={product} onSelect={(product) => onAdd(product)} />
            </div>
          </>
        )}
        <div className="buttons buttons--single" data-align="center">
          <Button variant='outline' onClick={() => onCancel()}>
            {t('cancel')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
