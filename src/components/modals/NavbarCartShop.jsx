import { NavbarComponent } from "../simpleContainers/NavbarComponent";
import { NavbarCloseComponent } from "../NavbarCloseComponent";
import { NavbarCartList } from "../lists/NavbarCartList";
import { useCart } from "../../hooks/useZustand";
import "../../types";

/** * @param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props */
export const NavbarCartShop = ({ componentRef, toggle, open }) => {
  const cart = useCart((state) => state.cart);

  return (
    <NavbarComponent {...{ componentRef, open }} isCart={true}>
      <NavbarCloseComponent {...{ toggle }} />
      <NavbarCartList product={cart} />
      <button className="bg-mainColor hover:bg-hover duration-200 ease-in font-alternative text-white w-full h-14 shrink-0">
        Checkout
      </button>
    </NavbarComponent>
  );
};
