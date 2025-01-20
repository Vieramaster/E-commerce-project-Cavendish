import { CheckOutProductList } from "../lists/CheckOutProductList";
import "../../types";

/**@param {{product: CartProduct[], totalItems:number, price:number, isOpen:boolean}} props*/
export const CheckOutProducts = ({ product, totalItems, price, isOpen }) => {
  // sum of the height of the product list and the height of gap between the elements in the list
  // total products +  total gap + margin top and bottom
  const calculatedHeight = product.length * 5 + product.length * 2 + 4;

  return (
    <div
      className="duration-300 ease-in-out flex flex-col overflow-hidden"
      style={{ height: isOpen ? `${calculatedHeight}rem` : "0" }}
      aria-expanded={isOpen ? "true" : "false"}
    >
      <CheckOutProductList product={product} heightUl={calculatedHeight} />

      <div className="w-full h-12 flex justify-between items-center text-textColor border-t border-border mt-4">
        <p className="font-medium">
          Subtotal: <span className="ml-2">{totalItems} items</span>
        </p>
        <p className="font-medium">
          Total Price:
          <span className="font-alternative font-semibold text-2xl ml-2">
            ${price}
          </span>
        </p>
      </div>
    </div>
  );
};
