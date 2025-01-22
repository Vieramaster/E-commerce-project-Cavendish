import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DiscountCircle } from "../DiscountCircle";
import { ArrowCardButton } from "../buttons/ArrowCardButton";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";
import {
  NextImageCard,
  PreviousImageCard,
} from "../../hooks/useCarrouselArrows";

/**
 * @param {{
 * array: ClothesObject,
 * maxSizeArrows: boolean,
 * itsALink: boolean,
 * changeClothesColor: number
 * }} props
 */
export const ImagesShopSlider = ({
  array,
  maxSizeArrows,
  itsALink,
  changeClothesColor,
}) => {
  const [positionImage, setPositionImage] = useState([0, 0]);
  const numberOfImages = array.colors[0]?.imagesColor.length || 0;

  useEffect(() => {
    setPositionImage([0, 0]);
  }, [changeClothesColor]);

  const isAtStart = positionImage[1] === 0;
  const isAtEnd = positionImage[1] === numberOfImages - 1;

  const handlePreviousImage = () => PreviousImageCard(setPositionImage);
  const handleNextImage = () => NextImageCard(setPositionImage);

  const Container = itsALink ? Link : "div";

  const changeContainer = itsALink
    ? { to: `/shop/${array.clothes}/${array.idProduct}` }
    : /** @type {Pick<import("react-router-dom").LinkProps, "to">} */ ({});

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
        onClick={handlePreviousImage}
        opacity={isAtStart}
        disabled={isAtStart}
        aria-label="Previous image"
        maxSize={maxSizeArrows}
      >
        <MinimalistArrow directionArrow="left" />
      </ArrowCardButton>
      <ArrowCardButton
        right={true}
        onClick={handleNextImage}
        opacity={isAtEnd}
        disabled={isAtEnd}
        aria-label="Next image"
        maxSize={maxSizeArrows}
      >
        <MinimalistArrow directionArrow="right" />
      </ArrowCardButton>
      <div className="absolute w-1/2 bottom-5 z-10 translate-x-1/2 flex gap-5 justify-center">
        {Array.from({ length: numberOfImages }).map((_, index) => {
          const isActive =
            positionImage[1] === index ? "bg-yellow" : "bg-lightCarbon";
          return (
            <div
              className={`rounded-md w-1/5 h-1 ${isActive}`}
              key={`indicator-${index}`}
            />
          );
        })}
      </div>
      <Container
        {...changeContainer}
        style={{ transform: `translateX(-${positionImage[0]}%)` }}
        className="w-[300%] h-full flex duration-500 ease-in-out"
      >
        {array?.colors[changeClothesColor]?.imagesColor?.map((item, index) => {
          const imageHover =
            index === positionImage[1] && itsALink
              ? "group-hover:scale-105"
              : "";

          return (
            <img
              key={array.idProduct + index}
              src={item}
              alt="clothes photo"
              className={`bg-cover w-1/3 h-full transition duration-500 ease-in-out ${imageHover}`}
            />
          );
        })}
      </Container>
    </div>
  );
};
