import { useMemo } from "react";
import { FilterProductButton } from "../buttons/FilterProductButton";
import { ColorButton } from "../buttons/ColorButton";
import { DefaultButton } from "../buttons/DefaultButton";

const ulClasses = "flex justify-center gap-5 flex-wrap";

/**@param {{array :ProductAttributes, toggleMenu:boolean, componentRef:React.LegacyRef<HTMLFieldSetElement>, selectedButton : string[], handleActive: (event: React.MouseEvent<HTMLButtonElement>) => void, handleReset:()=>void, handleFormData:React.FormEventHandler}} props */
export const ExtendFilterShop = ({
  array,
  toggleMenu = true,
  componentRef,
  selectedButton,
  handleActive,
  handleReset,
  handleFormData,
}) => {
  const sizes = array[0];
  const colors = array[1];
  const types = array[2];

  //avoid recreating Set on every render.
  const selectedSet = useMemo(() => new Set(selectedButton), [selectedButton]);

  return (
    <fieldset
      ref={componentRef}
      className={`absolute z-20 w-full h-auto bg-background border-b-2 duration-500 ease-in-out min-h-28 ${
        toggleMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <form action="" className="w-full h-full" onSubmit={handleFormData}>
        <div className="w-full h-auto px-3 py-5 flex flex-col gap-5 justify-center items-center">
          <div>
            <h2 id="size-options" className="sr-only">
              Sizes
            </h2>
            <ul
              className={ulClasses}
              role="group"
              aria-labelledby="size-options"
            >
              {Object.entries(sizes).map(([key, isAvailable]) => (
                <li key={key}>
                  <FilterProductButton
                    letter
                    isAvariable={isAvailable}
                    aria-label={`${key} size button`}
                    id={key}
                    data-id="sizeButton"
                    onClick={handleActive}
                    isActive={selectedSet.has(key)}
                  >
                    {key}
                  </FilterProductButton>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 id="color-options" className="sr-only">
              Colors
            </h2>
            <ul
              className={ulClasses}
              role="group"
              aria-labelledby="color-options"
            >
              {colors.map(({ name, hex }) => (
                <li key={name}>
                  <ColorButton
                    isActive={selectedSet.has(name)}
                    mainProduct
                    name={name}
                    aria-label={`${name} color button`}
                    id={name}
                    data-id="colorButton"
                    style={{ backgroundColor: hex }}
                    title={name}
                    onClick={handleActive}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 id="type-options" className="sr-only">
              Types
            </h2>
            <ul
              className={ulClasses}
              role="group"
              aria-labelledby="type-options"
            >
              {types.map((type) => (
                <li key={type}>
                  <FilterProductButton
                    isAvariable
                    letter={false}
                    id={type}
                    data-id="typeButton"
                    onClick={handleActive}
                    isActive={selectedSet.has(type)}
                  >
                    {type}
                  </FilterProductButton>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-16 flex justify-center items-center gap-5 text-md font-semibold">
          <DefaultButton color="primary" type="reset" onClick={handleReset}>
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
      </form>
    </fieldset>
  );
};
