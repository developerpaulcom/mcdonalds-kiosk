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
    name: string;
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
    name: string;
    image: string;
}

export const drinks: Drink[] = [
    { id: 1, name: "Cola", image: cola },
    { id: 2, name: "Cola Zero", image: colaZero },
    { id: 3, name: "Ice Frappé Mokka-Chocolade", image: frappeMoccaChocolate },
    { id: 4, name: "Ice Frappé Karamel", image: frappeCaramel }
]

export const products: Product[] = [
    { id: 1, name: "Big Mac", price: 4.95, image: bigMac, category: 'beef', canBeMeal: true, imageMeal: bigMacMeal },
    { id: 2, name: "Hamburger", price: 2.45, image: hamburger, category: 'beef', canBeMeal: true, imageMeal: hamburgerMeal },
    { id: 3, name: "Big Tasty", price: 6.45, image: bigTasty, category: 'beef', canBeMeal: true, imageMeal: bigTastyMeal },
    { id: 4, name: "Friet", price: 2.95, image: fries, category: 'fries' },
    { id: 5, name: "Chicken McNuggets", price: 4.75, image: chickenNuggets, category: 'fries', canBeMeal: true, imageMeal: chickenNuggetsMeal },
    { id: 6, name: "Frietsaus", price: 0.75, image: sauceFries, category: 'fries' },
    { id: 7, name: "Ice Frappé Mokka-Chocolade", price: 3.95, image: frappeMoccaChocolate, category: 'shakes' },
    { id: 8, name: "Ice Frapvpé Karamel", price: 3.95, image: frappeCaramel, category: 'shakes' },
    { id: 9, name: "Cola", price: 1.95, image: cola, category: 'shakes' },
    { id: 10, name: "Cola Zero", price: 1.95, image: colaZero, category: 'shakes' },
]

export type CartItem = {
    product: Product;
    quantity: number;
    meal?: {size: MealSize, drink: Drink}
}