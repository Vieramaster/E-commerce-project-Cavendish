import { useState, useEffect, useMemo } from "react";
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
  defaultFilter,
} from "../hooks/useSelectFilters";
import "../types";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

export const Shop = () => {
  const { category } = useParams();
  const [toggleGrid, setToggleGrid] = useState(false);
  const [canLoadMore, setDataButton] = useState(true);
  const [numberArray, setNumberArray] = useState([0, 0]);
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

  /**@type {{data:ClothesObject[]}} */
  const { data } = useFetch(category !== "new_arrivals" ? category : undefined);

  const productData = useMemo(() => structuredClone(data), [data]);

  // data is subtracted to create filter buttons
  /** @type {ProductAttributes} */
  const arrayForFilters = [
    /** @type {Sizes} */ (sizesFilter(productData)),
    /** @type {Color[]} */ (colorFilter(productData)),
    /** @type {ClothingTypes} */ (typeFilter(productData)),
  ];

  //Filter select
  /**@type {React.ChangeEventHandler<HTMLSelectElement>} */
  const changeFilter = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMoreData = () => {
    if (progressiveArray.length < productData.length) {
      const newNumbers = [numberArray[0] + 8, numberArray[1] + 8];
      setNumberArray(newNumbers);
      const newCards = productData.slice(newNumbers[0], newNumbers[1]);
      setProgressiveArray((prev) => [...prev, ...newCards]);
    } else {
      setDataButton(false);
    }
  };

  const filters = {
    "title-ascending": () => alphabeticFilter(productData, true),
    "title-descending": () => alphabeticFilter(productData, false),
    "price-ascending": () => priceFilter(productData, true),
    "price-descending": () => priceFilter(productData, false),
    default: () => defaultFilter(productData),
  };

  /** @param {React.FormEvent<HTMLFormElement>} event */
  const handleFormData = (event) => {
    setLoadingData(true)
    event.preventDefault();
    console.log(event)

  };

  const pageReset = () => {
    setNumberArray([0, 8]);
    setLoadingData(true);
    let changeArray = productData.slice(0, Math.min(8, data.length));
    setProgressiveArray(changeArray);
    setDataButton(true);
    setLoadingData(false);
  };

  useEffect(() => {
    if (productData) {
      pageReset();
    }
    if (selectedOption) {
      filters[selectedOption]();
      setProgressiveArray(productData.slice(0, 8));
    }
  }, [productData, selectedOption]);

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-28">
      <ShopFilter
        onChangeFilter={changeFilter}
        toggleGrid={gridChangeToggle}
        booleanGrid={toggleGrid}
        filterButtons={arrayForFilters}
        {...{ handleFormData }}
      />
      <div
        className={`h-full w-5/6 mx-auto min-w-80 py-10 grid gap-x-5 gap-y-14 ${
          toggleGrid ? gridGiant : gridCompact
        }`}
      >
        {loadingData &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShopCard toggleSize={toggleGrid} key={index}>
              <LoaderCircle />
            </ShopCard>
          ))}
        {!loadingData && progressiveArray.length === 0 && (
          <p>No se encontró nada</p>
        )}
        {!loadingData &&
          progressiveArray.map((item) => (
            <ShopCard toggleSize={toggleGrid} key={item.idProduct}>
              <ImagesShopSlider
                array={item}
                maxSizeArrows={toggleGrid}
                category={category || ""}
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
          disabled={!canLoadMore}
        >
          {canLoadMore ? "More clothes..." : "No more products"}
        </DefaultButton>
      </div>
    </section>
  );
};

export default Shop;
