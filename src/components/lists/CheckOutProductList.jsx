import { totalPriceItem } from "../../hooks/useMathOperations";
import "../../types";

/**@param {{product: CartProduct[], heightUl:number}} props */
export const CheckOutProductList = ({ product, heightUl }) => {
  return (
    <ul
      className={`w-full h-auto py-6 flex flex-col gap-4 `}
      style={{ maxHeight: `calc(${heightUl}rem)` }}
    >
      {product.map(
        ({
          colorChoise: { imagesColor },
          name,
          selectSize,
          quantityClothes,
          price,
        }) => {
          return (
            <li
              className="w-full h-16 flex justify-between items-center text-mainColor md:h-20"
              key={name}
            >
              <picture className="size-16 rounded-md relative md:size-20">
                <img src={imagesColor[0]} alt={name} className="rounded-md" />
                <span className="absolute  size-4 -top-1 -right-1 rounded-full bg-textColor opacity-90 grid place-content-center md:size-6 md:-top-2 lg:-right-2">
                  <p className=" font-alternative text-white">
                    {quantityClothes}
                  </p>
                </span>
              </picture>
              <div className="flex-1 px-5 ">
                <h3 className="font-semibold">{name}</h3>
                <p>
                  size: <span className="uppercase">{selectSize}</span>
                </p>
              </div>
              <span>
                <p className="text-lg 2xl:xl font-semibold font-alternative">
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
