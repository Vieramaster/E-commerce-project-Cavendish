import { useState, useRef } from "react";
import { FilterIco } from "./SVGs/icons/FilterIco";
import { SortIco } from "./SVGs/icons/SortIco";
import { GridIco } from "./SVGs/icons/GridIco";
import { SquareIco } from "./SVGs/icons/SquareIco";
import { FilterNavButton } from "./buttons/FilterNavButton";
import { ExtendFilterShop } from "./ExtendFilterShop";
import { useClickOutside } from "../hooks/useClickOutside";

export const classFilter =
  "h-full border border-lineGrey flex gap-5 items-center justify-center border-b border-r cursor-pointer relative ";

/**@param {{toggleGrid:()=>void, booleanGrid: boolean , handleSelect:React.ChangeEventHandler<HTMLSelectElement>, filterButtons:ProductAttributes, handleExtendFilter: ()=>void, selectionFilter:[string[],string[],string[]] | null, handleDeletetag: ()=>void, handleCleanFilters: ()=>void, handleSearchFilter: ()=>void}} props*/
export const ShopFilter = ({
  toggleGrid,
  booleanGrid,
  handleSelect,
  filterButtons,
  handleExtendFilter,
  selectionFilter,
  handleDeletetag,
  handleCleanFilters,
  handleSearchFilter,
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
          <FilterIco className="size-7" /> Filter
        </FilterNavButton>
        <FilterNavButton
          aria-label="Sort by"
          aria-expanded="false"
          aria-haspopup="listbox"
        >
          <SortIco className="size-7" />
          Sort by
          <select
            name="sort_by"
            className="absolute inset-0 opacity-0 cursor-pointer bg-transparent"
            onChange={handleSelect}
          >
            <option value="default">Featured</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
          </select>
        </FilterNavButton>

        <div className={`${classFilter} w-1/5 hidden lg:flex lg:w-1/5`}>
          <button onClick={toggleGrid} disabled={booleanGrid}>
            <GridIco
              classNameSquares={`${
                !booleanGrid
                  ? "stroke-lightCarbon fill-none"
                  : "fill-lightCarbon stroke-currentColor"
              } `}
              classNameSvg={"size-7 "}
            />
          </button>
          <button onClick={toggleGrid} disabled={!booleanGrid}>
            <SquareIco
              classNameSquare={`${
                booleanGrid
                  ? "stroke-lightCarbon fill-none"
                  : "fill-lightCarbon stroke-transparent"
              }  `}
              classNameSvg={"size-7"}
            />
          </button>
        </div>
      </nav>
      <ExtendFilterShop
        array={filterButtons}
        toggleMenu={toggleShopMenu}
        componentRef={extenderFilterRef}
        handleEvent={handleExtendFilter}
        filterTags={selectionFilter}
        {...{ handleDeletetag, handleCleanFilters, handleSearchFilter }}
      />
    </>
  );
};