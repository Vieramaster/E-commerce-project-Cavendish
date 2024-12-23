import { CheckOutProductList } from "../lists/CheckOutProductList";
import "../../types";
/**@param {{product: CartProduct[], totalItems:number, price:number, isOpen:boolean}} props*/
export const CheckOutProducts = ({ product, totalItems, price, isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-max-height duration-300 ease-in-out  ${
        isOpen ? "max-h-full" : "max-h-0"
      } w-full`}
    >
      <CheckOutProductList product={product} />
      <div className="w-full h-12 flex justify-between items-center text-textColor border-t border-border mt-4">
        <p className="font-medium">
          Subtotal : <span className="ml-2">{totalItems} items</span>{" "}
        </p>
        <p className="font-medium ">
          Total Price:
          <span className="font-alternative font-semibold  text-2xl ml-2">
            $ {price}
          </span>
        </p>
      </div>
    </div>
  );
};
