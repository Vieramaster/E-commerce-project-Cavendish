import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";

/**@param {{changeArrow:boolean, totalPrice:number} & JSX.IntrinsicElements["button"] } props */
export const SummaryShopButton = ({ changeArrow, totalPrice, ...props }) => {
  return (
    <button
      className={`w-full h-[4.2rem] bg-lightGrey text-textColor ${props.disabled && "hidden"}`}
      {...props}
    >
      <span className="w-5/6 h-full flex items-center  mx-auto justify-between">
        <span className="font-alternative font-semibold flex gap-3 items-center">
          <p>Order summary</p>
          <span className="size-3 flex items-center fill-textColor">
            <MinimalistArrow directionArrow={changeArrow ? "top" : "bottom"} />
          </span>
        </span>
        <span className="font-alternative font-semibold text-2xl">${totalPrice}</span>
      </span>
    </button>
  );
};
