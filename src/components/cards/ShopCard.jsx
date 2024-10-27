import { ImagesShopCard } from "./card_components/ImagesShopCard";
import { DescriptionShopCard } from "./card_components/DescriptionShopCard";

import "../types";

/**@param {{arrayObject: ObjectClothes}} props */

export const ShopCard = ({ arrayObject }) => {
  /**@param {number} index @param {string[]} array*/
  const nextCard = (index, array) =>
    index !== array.length - 1 ? index + 1 : index;

  /**@param {number} index @returns {number} */
  const previousCard = (index) => (index !== 0 ? index - 1 : index);

  return (
    <div className=" relavite bg-semiEsmerald relative w-80 h-[25rem] mx-auto rounded-lg text-lightGrey ">
      <ImagesShopCard array={arrayObject} />
      <DescriptionShopCard array={arrayObject} />
    </div>
  );
};
