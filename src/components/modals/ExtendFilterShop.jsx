import { FilterProductButton } from "../buttons/FilterProductButton";
import { ColorButton } from "../buttons/ColorButton";
import { DefaultButton } from "../buttons/DefaultButton";
import React from "react";

const classUl = "flex justify-center gap-5  flex-wrap  ";

/**@param {{array :ProductAttributes, toggleMenu:boolean, componentRef:React.LegacyRef<HTMLFieldSetElement>, selectedButton : string[], handleActive: (event: React.MouseEvent<HTMLButtonElement>) => void, handleReset:()=>void, handleSubmit:(event:React.MouseEvent<HTMLButtonElement>)=>void}} props */

export const ExtendFilterShop = ({
  array,
  toggleMenu = true,
  componentRef,
  selectedButton,
  handleActive,
  handleReset,
  handleSubmit,
}) => {
  const sizes = array[0];
  const colors = array[1];
  const types = array[2];

  const selectedSet = new Set(selectedButton);
  return (
    <fieldset
      ref={componentRef}
      className={`absolute z-20 w-full h-auto bg-background border-b-2 duration-500 ease-in-out min-h-28 ${
        toggleMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-auto px-3 py-5 flex flex-col gap-5 justify-center items-center ">
        <ul className={`${classUl}`}>
          {Object.entries(sizes).map((item) => {
            return (
              <li key={item[0]}>
                <FilterProductButton
                  letter={true}
                  isAvariable={item[1]}
                  aria-label={`${item[0]} size button`}
                  id={item[0]}
                  data-id="sizeButton"
                  onClick={handleActive}
                  isActive={selectedSet.has(item[0])}
                >
                  {item[0]}
                </FilterProductButton>
              </li>
            );
          })}
        </ul>

        <ul className={`${classUl}  `}>
          {colors.map(({ name, hex }) => {
            return (
              <li key={name}>
                <ColorButton
                  isActive={selectedSet.has(name)}
                  mainProduct
                  name={name}
                  aria-label={`${name} color button`}
                  id={name}
                  data-id="colorButton"
                  style={{ backgroundColor: `${hex}` }}
                  title={name}
                  onClick={handleActive}
                />
              </li>
            );
          })}
        </ul>
        <ul className={`${classUl}  `}>
          {types.map((item) => {
            return (
              <li key={item}>
                <FilterProductButton
                  isAvariable
                  letter={false}
                  id={item}
                  data-id="typeButton"
                  onClick={handleActive}
                  isActive={selectedSet.has(item)}
                >
                  {item}
                </FilterProductButton>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-16  flex justify-center items-center gap-5 text-md font-semibold ">
        <DefaultButton color="primary" type="reset" onClick={handleReset}>
          Clean
        </DefaultButton>
        <DefaultButton color="primary" type="submit" onClick={handleSubmit}>
          Apply
        </DefaultButton>
      </div>
    </fieldset>
  );
};
