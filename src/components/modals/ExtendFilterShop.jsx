import { FilterProductButton } from "../buttons/FilterProductButton";
import { ColorButton } from "../buttons/ColorButton";
import { DefaultButton } from "../buttons/DefaultButton";

const ulClasses = "flex justify-center gap-5 flex-wrap";

/**
 * @param {{
 *   array: ProductAttributes,
 *   toggleMenu: boolean,
 *   componentRef: React.LegacyRef<HTMLFieldSetElement>,
 *   selectedButton: string[],
 *   handleExtendfilter: (event: React.MouseEvent<HTMLButtonElement>) => void,
 *   handleCleanFilter: () => void,
 *   handleFormData: React.FormEventHandler
 * }} props
 */
export const ExtendFilterShop = ({
  array,
  toggleMenu = true,
  componentRef,
  selectedButton,
  handleExtendfilter,
  handleCleanFilter,
  handleFormData,
}) => {
  const sizes = array[0];
  const colors = array[1];
  const types = array[2];

  //avoid recreating Set on every render.
  const selectedSet = new Set(selectedButton);

  return (
    <fieldset
      ref={componentRef}
      className={`absolute z-20 w-full h-auto bg-background border-b-2 duration-500 ease-in-out min-h-28 ${
        toggleMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <form
        className="w-full h-auto px-3 py-5 flex flex-col gap-5 justify-center items-center"
        onSubmit={handleFormData}
      >
        <ul className={ulClasses} role="group">
          {Object.entries(sizes).map((item) => (
            <li key={item[0]}>
              <FilterProductButton
                isAvariable={item[1]}
                letter
                aria-label={`${item[0]} size button`}
                value={item[0]}
                data-id="sizeButton"
                onClick={handleExtendfilter}
                isActive={selectedSet.has(item[0])}
              >
                {item[0]}
              </FilterProductButton>
            </li>
          ))}
        </ul>

        <ul className={ulClasses} role="group">
          {colors.map(({ name, hex }) => (
            <li key={name}>
              <ColorButton
                isActive={selectedSet.has(name)}
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
            <li key={type}>
              <FilterProductButton
                isAvariable
                letter={false}
                value={type}
                data-id="typeButton"
                onClick={handleExtendfilter}
                isActive={selectedSet.has(type)}
              >
                {type}
              </FilterProductButton>
            </li>
          ))}
        </ul>
      </form>

      <div className="w-full h-16 flex justify-center items-center gap-5 text-md font-semibold">
        <DefaultButton color="primary" type="reset" onClick={handleCleanFilter}>
          Clean
        </DefaultButton>
        <DefaultButton
          color="primary"
          type="submit"
          disabled={selectedButton.length === 0}
        >
          Apply
        </DefaultButton>
      </div>
    </fieldset>
  );
};
