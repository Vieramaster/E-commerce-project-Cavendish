import { CartProductCard } from "../cards/CartProductCard";
import { totalPriceItem } from "../../hooks/useMathOperations";
import "../../types";

/**
 * @param {{
 * product: CartProduct[],
 * handleRemove:
 * React.MouseEventHandler<HTMLButtonElement>
 * }} props
 * */
export const NavbarCartList = ({ product, handleRemove }) => {
  return (
    <ul className="w-full flex-grow h-full scrollable-list py-2">
      {product.map(
        (
          {
            colorChoise: { colorName, imagesColor },
            name,
            quantityClothes,
            selectSize,
            idProduct,
            price,
          },

          index
        ) => (
          <CartProductCard
            key={name + index}
            image={imagesColor[0]}
            name={name}
            price={totalPriceItem(quantityClothes, price)}
            colorName={colorName}
            size={selectSize}
            amount={quantityClothes}
            {...{ handleRemove }}
            data={idProduct}
          />
        )
      )}
    </ul>
  );
};
