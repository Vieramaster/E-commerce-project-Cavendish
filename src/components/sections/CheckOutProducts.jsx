import { CheckOutProductList } from "../CheckOutProductList";
import {sumPrice} from "../../hooks/useMathOperations"
import "../../types"
/**@param {{product: CartProduct[]}} props*/
export const CheckOutProducts = ({ product }) => {
  return (
    <div className="  w-full h-auto flex flex-col gap-2 ">
      <CheckOutProductList product={product} />
      <div className="w-full h-12 flex justify-between items-center text-textColor border-t border-border">
        <p className="font-medium">
          Subtotal : <span className="ml-2">{items} items</span>{" "}
        </p>
        <p className="font-medium ">
          total Price:
          <span className="font-alternative font-semibold  text-2xl ml-2">
            {" "}
            $ {sumPrice}
          </span>
        </p>
      </div>
    </div>
  );
};
