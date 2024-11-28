import { CartProductCard } from "../cards/CartProductCard";
import "../../types";

/**@param {{product: CartProduct[]}} props */
export const NavbarCartList = ({ product }) => {
  const totalPrice = (/**@type {number} */ a, /**@type {number} */ b) => a * b;
  return (
    <ul className="w-full flex-grow overflow-y-auto py-2">
      {product.map((item, index) => (
        <CartProductCard
          key={index}
          image={item.colorChoise.imagesColor[0]}
          name={item.name}
          price={totalPrice(item.amount, item.price)}
          colorName={item.colorChoise.colorName}
          size={item.selectedSize}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};
