import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

const reHydrateStore = () => {
  if (localStorage.getItem("cart") !== null) {
    return JSON.parse(localStorage.getItem("cart")!);
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: reHydrateStore(),
  },
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
