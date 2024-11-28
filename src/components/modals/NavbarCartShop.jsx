import { NavbarComponent } from "../simpleContainers/NavbarComponent";
import { NavbarCloseComponent } from "../NavbarCloseComponent";
import { NavbarCartList } from "../lists/NavbarCartList";
import "../../types";

/** @type {CartProduct[]}*/
const arrayLoco = [
    {
        price: 65,
        idProduct: 62,
        name: "Shadow hoodie jacket",
        colorChoise: {
          colorName: "green army",
          hex: "#7e7e55",
          imagesColor: [
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green1.webp",
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green2.webp",
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green3.webp",
          ],
          sizes: {
            s: 10,
            m: 3,
            l: 5,
            xl: 5,
            xxl: 3,
          },
        },
        selectSize: "s",
        amount: 2
      },
      {
        price: 65,
        idProduct: 62,
        name: "Shadow hoodie jacket",
        colorChoise: {
          colorName: "green army",
          hex: "#7e7e55",
          imagesColor: [
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green1.webp",
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green2.webp",
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green3.webp",
          ],
          sizes: {
            s: 10,
            m: 3,
            l: 5,
            xl: 5,
            xxl: 3,
          },
        },
        selectedSize: "s",
        amount: 2
      },    {
        price: 65,
        idProduct: 62,
        name: "Shadow hoodie jacket",
        colorChoise: {
          colorName: "green army",
          hex: "#7e7e55",
          imagesColor: [
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green1.webp",
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green2.webp",
            "/images/shop/sweatshirt_and_hoodies/shadow_hoodie_jacket_army_green3.webp",
          ],
          sizes: {
            s: 10,
            m: 3,
            l: 5,
            xl: 5,
            xxl: 3,
          },
        },
        selectedSize: "s",
        amount: 2
      },
]
/** * @param {{componentRef:React.RefObject<HTMLElement>, toggle:()=>void, open:boolean}} props */
export const NavbarCartShop = ({ componentRef, toggle, open }) => {
  return (
    <NavbarComponent {...{ componentRef, open }} isCart={true}>
      <NavbarCloseComponent {...{ toggle }} />
      <NavbarCartList product={arrayLoco} />
      <button className="bg-violet-200 w-full h-12 shrink-0"> Checkout </button>
    </NavbarComponent>
  );
};
