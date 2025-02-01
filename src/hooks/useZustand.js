import { create } from "zustand";
import { persist } from "zustand/middleware";

/** @typedef {{ idProduct: string; name: string; price: number; quantity: number; }} CartProduct */

export const useSearchValue = create((set) => ({
  searchValue: "",
  /** @param {string} newString */
  setSearchValue: (newString) => {
    set({ searchValue: newString });

    setTimeout(() => {
      set({ searchValue: "" });
    }, 2000);
  },
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

      /** @param {string} ID */
      removeFromCart: (ID) =>
        set((/** @type {{ cart: CartProduct[]}} */ state) => ({
          cart: state.cart.filter((item) => item.idProduct !== ID),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
