import { create } from "zustand";

export const useSearchValue = create((set) => ({
  searchValue: "",
  setSearchValue: (/** @type {string} */ newString) => set({ searchValue: newString }),
}));
