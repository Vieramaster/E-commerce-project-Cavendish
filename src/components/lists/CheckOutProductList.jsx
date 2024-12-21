import { totalPriceItem } from "../../hooks/useMathOperations";
import "../../types";

/**@param {{product: CartProduct[]}} props */
export const CheckOutProductList = ({ product }) => {
  return (
    <ul className="w-full h-auto py-6 flex flex-col gap-4">
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
              className="w-full h-20 flex justify-between items-center text-mainColor"
              key={name}
            >
              <picture className="size-20 rounded-md relative">
                <img src={imagesColor[0]} alt={name} className="rounded-md" />
                <span className="absolute  size-6 -top-2 -right-2 rounded-full bg-textColor opacity-90 grid place-content-center">
                  <p className=" font-alternative text-white">
                    {quantityClothes}
                  </p>
                </span>
              </picture>
              <div className="flex-1 px-5 ">
                <h3 className="font-semibold">{name}</h3>
                <p>
                  {" "}
                  size: <span className="uppercase">{selectSize}</span>
                </p>
              </div>
              <span>
                <p className="text-2xl font-semibold font-alternative">
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
