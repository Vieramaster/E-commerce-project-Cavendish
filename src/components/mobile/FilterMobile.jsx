import { FilterIco } from "../SVGs/icons/FilterIco";
import { SortIco } from "../SVGs/icons/SortIco";
import { GridIco } from "../SVGs/icons/GridIco";
import { SquareIco } from "../SVGs/icons/SquareIco";

import { useState } from "react";

const classFilters =
  "h-full border border-lineGrey flex gap-5 items-center justify-center border-b border-r border-lineGrey";

export const FilterMobile = ({}) => {
  const [showGrid, setShowGrid] = useState(false);

  const toggleGrid = () => {
    setShowGrid((prevState) => !prevState);
  };

  return (
    <div className="w-full h-12 flex text-lightCarbon font-medium">
      <button className={`${classFilters} w-2/5`} aria-label="Filter">
        <FilterIco className="size-7" /> Filter
      </button>

      <button
        aria-haspopup="listbox"
        aria-expanded="false"
        className={`${classFilters} w-2/5  cursor-pointer relative `}
        aria-label="Sort by"
      >
        <SortIco className="size-7" />
        Sort by
        <select
          name="sort_by"
          className="absolute inset-0 opacity-0 cursor-pointer bg-transparent"
          value={"default"}
          onChange={()=>"hola"}
        >
          <option value="default">Featured</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="title-descending">Alphabetically, Z-A</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-descending">Price, high to low</option>
        </select>
      </button>

      <div className={`${classFilters} w-1/5`}>
        <button onClick={toggleGrid}>
          <GridIco
            classNameSquares={`${
              showGrid
                ? "stroke-lightCarbon fill-none"
                : "fill-lightCarbon stroke-currentColor"
            } `}
            classNameSvg={"size-7 "}
          />
        </button>
        <button onClick={toggleGrid} disabled={showGrid}>
          <SquareIco
            classNameSquare={`${
              !showGrid
                ? "stroke-lightCarbon fill-none"
                : "fill-lightCarbon stroke-transparent"
            } `}
            classNameSvg={"size-7"}
          />
        </button>
      </div>
    </div>
  );
};
