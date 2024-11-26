import { useState, useRef } from "react";
import { FilterIco } from "./SVGs/icons/FilterIco";
import { SortIco } from "./SVGs/icons/SortIco";
import { GridIco } from "./SVGs/icons/GridIco";
import { SquareIco } from "./SVGs/icons/SquareIco";
import { FilterNavButton } from "./buttons/FilterNavButton";
import { ExtendFilterShop } from "../components/modals/ExtendFilterShop";
import { useClickOutside } from "../hooks/useClickOutside";

/**
 * @param {{
 *  toggleGrid:()=>void,
 *  booleanGrid: boolean ,
 *  onChangeFilter:React.ChangeEventHandler<HTMLSelectElement>,
 *  filterButtons:ProductAttributes,
 *  handleExtendfilter: (event:React.MouseEvent<HTMLButtonElement>) => void ,
 *  handleCleanFilter:()=>void,
 *  handleFormData:React.FormEventHandler,
 *  selectedButton:string[]
 * }} props
 */

export const ShopFilter = ({
  toggleGrid,
  booleanGrid,
  onChangeFilter,
  filterButtons,
  handleFormData,
  handleExtendfilter,
  handleCleanFilter,
  selectedButton,
}) => {
  const [toggleShopMenu, setToggleShopMenu] = useState(false);

  const toggleFilterMenu = () => {
    setToggleShopMenu((prev) => !prev);
  };
  const extenderFilterRef = useRef(null);

  useClickOutside(extenderFilterRef, () => setToggleShopMenu(false));

  return (
    <>
      <nav className="bg-offWhite w-full h-12 flex text-lightCarbon font-medium relative z-30">
        <FilterNavButton
          aria-label="Filter"
          aria-haspopup="listbox"
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
            name="sort_by"
            className="absolute inset-0 opacity-0 cursor-pointer bg-transparent"
            onChange={onChangeFilter}
          >
            <option value="default">Featured</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
          </select>
        </FilterNavButton>

        <div className="h-full border border-lineGrey  gap-5 items-center justify-center border-b border-r cursor-pointer relative w-1/5 hidden lg:flex lg:w-1/5">
          <button
            onClick={toggleGrid}
            disabled={!booleanGrid}
            className="size-7"
          >
            <GridIco
              classNameSquares={`${
                !booleanGrid
                  ? "fill-lightCarbon stroke-currentColor"
                  : "stroke-lightCarbon fill-none"
              } `}
            />
          </button>
          <button
            onClick={toggleGrid}
            disabled={booleanGrid}
            className="size-7"
          >
            <SquareIco
              classNameSquare={`${
                booleanGrid
                  ? "fill-lightCarbon stroke-transparent"
                  : "stroke-lightCarbon fill-none"
              }  `}
            />
          </button>
        </div>
      </nav>
      <ExtendFilterShop
        array={filterButtons}
        toggleMenu={toggleShopMenu}
        componentRef={extenderFilterRef}
        selectedButton={selectedButton}
        {...{ handleFormData, handleExtendfilter, handleCleanFilter }}
      />
    </>
  );
};
