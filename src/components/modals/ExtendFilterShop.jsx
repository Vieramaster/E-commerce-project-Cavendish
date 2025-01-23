import { FilterProductButton } from "../buttons/FilterProductButton";
import { ColorButton } from "../buttons/ColorButton";
import { DefaultButton } from "../buttons/DefaultButton";



/**
 * @param {{
 *   array: ProductAttributes,
 *   toggleMenu: boolean,
 *   componentRef: React.LegacyRef<HTMLFieldSetElement>,
 *   selectedButton: ExtendFilters,
 *   handleExtendfilter: (event: React.MouseEvent<HTMLButtonElement>) => void,
 *   handleCleanFilter: () => void
 * }} props
 */
export const ExtendFilterShop = ({
  array,
  toggleMenu = true,
  componentRef,
  selectedButton,
  handleExtendfilter,
  handleCleanFilter,
}) => {
  const sizes = array[0];
  const colors = array[1];
  const types = array[2];

  const {
    size: selectedSize,
    color: selectedColor,
    type: selectedType,
  } = selectedButton;
  
  const ulClasses = "flex justify-center gap-5 flex-wrap";
  const visibleMenu = toggleMenu ? "translate-y-0" : "-translate-y-full";

  return (
    <fieldset
    ref={componentRef}
    aria-labelledby="filter-button"
    id="filter-options"
    aria-hidden={toggleMenu}
    className={`absolute z-20 w-full h-auto bg-background border-b-2 duration-500 ease-in-out min-h-28 ${visibleMenu}`}
  >
    <form className="w-full h-auto px-3 py-5 flex flex-col gap-5 justify-center items-center">
      <ul className={ulClasses} role="group">
        {Object.entries(sizes).map((item) => (
          <li key={`size-${item[0]}`}>
            <FilterProductButton
              type="button"
              isAvariable={item[1]}
              letter
              aria-label={`${item[0]} size button`}
              value={item[0]}
              data-id="sizeButton"
              onClick={handleExtendfilter}
              isActive={selectedSize.includes(item[0])}
            >
              {item[0]}
            </FilterProductButton>
          </li>
        ))}
      </ul>
  
      <ul className={ulClasses} role="group">
        {colors.map(({ name, hex }) => (
          <li key={`color-${name}`}>
            <ColorButton
              type="button"
              isActive={selectedColor.includes(name)}
              mainProduct
              name={name}
              aria-label={`${name} color button`}
              value={name}
              data-id="colorButton"
              style={{ backgroundColor: hex }}
              title={name}
              onClick={handleExtendfilter}
            />
          </li>
        ))}
      </ul>
  
      <ul className={ulClasses} role="group">
        {types.map((type) => (
          <li key={`type-${type}`}>
            <FilterProductButton
              type="button"
              isAvariable
              letter={false}
              value={type}
              data-id="typeButton"
              onClick={handleExtendfilter}
              isActive={selectedType.includes(type)}
            >
              {type}
            </FilterProductButton>
          </li>
        ))}
      </ul>
      <div className="w-full h-16 flex justify-center items-center gap-5 text-md font-semibold">
        <DefaultButton
          type="button"
          color="primary"
          onClick={handleCleanFilter}
        >
          Clean
        </DefaultButton>
      </div>
    </form>
  </fieldset>
  
  );
};
