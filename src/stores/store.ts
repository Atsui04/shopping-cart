import { create } from "zustand";
import type { CartProduct, Product } from "../data/products";
import { persist, devtools } from "zustand/middleware";

type State = {
  cart: CartProduct[];
};

type Actions = {
  addToCart: (product: Product) => void;
  deleteFromCart: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  clearCart: () => void;
};

type CartStore = State & Actions;

export const useCartStore = create(
  devtools(
    persist<CartStore>(
      (set) => ({
        cart: [],
        addToCart: (product) =>
          set((state) => {
            const isExisting = state.cart.find(
              (item) => item.id === product.id,
            );

            if (isExisting) {
              return {
                cart: state.cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                ),
              };
            }

            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }),

        deleteFromCart: (id) =>
          set((state) => {
            return {
              cart: state.cart.filter((item) => item.id !== id),
            };
          }),

        incrementItem: (id) =>
          set((state) => {
            return {
              cart: state.cart.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }),

        decrementItem: (id) =>
          set((state) => {
            return {
              cart: state.cart
                .map((item) =>
                  item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
                )
                .filter((item) => item.quantity > 0),
            };
          }),

        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "shopping-cart-storage",
      },
    ),
  ),
);
