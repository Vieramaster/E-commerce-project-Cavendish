import { DescriptionButton } from "./components/buttons/DescriptionButton";
import { ColorButton } from "./components/buttons/ColorButton";
import { DefaultButton2 } from "./components/buttons/DefaultButton2";

const classTitle = "p-2 font-semibold ";
const classDiv = "w-full h-1/3 lg: h-full w-1/3 p-3";
const classUl = "flex justify-center gap-5  flex-wrap ";

/**@param {{array :ProductAttributes, toggleMenu:boolean, componentRef:React.RefObject<HTMLElement>}} props */

export const ExtendFilterShop = ({
  array,
  toggleMenu = true,
  componentRef,
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
                  <ColorButton name={item.name} hex={item.hex} />
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
                  <DescriptionButton borderButton letter={false}>
                    {item}
                  </DescriptionButton>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full h-24  text-offWhite  ">
        <ul className="w-full h-1/2  flex justify-center items-center  ">
          <li className="min-w-24 w-auto h-8 bg-yellow text-lightCarbon text-md  rounded-l-md rounded-bl-md border border-darkGrey">
            <button className="w-full h-full flex justify-between text-center items-center px-2 font-semibold">
              bordo <span className=" font-semibold">X</span>
            </button>
          </li>
        </ul>
        <div className="w-full h-1/2 flex justify-center items-end gap-5 text-md font-semibold ">
          <DefaultButton2>Clean</DefaultButton2>
          <DefaultButton2>Apply</DefaultButton2>
        </div>
      </div>
    </nav>
  );
};
