import { mealSurcharge, type CartItem, type Drink, type MealSize, type Product } from "../data/products";

export const mealPrice = (p: Product, s: MealSize, d?:Drink) => p.price + mealSurcharge[s] + (d?.surcharge ?? 0);

export const unitPrice = (item: CartItem) =>
  item.meal ? mealPrice(item.product, item.meal.size, item.meal.drink) : item.product.price;