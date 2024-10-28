import { ImagesShopSlider } from "../sliders/ImagesShopSlider";
import { DescriptionShopCard } from "./card_components/DescriptionShopCard";
import "../types";

const maxSize = "w-[40rem] h-[50rem]";
const minSize = "w-80 h-[25rem]";

/**@param {{arrayObject: ObjectClothes, toggleSize : boolean}} props */

export const ShopCard = ({ arrayObject, toggleSize }) => {
  return (
    <div
      className={`${
        toggleSize ? minSize : maxSize
      } relavite bg-semiEsmerald relative w-80 h-[25rem] mx-auto rounded-lg text-lightGrey`}
    >
      <ImagesShopSlider
        array={arrayObject}
        {...{ toggleSize }}
        maxSizeArrows={toggleSize}
      />
      <DescriptionShopCard array={arrayObject} {...{ toggleSize }} />
    </div>
  );
};
