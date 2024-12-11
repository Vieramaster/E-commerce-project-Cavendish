import { CartProductCard } from "../cards/CartProductCard";
import { useCart } from "../../hooks/useZustand";
import "../../types";

/**@param {{product: CartProduct[]}} props */
export const NavbarCartList = ({ product }) => {
  const clearCart = useCart((state) => state.clearCart);

  const totalPrice = (/**@type {number} */ a, /**@type {number} */ b) => a * b;
  return (
    <ul className="w-full flex-grow overflow-y-auto py-2">
      {product.map(
        (
          {
            colorChoise: { colorName, imagesColor },
            name,
            quantityClothes,
            price,
            selectedSize,
            idProduct
          },
          index
        ) => (
          <CartProductCard
            key={index}
            image={imagesColor[0]}
            name={name}
            price={totalPrice(quantityClothes, price)}
            colorName={colorName}
            size={selectedSize}
            amount={quantityClothes}
            handleRemove={clearCart}
            data={idProduct}
          />
        )
      )}
    </ul>
  );
};
