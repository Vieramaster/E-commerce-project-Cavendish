import { GridIco } from "./SVGs/icons/GridIco";
import { SquareIco } from "./SVGs/icons/SquareIco";

/**
 * @param {{
 * toggleGrid:()=>void,
 * booleanGrid: boolean ,
 * }} props
 */
export const GridButtonsFIlterShop = ({ toggleGrid, booleanGrid }) => {
  const changeGridIcon = !booleanGrid
    ? "fill-lightCarbon stroke-currentColor"
    : "stroke-lightCarbon fill-none";

  const changeSquareIcon = booleanGrid
    ? "fill-lightCarbon stroke-transparent"
    : "stroke-lightCarbon fill-none";

  const listButton = [
    {
      Component: GridIco,
      className: changeGridIcon,
      arial: "maximum size of products",
      disabled: !booleanGrid,
      key: "grid-filter-icon",
    },
    {
      Component: SquareIco,
      className: changeSquareIcon,
      arial: "minimun size of products",
      disabled: booleanGrid,
      key: "square-filter-icon ",
    },
  ];

  return (
    <div className="h-full border border-lineGrey  gap-5 items-center justify-center border-b border-r cursor-pointer relative w-1/5 hidden lg:flex lg:w-1/5">
      {listButton.map(({ Component, className, arial, disabled, key }) => {
        return (
          <button
          key={key}
            onClick={toggleGrid}
            disabled={disabled}
            className="size-7"
            aria-label={arial}
          >
            <Component SVGClassName={`${className} `} />
          </button>
        );
      })}
    </div>
  );
};
