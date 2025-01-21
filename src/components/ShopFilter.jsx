import { useState, useRef } from "react";
import { SortIco } from "./SVGs/icons/SortIco";
import { GridIco } from "./SVGs/icons/GridIco";
import { SquareIco } from "./SVGs/icons/SquareIco";
import { ExtendFilterShop } from "../components/modals/ExtendFilterShop";
import { useClickOutside } from "../hooks/useClickOutside";
import { ShopFIlterButtons } from "./ShopFilterButtons";
import { GridButtonsFIlterShop } from "./GridButtonsFIlterShop";

/**
 * @param {{
 *  toggleGrid:()=>void,
 *  booleanGrid: boolean ,
 *  onChangeFilter:React.ChangeEventHandler<HTMLSelectElement>,
 *  filterButtons:ProductAttributes,
 *  handleExtendfilter: (event:React.MouseEvent<HTMLButtonElement>) => void ,
 *  handleCleanFilter:()=>void,
 *  selectedButton: ExtendFilters
 * }} props
 */

export const ShopFilter = ({
  toggleGrid,
  booleanGrid,
  onChangeFilter,
  filterButtons,
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
        <ShopFIlterButtons
          {...{ toggleFilterMenu, toggleShopMenu, onChangeFilter }}
        />
        <GridButtonsFIlterShop {...{ toggleGrid, booleanGrid }} />
      </nav>
      <ExtendFilterShop
        array={filterButtons}
        toggleMenu={toggleShopMenu}
        componentRef={extenderFilterRef}
        {...{ handleExtendfilter, handleCleanFilter, selectedButton }}
      />
    </>
  );
};
