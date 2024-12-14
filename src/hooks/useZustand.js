import { create } from "zustand";
import { persist } from "zustand/middleware";

/** @typedef {{ idProduct: string; name: string; price: number; quantity: number; }} CartProduct */

export const useSearchValue = create((set) => ({
  searchValue: "",
  /** @param {string} newString */
  setSearchValue: (newString) => set({ searchValue: newString }),
}));

export const useCart = create(
  persist(
    (set) => ({
      /** @type {CartProduct[]} */
      cart: [],

      /** @param {CartProduct} product */
      addToCart: (product) =>
        set((/** @type {{ cart: CartProduct[]; }} */ state) => ({
          cart: [...state.cart, product],
        })),

      /** @param {CartProduct} product */
      removeFromCart: (product) =>
        set((/** @type {{ cart: CartProduct[]; }} */ state) => ({
          cart: state.cart.filter(
            (item) => item.idProduct !== product.idProduct
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
