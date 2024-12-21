import { useCallback } from "react";
import { NavbarComponent } from "../simpleContainers/NavbarComponent";
import { NavbarCloseComponent } from "../NavbarCloseComponent";
import { NavbarCartList } from "../lists/NavbarCartList";
import { ShopCartLink } from "../links/ShopCartLink";
//Hooks
import { useCart } from "../../hooks/useZustand";
import { totalPrice, totalProducts } from "../../hooks/useMathOperations";

import "../../types";

const classText = "font-alternative font-bold tracking-wider text-xl ";

/** * @param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props */
export const NavbarCartShop = ({ componentRef, toggle, open }) => {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const sumPrice = totalPrice(cart);

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
        <p className={classText}>Products: {totalProducts(cart)}</p>
        <p className={classText}>Total: ${sumPrice.toFixed(2)}</p>
      </div>
      <ShopCartLink disabled={checkLength} to={"/Checkout"}>
        {checkLength ? "Add products" : "Checkout"}
      </ShopCartLink>
    </NavbarComponent>
  );
};
