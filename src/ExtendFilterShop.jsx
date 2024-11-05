import { DescriptionButton } from "./components/buttons/DescriptionButton";
import { ColorButton } from "./components/buttons/ColorButton";

const classBox =
  "w-full h-1/3 font-semibold text-lightCarbon text-md flex justify-center gap-5 flex-wrap items-center py-5";
const classTitle = "p-2 font-semibold"  

/**@param {{array :ArrayButtons}} props */
export const ExtendFilterShop = ({ array }) => {
  console.log(array);
  return (
    <div className="absolute z-20 w-full h-auto p-5 bg-lightGrey text-center font-semibold border-b-2 border-lightCarbon lg:flex items-center">
      <ul className={classBox}>
        <span className={classTitle}>Sizes:</span>
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

      <ul className={classBox}>
        <span className={classTitle}>Colors:</span>
        {array[1].map((item, index) => {
          return (
            <li key={item.name + index}>
              <ColorButton name={item.name} hex={item.hex} />
            </li>
          );
        })}
      </ul>
      <ul className={classBox}>
      <span className={classTitle}>Type:</span>
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
  );
};
