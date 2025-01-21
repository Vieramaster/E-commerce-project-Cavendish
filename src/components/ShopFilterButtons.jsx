import { FilterNavButton } from "./buttons/FilterNavButton";
import { SortIco } from "./SVGs/icons/SortIco";
import { FilterIco } from "./SVGs/icons/FilterIco";
import React from "react";

/**
 * @param {{toggleFilterMenu:React.MouseEventHandler,
 * toggleShopMenu:boolean,
 * onChangeFilter:React.ChangeEventHandler
 * }} props
 * */
export const ShopFIlterButtons = ({
  toggleFilterMenu,
  toggleShopMenu,
  onChangeFilter,
}) => {
  return (
    <>
      <FilterNavButton
        aria-expanded={toggleShopMenu}
        aria-controls="filter-options"
        id="filter-button"
        onClick={toggleFilterMenu}
      >
        <span className="size-7">
          <FilterIco />
        </span>
        Filter
      </FilterNavButton>
      <FilterNavButton
        aria-label="Sort by"
        aria-expanded="false"
        aria-haspopup="listbox"
      >
        <span className="size-7">
          <SortIco />
        </span>
        Sort by
        <select
          id="sort-options"
          name="sort_by"
          aria-label="Sort options"
          className="absolute inset-0 opacity-0 cursor-pointer bg-transparent"
          onChange={onChangeFilter}
        >
          <option value="default">Featured</option>
          <option value="title_ascending">Alphabetically, A-Z</option>
          <option value="title_descending">Alphabetically, Z-A</option>
          <option value="price_ascending">Price, low to high</option>
          <option value="price_descending">Price, high to low</option>
        </select>
      </FilterNavButton>
    </>
  );
};
