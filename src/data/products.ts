import fries from '../assets/images/products/fries.jpg';
import hamburger from '../assets/images/products/hamburger.jpg';
import bigMac from '../assets/images/products/big-mac.jpg';
import bigTasty from '../assets/images/products/big-tasty.jpg';
import chickenNuggets from '../assets/images/products/chicken-nuggets.jpg';
import sauceFries from '../assets/images/products/frietsaus.jpg';
import frappeOreo from '../assets/images/products/frappe-oreo.jpg';
import frappeMoccaChocolade from '../assets/images/products/frappe-mokka-chocolade.jpg';

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const products: Product[] = [
    { id: 1, name: "Big Mac", price: 4.95, image: bigMac, category: "Rundvlees" },
    { id: 2, name: "Hamburger", price: 2.45, image: hamburger, category: "Rundvlees" },
    { id: 3, name: "Big Tasty", price: 6.45, image: bigTasty, category: "Rundvlees" },
    { id: 4, name: "Friet", price: 2.95, image: fries, category: "Friet, Fingerfood & Sausjes" },
    { id: 5, name: "Chicken McNuggets", price: 4.75, image: chickenNuggets, category: "Friet, Fingerfood & Sausjes" },
    { id: 6, name: "Frietsaus", price: 0.75, image: sauceFries, category: "Friet, Fingerfood & Sausjes" },
    { id: 7, name: "Ice Frappé Mokka-Chocolade", price: 3.95, image: frappeMoccaChocolade, category: "Milkshakes & Ijzige dranken" },
    { id: 8, name: "Ice Frappé Oreo", price: 3.95, image: frappeOreo, category: "Milkshakes & Ijzige dranken" },
]

export type CartItem = {
  product: Product;
  quantity: number;
}