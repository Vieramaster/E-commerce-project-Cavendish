import { useCallback } from "react";
import { NavbarComponent } from "../simpleContainers/NavbarComponent";
import { NavbarCloseComponent } from "../NavbarCloseComponent";
import { NavbarCartList } from "../lists/NavbarCartList";
import { useCart } from "../../hooks/useZustand";
import "../../types";


const classText = "font-alternative font-bold tracking-wider text-xl ";

/** * @param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props */
export const NavbarCartShop = ({ componentRef, toggle, open }) => {
  const cart = useCart((state) => state.cart);

  /** @param {number} a @param {number} b @returns {number} */
  const sum = (a, b) => a + b;

  const totalPrice = cart.reduce(
    (/** @type {number} */ acc, /** @type {{ price: number }} */ item) =>
      sum(acc, item.price || 0),
    0
  );

  /**@type {React.MouseEventHandler<HTMLButtonElement>} */
  const removeProduct = useCallback(({ currentTarget }) => {
    
    const {dataset:{id:ID}} = currentTarget

    console.log(ID)
  }, []);
  return (
    <NavbarComponent {...{ componentRef, open }} isCart={true}>
      <NavbarCloseComponent {...{ toggle }} />
      <NavbarCartList product={cart} handleRemove={removeProduct}/>
      <div className="bg-lineGrey  text-white w-full h-14 flex justify-between items-center px-5 ">
        <p className={classText}>Products : {cart.length}</p>
        <p className={classText}>Total: ${totalPrice}</p>
      </div>
      <button className="bg-mainColor hover:bg-hover duration-200 ease-in font-alternative text-white w-full h-14 shrink-0">
        Checkout
      </button>
    </NavbarComponent>
  );
};
