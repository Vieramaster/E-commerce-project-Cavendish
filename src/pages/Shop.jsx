import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FilterMobile } from "../components/mobile/FilterMobile";
import { DescriptionShopCard } from "../components/cards/card_components/DescriptionShopCard";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { ShopCard } from "../components/cards/ShopCard";
import { useResizeWindow } from "../hooks/useResizeWindow";
import { LoaderCircle } from "../components/loaders/LoaderCircle";
import { DefaultButton } from "../components/buttons/DefaultButton";
import { alphabeticFilter, priceFilter } from "../hooks/useSelectFilters";
import "../types";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

export const Shop = () => {
  const [toggleGrid, setToggleGrid] = useState(true);
  const [dataButton, setDataButton] = useState(true);
  const [numberArray, setNumberArray] = useState([0, 8]);
  const [selectedOption, setSelectedOption] = useState("");
  const [progressiveArray, setProgressiveArray] = useState<ClothesObject[]>([]);
  ;

  /**
   * @param {number} prevNumber
   * @param {number} newNumber
   * @param {ClothesObject[]} array
   * @returns {ClothesObject[]}
   */
  const nextCards = (prevNumber, newNumber, array) => {
    return array.slice(prevNumber, newNumber);
  };

  useResizeWindow(976, setToggleGrid);

  const gridChangeToggle = () => {
    setToggleGrid((prevState) => !prevState);
  };

  const { category } = useParams();
  const { data, loading } = useFetch(category);

const handleMoreData = () => {
  if (Array.isArray(data) && Array.isArray(progressiveArray) && progressiveArray.length < data.length) {
    const newNumbers = [numberArray[0] + 8, numberArray[1] + 8];
    setNumberArray(newNumbers);
    const newCards = nextCards(newNumbers[0], newNumbers[1], data);
    setProgressiveArray((prev) => [...prev, ...newCards]);
  } else {
    setDataButton(false);
  }
};


  /**
   * @param {React.ChangeEvent<HTMLSelectElement>} event
   */
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (data) {
      let changeArray = nextCards(numberArray[0], numberArray[1], data)
      setProgressiveArray();
      setNumberArray([0, 8]);
      setDataButton(true);
    }

    const filters = {
      "title-ascending": () =>
        alphabeticFilter(data, setProgressiveArray, true),
      "title-descending": () =>
        alphabeticFilter(data, setProgressiveArray, false),
      "price-ascending": () => priceFilter(data, setProgressiveArray, true),
      "price-descending": () => priceFilter(data, setProgressiveArray, false),
      default: () => setProgressiveArray(data),
    };

    if (selectedOption) {
      filters[selectedOption]();
    }
  }, [data, selectedOption]);

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      <FilterMobile
        toggleGrid={gridChangeToggle}
        booleanGrid={toggleGrid}
        {...{ handleSelect }}
      />
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
        <DefaultButton
          onClick={handleMoreData}
          color={dataButton ? "primary" : "disabled"}
          disabled={!dataButton}
        >
          {dataButton ? "More clothes..." : "No more products"}
        </DefaultButton>
      </div>
    </section>
  );
};

export default Shop;
