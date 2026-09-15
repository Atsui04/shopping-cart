export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

export const PRODUCTS: Product[] = [
  { id: 1, title: "Mechanical Keyboard", price: 120, category: "Electronics" },
  { id: 2, title: "Wireless Mouse", price: 60, category: "Electronics" },
  { id: 3, title: "USB-C Cable", price: 15, category: "Accessories" },
  { id: 4, title: "Monitor Stand", price: 45, category: "Furniture" },
];
