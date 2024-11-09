import { useState } from "react";
import { Link } from "react-router-dom";
import { DiscountCircle } from "../DiscountCircle";
import { ArrowCardButton } from "../buttons/ArrowCardButton";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";
import {
  NextImageCard,
  PreviousImageCard,
} from "../../hooks/useCarrouselArrows";
import "../../types";

/** @param {{array:ClothesObject, maxSizeArrows: boolean , category:string}} props */
export const ImagesShopSlider = ({ array, maxSizeArrows, category }) => {
  const [positionImage, setPositionImage] = useState([0, 0]);

  const previousImage = () => PreviousImageCard(setPositionImage);
  const nextImage = () => NextImageCard(setPositionImage);
  const booleanImageStart = () => positionImage[1] === 0;
  const booleanImageFinish = () => positionImage[1] === 2;

  return (
    <div className="w-full h-5/6 bg-darkGrey group relative rounded-t-md overflow-hidden">
      <DiscountCircle
        discount={array.discount}
        realPrice={array.realPrice}
        price={array.price}
      />
      <ArrowCardButton
        right={false}
        onClick={previousImage}
        opacity={booleanImageStart()}
        disabled={booleanImageStart()}
        aria-label="previousImage"
      >
        <MinimalistArrow className={maxSizeArrows ? "size-8" : "size-14"} />
      </ArrowCardButton>
      <ArrowCardButton
        right={true}
        onClick={nextImage}
        opacity={booleanImageFinish()}
        disabled={booleanImageFinish()}
        aria-label="next image"
      >
        <MinimalistArrow
          className={`rotate-180 ${maxSizeArrows ? "size-8" : "size-14"}`}
        />
      </ArrowCardButton>
      <Link
        to={`/${category}/${array.idProduct}`}
        style={{ transform: `translateX(-${positionImage[0]}%)` }}
        className="w-[300%] h-full flex duration-500 ease-in-out"
      >
        {array?.colors[0]?.imagesColor?.map((item, index) => (
          <img
            key={array.idProduct + index}
            src={item}
            alt="clothes photo"
            className={`bg-cover w-1/3 h-full transition duration-500 ease-in-out ${
              index === positionImage[1] ? "group-hover:scale-105" : ""
            }`}
          />
        ))}
      </Link>
    </div>
  );
};
