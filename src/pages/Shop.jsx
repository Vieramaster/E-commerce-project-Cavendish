import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FilterMobile } from "../components/mobile/FilterMobile";
import { DescriptionShopCard } from "../components/cards/card_components/DescriptionShopCard";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { ShopCard } from "../components/cards/ShopCard";
import { useResizeWindow } from "../hooks/useResizeWindow";
import { LoaderCircle } from "../components/loaders/LoaderCircle";
import "../types";
import { DefaultButton } from "../components/buttons/DefaultButton";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

export const Shop = () => {
  const [toggleGrid, setToggleGrid] = useState(true);
  const [numberArray, setNumberArray] = useState([0, 8]);
  /** @type {ClothesObject[]} */
  const [progressiveArray, setProgressiveArray] = useState(/** @type {ClothesObject[]} */ ([]));


  useResizeWindow(976, setToggleGrid);
  const { category } = useParams();
  const { data, loading, error } = useFetch(category);

  const gridChangeToggle = () => {
    setToggleGrid((prevState) => !prevState);
  };

  /**
   * @param {number} prevNumber
   * @param {number} newNumber
   * @param {ClothesObject[]} array
   * @returns {ClothesObject[]}
   */
  const nexCards = (prevNumber, newNumber, array) => {
    return array.slice(prevNumber, newNumber);
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      setProgressiveArray(nexCards(numberArray[0], numberArray[1], data));
    }
  }, [data, numberArray]);

  const handleMoreData = () => {
    if (Array.isArray(data) && progressiveArray.length < data.length) {
      setNumberArray((prev) => {
        const newNumbers = [prev[0] + 8, prev[1] + 8];
        const newCards = nexCards(newNumbers[0], newNumbers[1], data);
        
        // Evita duplicados en progressiveArray
        if (!progressiveArray.some(item => newCards.includes(item))) {
          setProgressiveArray((prevArray) => [...prevArray, ...newCards]);
        }
        
        return newNumbers;
      });
    }
  };

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      <FilterMobile toggleGrid={gridChangeToggle} booleanGrid={toggleGrid} />
      <div
        className={`h-full w-5/6 mx-auto min-w-80 py-10 grid gap-x-5 gap-y-14 ${
          toggleGrid ? gridCompact : gridGiant
        }`}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ShopCard toggleSize={toggleGrid} key={index}>
                <LoaderCircle />
              </ShopCard>
            ))
          : progressiveArray.map((item) => (
              <ShopCard toggleSize={toggleGrid} key={item.idProduct}>
                <ImagesShopSlider array={item} maxSizeArrows={toggleGrid} />
                <DescriptionShopCard array={item} toggleSize={toggleGrid} />
              </ShopCard>
            ))}
      </div>
      <div className="w-full h-20 grid place-content-center">
        <DefaultButton onClick={handleMoreData}>Load more...</DefaultButton>
      </div>
    </section>
  );
};

export default Shop;
