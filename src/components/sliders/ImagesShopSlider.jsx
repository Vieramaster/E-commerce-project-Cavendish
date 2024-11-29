/** @import { LinkProps } from "react-router-dom"; */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DiscountCircle } from "../DiscountCircle";
import { ArrowCardButton } from "../buttons/ArrowCardButton";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";

import {
  NextImageCard,
  PreviousImageCard,
} from "../../hooks/useCarrouselArrows";
import "../../types";

/** @param {{array:ClothesObject, maxSizeArrows: boolean , itsALink:boolean, changeClothesColor: number}} props */
export const ImagesShopSlider = ({
  array,
  maxSizeArrows,
  itsALink,
  changeClothesColor,
}) => {
  const [positionImage, setPositionImage] = useState([0, 0]);
  const previousImage = () => PreviousImageCard(setPositionImage);
  const nextImage = () => NextImageCard(setPositionImage);

  let imagesOfImages = array.colors[0].imagesColor.length;

  useEffect(() => {
    setPositionImage([0, 0]);
  }, [changeClothesColor]);

  const Container = itsALink ? Link : "div";
  const booleanImageStart = () => positionImage[1] === 0;
  const booleanImageFinish = () => positionImage[1] === imagesOfImages - 1;

  return (
    <div className="w-full h-5/6 bg-darkGrey group relative rounded-t-md overflow-hidden">
      <DiscountCircle
        maxSize={maxSizeArrows}
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
        maxSize={maxSizeArrows}
      >
        <MinimalistArrow directionArrow="left" />
      </ArrowCardButton>
      <ArrowCardButton
        right={true}
        onClick={nextImage}
        opacity={booleanImageFinish()}
        disabled={booleanImageFinish()}
        aria-label="next image"
        maxSize={maxSizeArrows}
      >
        <MinimalistArrow directionArrow="right" />
      </ArrowCardButton>
      <div className="absolute w-1/2 bottom-5 z-10 translate-x-1/2 flex gap-5 justify-center ">
        {Array.from({ length: imagesOfImages }).map((_, index) => (
          <div
            className={`${
              positionImage[1] === index ? "bg-yellow" : "bg-lightCarbon"
            } rounded-md  w-1/5 h-1`}
            key={index + "span"}
          />
        ))}
      </div>

      <Container
        {...(itsALink
          ? { to: `/${array.clothes}/${array.idProduct}` }
          : /** @type {Pick<LinkProps, "to">} */ ({}))}
        style={{ transform: `translateX(-${positionImage[0]}%)` }}
        className="w-[300%] h-full flex duration-500 ease-in-out"
      >
        {array?.colors[changeClothesColor]?.imagesColor?.map((item, index) => (
          <img
            key={array.idProduct + index}
            src={item}
            alt="clothes photo"
            className={`bg-cover w-1/3 h-full transition duration-500 ease-in-out ${
              index === positionImage[1] && itsALink
                ? "group-hover:scale-105"
                : ""
            }`}
          />
        ))}
      </Container>
    </div>
  );
};
