import { DescriptionButton } from "./buttons/DescriptionButton";
import { ColorButton } from "./buttons/ColorButton";
import { DefaultButton2 } from "./buttons/DefaultButton2";

const classTitle = "p-2 font-semibold ";
const classDiv = "w-full h-1/3 lg: h-full w-1/3 p-3";
const classUl = "flex justify-center gap-5  flex-wrap ";

/**@param {{array :ProductAttributes, toggleMenu:boolean, componentRef:React.RefObject<HTMLElement>, handleEvent:()=>void, filterTags:[string[],string[],string[]] | null, handleDeletetag: ()=>void,handleCleanFilters: ()=>void, handleSearchFilter: ()=>void}} props */

export const ExtendFilterShop = ({
  array,
  toggleMenu = true,
  componentRef,
  handleEvent,
  filterTags,
  handleDeletetag,
  handleCleanFilters,
  handleSearchFilter,
}) => {
  return (
    <nav
      ref={componentRef}
      className={` absolute z-20 w-full h-auto bg-lightGrey text-center font-semibold border-b-2 border-lightCarbon duration-500 ease-in-out min-h-36 p-3  ${
        toggleMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" w-full h-2/3 text-center  text-lightCarbon text-md font-semibold  lg:flex items-start ">
        <div className={classDiv}>
          <h3 className={classTitle}>Sizes:</h3>
          <ul className={classUl}>
            {Object.entries(array[0]).map((item, index) => {
              return (
                <li key={item[0] + index}>
                  <DescriptionButton
                    letter={true}
                    disabled={!item[1]}
                    borderButton={item[1]}
                    aria-label={`${item[0]} size button`}
                    id={item[0]}
                    onClick={handleEvent}
                    data-id="sizeButton"
                  >
                    {item[0]}
                  </DescriptionButton>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classDiv}>
          <h3 className={classTitle}>Colors:</h3>
          <ul className={classUl}>
            {array[1].map((item, index) => {
              return (
                <li key={item.name + index}>
                  <ColorButton
                  mainProduct
                    name={item.name}
                    hex={item.hex}
                    onClick={handleEvent}
                    id={item.name}
                    data-id="colorButton"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classDiv}>
          <h3 className={classTitle}>Types:</h3>
          <ul className={classUl}>
            {array[2].map((item, index) => {
              return (
                <li key={item + index}>
                  <DescriptionButton
                    borderButton
                    letter={false}
                    id={item}
                    onClick={handleEvent}
                    data-id="typeButton"
                  >
                    {item}
                  </DescriptionButton>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full h-36  text-offWhite  ">
        <ul className="w-auto min-w-full h-1/2 flex justify-center items-center overflow-y-auto gap-5">
          {filterTags !== null
            ? filterTags.flat().map((item, index) => {
                return (
                  <li
                    key={item + index}
                    className=" w-auto h-8 bg-yellow text-lightCarbon text-md rounded-bl-md border border-darkGrey text-center flex"
                  >
                    <p className="h-full w-full text-nowrap text-center items-center pr-3 text-lightCarbon font-semibold grid m-auto ">
                      {item}
                    </p>
                    <button
                      className="h-full w-10"
                      onClick={handleDeletetag}
                      data-id={item}
                    >
                      X
                    </button>
                  </li>
                );
              })
            : null}
        </ul>

        <div className="w-full h-1/2 flex justify-center items-end gap-5 text-md font-semibold ">
          <DefaultButton2 onClick={handleCleanFilters}>Clean</DefaultButton2>
          <DefaultButton2 onClick={handleSearchFilter}>Apply</DefaultButton2>
        </div>
      </div>
    </nav>
  );
};