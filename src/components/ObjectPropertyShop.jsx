import { ShopSizeButton } from "./buttons/ShopSizeButton";
import { ColorButton } from "./buttons/ColorButton";
import { QuantityClothesButton } from "./buttons/QuantityClothesButton";
import "../types";

/**@param {{product: ClothesObject, disabledColor:number, handleChangeClothes: React.MouseEventHandler<HTMLButtonElement>, handleChoiseSize:React.MouseEventHandler<HTMLButtonElement>, disabledSize:string, handlegreaterQuantity: React.MouseEventHandler<HTMLButtonElement>, handleminorQuantity:React.MouseEventHandler<HTMLButtonElement>, quantityPurchased:number, changeClothesColor: number}} props*/
export const ObjectPropertyShop = ({
  product,
  disabledColor,
  handleChoiseSize,
  handleChangeClothes,
  disabledSize,
  handleminorQuantity,
  handlegreaterQuantity,
  quantityPurchased,
  changeClothesColor,
}) => {
  return (
    <div className="w-full h-auto  flex flex-col gap-6   ">
      <article className="text-textColor flex flex-col gap-5">
        <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl">
          {product.name}
        </h2>
        <p className="italic lg:text-lg 2xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          ratione quibusdam aspernatur beatae fugiat.
        </p>
        <h3 className="font-bold font-alternative text-4xl lg:text-5xl">
          ${product.price}
        </h3>
      </article>
      <ul className="flex gap-3">
        {product.colors.map(({ hex, colorName }, index) => {
          return (
            <li
              className="w-16 h-8 hover:border-b-black"
              key={index + colorName}
            >
              <ColorButton
                isActive={disabledColor === index}
                disabled={disabledColor === index}
                style={{ backgroundColor: hex }}
                name={colorName}
                mainProduct={true}
                id={colorName}
                value={index}
                onClick={handleChangeClothes}
              />
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-3 h-auto w-full flex-wrap">
        {Object.entries(product?.colors[changeClothesColor].sizes).map(
          (item, index) => {
            return (
              <li key={item[0] + index}>
                <ShopSizeButton
                  disabled={item[1] === 0}
                  borderButton={item[1] > 0}
                  aria-label={`${item[0]} size button`}
                  value={item[0]}
                  onClick={handleChoiseSize}
                  data-id="sizeButton"
                  selected={disabledSize === item[0]}
                >
                  {item[0]}
                </ShopSizeButton>
              </li>
            );
          }
        )}
      </ul>
      <div
        className={`${
          disabledSize === "" ? "opacity-30" : ""
        } w-auto h-10 flex text-textColor text-lg items-center`}
      >
        <QuantityClothesButton
          onClick={handleminorQuantity}
          disabled={disabledSize === ""}
        >
          -
        </QuantityClothesButton>
        <p className="size-10 text-lg grid place-content-center font-alternative ">
          {quantityPurchased}
        </p>
        <QuantityClothesButton
          onClick={handlegreaterQuantity}
          disabled={disabledSize === ""}
        >
          +
        </QuantityClothesButton>
      </div>
    </div>
  );
};
