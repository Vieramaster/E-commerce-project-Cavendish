import { totalPriceItem } from "../../hooks/useMathOperations";

/**
 * @param {{
 * product: CartProduct[],
 * heightUl: number
 * }} props
 */
export const CheckOutProductList = ({ product, heightUl }) => {
  return (
    <ul
      className="w-full h-auto py-6 flex flex-col gap-4"
      style={{ maxHeight: `calc(${heightUl}rem)` }}
      aria-label="List of products in your checkout"
    >
      {product.map(
        ({
          colorChoise: { imagesColor },
          name,
          selectSize,
          quantityClothes,
          price,
        }) => {
          const productKey = `${name}-${selectSize}`;
          const productImage = imagesColor[0];

          return (
            <li
              className="w-full h-16 flex justify-between items-center text-mainColor md:h-20"
              key={productKey}
              aria-label={`Product: ${name}, size: ${selectSize}, quantity: ${quantityClothes}`}
            >
              {/* Product Image with Quantity */}
              <picture className="size-16 rounded-md relative md:size-20">
                <img
                  src={productImage}
                  alt={`Image of ${name} in color`}
                  className="rounded-md"
                />
                <span
                  className="absolute size-4 -top-1 -right-1 rounded-full bg-textColor opacity-90 grid place-content-center md:size-6 md:-top-2 lg:-right-2"
                  aria-label={`Quantity: ${quantityClothes}`}
                >
                  <p className="font-alternative text-white">
                    {quantityClothes}
                  </p>
                </span>
              </picture>

              {/* Product Name and Details */}
              <div className="flex-1 px-5">
                <h3 className="font-semibold">{name}</h3>
                <p>
                  Size: <span className="uppercase">{selectSize}</span>
                </p>
              </div>

              {/* Product Total Price */}
              <span aria-label={`Total price: $${totalPriceItem(price, quantityClothes)}`}>
                <p className="text-lg 2xl:text-xl font-semibold font-alternative">
                  ${totalPriceItem(price, quantityClothes)}
                </p>
              </span>
            </li>
          );
        }
      )}
    </ul>
  );
};
