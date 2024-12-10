import { create } from "zustand";
import "../types";

export const useSearchValue = create((set) => ({
  searchValue: "",
  setSearchValue: (/** @type {string} */ newString) =>
    set({ searchValue: newString }),
}));

export const useAddShop = create((set) => ({
  addShop: [],
  setAddShop: (/** @type {ClothesObject[]} */ newObject) =>
    set({ addShop: newObject }),
}));
