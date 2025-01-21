import { usePercentage } from "../hooks/useMathOperations";
import "../types";

/**
 * @param {{
 * discount: boolean,
 * realPrice: number,
 * price: number,
 * maxSize: boolean
 * }} props
 */
export const DiscountCircle = ({ discount, realPrice, price, maxSize }) => {
  if (!discount) return null;

  const sizeClass = maxSize ? "size-28 text-3xl" : "size-16";
  const discountPercentage = usePercentage(realPrice, price);

  return (
    <div
      className={`absolute z-10 bg-links top-3 right-3 rounded-full grid place-content-center text-center select-none opacity-70 ${sizeClass}`}
      aria-label={`Discount of ${discountPercentage}%`}
    >
      <p className="text-white font-semibold font-alternative">
        {discountPercentage}% OFF
      </p>
    </div>
  );
};
