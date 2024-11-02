import { FilterIco } from "./SVGs/icons/FilterIco";
import { SortIco } from "./SVGs/icons/SortIco";
import { GridIco } from "./SVGs/icons/GridIco";
import { SquareIco } from "./SVGs/icons/SquareIco";
import { FilterNavButton } from "./buttons/FilterNavButton";


export const classFilter =
  "h-full border border-lineGrey flex gap-5 items-center justify-center border-b border-r cursor-pointer relative ";



/**@param {{toggleGrid:()=>void, booleanGrid: boolean , handleSelect:React.ChangeEventHandler<HTMLSelectElement>}} props*/
export const ShopFilter = ({ toggleGrid, booleanGrid, handleSelect }) => {

  
  return (
    <div className="w-full h-12 flex text-lightCarbon font-medium relative">
      <FilterNavButton aria-label="Filter">
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

    </div>
  );
};
