import { ShopCard } from "../cards/ShopCard";
import { ImagesShopSlider } from "../sliders/ImagesShopSlider";
import { DescriptionShopCard } from "../cards/card_components/DescriptionShopCard";

import "../../types";

/** 
 * @param {{
 *   title: string,
 *   shopArray: ClothesObject[] | null 
 * }} props 
 */
export const ShoppingCards = ({ title, shopArray }) => {
  return (
    <section
      className="w-5/6 mx-auto py-20 lg:py-32 flex flex-col gap-10"
      aria-labelledby="shopping-cards-section"
    >
      <h2
        className="text-textColor font-semibold text-3xl text-center lg:text-start lg:text-5xl"
        id="shopping-cards-section"
      >
        {title}
      </h2>
      <ul className="w-full grid grid-cols-1 gap-10 justify-items-center lg:justify-items-end lg:grid-cols-2 2xl:flex 2xl:justify-between">
        {shopArray?.map((_, index) => (
          <ShopCard toggleSize={false} key={index}>
            <ImagesShopSlider
              array={shopArray[index]}
              maxSizeArrows={false}
              itsALink={true}
              changeClothesColor={0}
            />
            <DescriptionShopCard
              array={shopArray[index]}
              toggleSize={false}
            />
          </ShopCard>
        ))}
      </ul>
    </section>
  );
};
