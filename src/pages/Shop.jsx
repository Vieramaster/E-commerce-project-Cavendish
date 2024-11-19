import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { ShopFilter } from "../components/ShopFilter";
import { DescriptionShopCard } from "../components/cards/card_components/DescriptionShopCard";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { ShopCard } from "../components/cards/ShopCard";
import { useResizeWindow } from "../hooks/useResizeWindow";
import { LoaderCircle } from "../components/loaders/LoaderCircle";
import { DefaultButton } from "../components/buttons/DefaultButton";
import {
  alphabeticFilter,
  priceFilter,
  colorFilter,
  sizesFilter,
  typeFilter,
} from "../hooks/useSelectFilters";
import "../types";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

export const Shop = () => {
  const [toggleGrid, setToggleGrid] = useState(false);
  const [dataButton, setDataButton] = useState(true);
  const [numberArray, setNumberArray] = useState([8, 16]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  /** @type {[ClothesObject[], React.Dispatch<React.SetStateAction<ClothesObject[]>>]} */
  const [progressiveArray, setProgressiveArray] = useState(
    /** @type {ClothesObject[]} */ ([])
  );

  //restart the grid for screen changes
  useResizeWindow(976, setToggleGrid);

  const gridChangeToggle = () => {
    setToggleGrid((prevState) => !prevState);
  };

  //The React Router param is used to know what data to look for depending on the URL
  const { category } = useParams();

  /**@type {{data:ClothesObject[]}} */
  const { data } = useFetch(category !== "new_arrivals" ? category : undefined);

  console.log("data", data);
  console.log("array", progressiveArray);
  // data is subtracted to create filter buttons
  /** @type {ProductAttributes} */
  const arrayForFilters = [
    /** @type {Sizes} */ (sizesFilter(data)),
    /** @type {Color[]} */ (colorFilter(data)),
    /** @type {ClothingTypes} */ (typeFilter(data)),
  ];

  //Filter select
  /**@type {React.ChangeEventHandler<HTMLSelectElement>} */
  const changeFilter = (event) => {
    setSelectedOption(event.target.value);
  };

  const OptionFilter = () => {
    setLoadingData(true);
  };

  const handleMoreData = () => {
    setNumberArray((prev) => [prev[0] + 8, prev[1] + 8]);
    console.log(numberArray)
    if (numberArray[1] < data.length) {
      const cutData = data.slice(numberArray[0], numberArray[1]);
      setProgressiveArray((prev) => [...prev, ...cutData]);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setProgressiveArray(data.slice(0, 8));
    }
  }, [data]);

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-28">
      <ShopFilter
        onChangeFilter={changeFilter}
        toggleGrid={gridChangeToggle}
        booleanGrid={toggleGrid}
        filterButtons={arrayForFilters}
        handleSubmit={OptionFilter}
      />
      <div
        className={`h-full w-5/6 mx-auto min-w-80 py-10 grid gap-x-5 gap-y-14 ${
          toggleGrid ? gridGiant : gridCompact
        }`}
      >
        {loadingData
          ? Array.from({ length: 4 }).map((_, index) => (
              <ShopCard toggleSize={toggleGrid} key={index}>
                <LoaderCircle />
              </ShopCard>
            ))
          : null}
        {progressiveArray.length === 0
          ? "No se encontró nada"
          : progressiveArray.map((item) => (
              <ShopCard toggleSize={toggleGrid} key={item.idProduct}>
                <ImagesShopSlider
                  array={item}
                  maxSizeArrows={toggleGrid}
                  category={category ? category : ""}
                  itsALink={true}
                />
                <DescriptionShopCard array={item} toggleSize={toggleGrid} />
              </ShopCard>
            ))}
      </div>
      <div className="w-full h-20 grid place-content-center">
        <DefaultButton
          onClick={handleMoreData}
          color="primary"
          disabled={!dataButton}
        >
          {dataButton ? "More clothes..." : "No more products"}
        </DefaultButton>
      </div>
    </section>
  );
};

export default Shop;
