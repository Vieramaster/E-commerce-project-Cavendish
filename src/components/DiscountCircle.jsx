import { usePercentage } from "../hooks/usePercentage";
import "../types";

/**@param {{discount:boolean, realPrice:number, price:number, maxSize:boolean }} props*/

export const DiscountCircle = ({ discount, realPrice, price, maxSize }) => {
  return discount ? (
    <div
      className={`${
        maxSize ? "size-28 text-3xl" : "size-16"
      } absolute z-10   bg-links top-3 right-3 rounded-full grid place-content-center text-center select-none  opacity-70`}
    >
      <p className="text-white font-semibold  font-alternative ">
        {usePercentage(realPrice, price)}% OFF
      </p>
    </div>
  ) : null;
};
