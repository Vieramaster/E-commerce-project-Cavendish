import { useCallback } from "react";
import { NavbarComponent } from "../simpleContainers/NavbarComponent";
import { NavbarCloseComponent } from "../NavbarCloseComponent";
import { NavbarCartList } from "../lists/NavbarCartList";
import { ShopCartButton } from "../buttons/ShopCartButton";
import { useCart } from "../../hooks/useZustand";
import "../../types";

const classText = "font-alternative font-bold tracking-wider text-xl ";

/** * @param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props */
export const NavbarCartShop = ({ componentRef, toggle, open }) => {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const totalPrice = cart.reduce(
    (/** @type {number} */ acc, /** @type {CartProduct} */ item) =>
      acc + (item.price * item.quantityClothes || 0),
    0
  );

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const removeProduct = useCallback(
    ({ currentTarget }) => {
      const { id: ID } = currentTarget.dataset;
      if (!ID) {
        console.error("The product ID to be deleted was not found");
        return;
      }
      removeFromCart(parseInt(ID));
    },
    [removeFromCart]
  );

  const checkLength = cart.length < 1;
  return (
    <NavbarComponent {...{ componentRef, open }} isCart={true}>
      <NavbarCloseComponent {...{ toggle }} />
      <NavbarCartList product={cart} handleRemove={removeProduct} />
      <div className="bg-lineGrey text-white w-full h-14 flex justify-between items-center px-5">
        <p className={classText}>Products: {cart.length}</p>
        <p className={classText}>Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <ShopCartButton disabled={checkLength} to={"/Checkouts"} >
        {checkLength ? "Add products" : "Checkout"}
      </ShopCartButton>
    </NavbarComponent>
  );
};
