import catBeef from '../assets/images/categories/category-beef.png';
import catFries from '../assets/images/categories/category-fries-sauces.png';
import catShakes from '../assets/images/categories/category-shakes.png';

import fries from '../assets/images/products/fries.png';
import hamburger from '../assets/images/products/hamburger.png';
import hamburgerMeal from '../assets/images/products/hamburger-meal.png';
import bigMac from '../assets/images/products/big-mac.png';
import bigMacMeal from '../assets/images/products/big-mac-meal.png';
import bigTasty from '../assets/images/products/big-tasty.png';
import bigTastyMeal from '../assets/images/products/big-tasty-meal.png';
import chickenNuggets from '../assets/images/products/chicken-nuggets.png';
import chickenNuggetsMeal from '../assets/images/products/chicken-nuggets-meal.png';
import sauceFries from '../assets/images/products/frietsaus.png';
import colaZero from '../assets/images/products/cola-zero.png';
import cola from '../assets/images/products/cola.png';
import frappeCaramel from '../assets/images/products/frappe-karamel.png';
import frappeMoccaChocolate from '../assets/images/products/frappe-mokka-chocolade.png';

export type CategoryKey = "beef" | "fries" | "shakes";

export type ProductCategory = {
    key: CategoryKey;
    image: string;
}

export type Product = {
    id: number;
    key: string;
    price: number;
    image: string;
    category: CategoryKey;
    canBeMeal?: boolean;
    imageMeal?: string;
}

export const categories: ProductCategory[] = [
    { key: "beef", image: catBeef },
    { key: "fries", image: catFries },
    { key: "shakes", image: catShakes },
];

export type MealSize = "small" | "medium" | "large";

export const mealSurcharge: Record<MealSize, number> = {
    small: 2.5,
    medium: 3.0,
    large: 3.5,
};

export type Drink = {
    id: number;
    key: string;
    image: string;
    surcharge?: number;
}

export const drinks: Drink[] = [
    { id: 1, key: "cola", image: cola },
    { id: 2, key: "colaZero", image: colaZero },
    { id: 3, key: "frappeMocha", image: frappeMoccaChocolate, surcharge: 3 },
    { id: 4, key: "frappeCaramel", image: frappeCaramel, surcharge: 3 }
]

export const products: Product[] = [
    { id: 1, key: "bigMac", price: 4.95, image: bigMac, category: 'beef', canBeMeal: true, imageMeal: bigMacMeal },
    { id: 2, key: "hamburger", price: 2.45, image: hamburger, category: 'beef', canBeMeal: true, imageMeal: hamburgerMeal },
    { id: 3, key: "bigTasty", price: 6.45, image: bigTasty, category: 'beef', canBeMeal: true, imageMeal: bigTastyMeal },
    { id: 4, key: "fries", price: 2.95, image: fries, category: 'fries' },
    { id: 5, key: "nuggets", price: 4.75, image: chickenNuggets, category: 'fries', canBeMeal: true, imageMeal: chickenNuggetsMeal },
    { id: 6, key: "frySauce", price: 0.75, image: sauceFries, category: 'fries' },
    { id: 7, key: "frappeMocha", price: 3.95, image: frappeMoccaChocolate, category: 'shakes' },
    { id: 8, key: "frappeCaramel", price: 3.95, image: frappeCaramel, category: 'shakes' },
    { id: 9, key: "cola", price: 1.95, image: cola, category: 'shakes' },
    { id: 10, key: "colaZero", price: 1.95, image: colaZero, category: 'shakes' },
]

export type CartItem = {
    product: Product;
    quantity: number;
    meal?: {size: MealSize, drink: Drink}
}