import { QuantityClothesButton } from "./buttons/QuantityClothesButton";
import { ClothingColorsList } from "./lists/ClothingColorsList";
import { ClothingSizeList } from "./lists/ClothingSizeList";
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
  const disabledQuantityButtons = disabledSize === "" ? "opacity-30" : "";
  return (
    <div className="w-full flex flex-col gap-6   ">
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

      <ClothingColorsList
        array={product}
        activeColorIndex={disabledColor}
        {...{ handleChangeClothes }}
      />

      <ClothingSizeList
        array={product}
        {...{ changeClothesColor, handleChoiseSize, disabledSize }}
      />

      <div
        className={`h-10 flex text-textColor text-lg items-center ${disabledQuantityButtons}`}
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
