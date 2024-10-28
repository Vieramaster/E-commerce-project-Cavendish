import { usePercentage } from "./hooks/usePercentage";
import "./types";

/**@param {{discount:boolean, realPrice:number, price:number }} props*/

export const DiscountCircle = ({ discount, realPrice, price }) => {
  return discount ? (
    <div className="absolute z-10 size-16 bg-yellow top-3 right-3 rounded-full grid place-content-center text-center select-none">
      <p className="text-carbon font-semibold">
        {usePercentage(realPrice, price)}% OFF
      </p>
    </div>
  ) : null;
};
