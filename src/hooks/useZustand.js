import { create } from "zustand";
import "../types";

export const useSearchValue = create((set) => ({
  searchValue: "",
  setSearchValue: (/** @type {string} */ newString) =>
    set({ searchValue: newString }),
}));

export const useCart = create((set) => ({
  /** @type {CartProduct[]} */
  cart: [],

  /**  @param {CartProduct} product */
  addToCart: (product) =>
    set((/** @type {{ cart: CartProduct[]; }} */ state) => ({
      cart: [...state.cart, product],
    })),

  /**  @param {CartProduct} product */
  removeFromCart: (product) =>
    set((/** @type {{ cart: CartProduct[]; }} */ state) => ({
      cart: state.cart.filter((item) => item.idProduct !== product.idProduct),
    })),

  clearCart: () => set({ cart: [] }),
}));
