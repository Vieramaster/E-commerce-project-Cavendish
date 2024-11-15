//@ts-nocheck

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
  const [selectionFilter, setSelectionFilter] = useState([[], [], []]);
  const [numberArray, setNumberArray] = useState([0, 8]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loadingData, setLoadingData] = useState(false);
  /** @type {[ClothesObject[], React.Dispatch<React.SetStateAction<ClothesObject[]>>]} */
  const [progressiveArray, setProgressiveArray] = useState([]);

  /*** @param {number} prevNumber @param {number} newNumber @param {ClothesObject[]} array @returns {ClothesObject[]} */
  const nextCards = (prevNumber, newNumber, array) => {
    return array.slice(prevNumber, newNumber);
  };

  //Grid
  useResizeWindow(976, setToggleGrid);

  const gridChangeToggle = () => {
    setToggleGrid((prevState) => !prevState);
  };

  //The React Router param is used to know what data to look for depending on the URL
  const { category } = useParams();

  /**@type {{data:ClothesObject[], loading: boolean}} */
  const { data, loading } = useFetch(
    category !== "new_arrivals" ? category : undefined
  );

  // data is subtracted to create filter buttons

  /** @type {ProductAttributes} */
  const arrayForFilters = [
    /** @type {Sizes} */ (sizesFilter(data)),
    /** @type {Color[]} */ (colorFilter(data)),
    /** @type {ClothingTypes} */ (typeFilter(data)),
  ];

  const handleMoreData = () => {
    if (progressiveArray.length < data.length) {
      const newNumbers = [numberArray[0] + 8, numberArray[1] + 8];
      setNumberArray(newNumbers);
      const newCards = nextCards(newNumbers[0], newNumbers[1], data);
      setProgressiveArray((prev) => [...prev, ...newCards]);
    } else {
      setDataButton(false);
    }
  };

  //
  /** @param {React.ChangeEvent<HTMLSelectElement>} event*/
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  //add strings to filter the data
  /** @param {React.MouseEvent<HTMLButtonElement>} event  */
  const handleExtendFilter = ({ target }) => {
    const {
      id: ID,
      dataset: { id: buttonData },
    } = target;
    const index = { sizeButton: 0, colorButton: 1, typeButton: 2 }[buttonData];

    if (index !== undefined && !selectionFilter[index].includes(ID)) {
      setSelectionFilter((prev) => {
        const newFilter = [...prev[index], ID];
        return [
          index === 0 ? newFilter : prev[0],
          index === 1 ? newFilter : prev[1],
          index === 2 ? newFilter : prev[2],
        ];
      });
    }
  };
  //delete strings to filter the data
  /** @param {React.MouseEvent<HTMLButtonElement>} event  */
  const deleteFilterTag = ({ target }) => {
    const {
      dataset: { id: ID },
    } = target;

    setSelectionFilter((prev) => {
      return prev.map((element) => {
        return element.includes(ID)
          ? element.filter((item) => item !== ID)
          : [...element];
      });
    });
  };

  //Clean actual filters
  const cleanFilters = () => {
    setSelectionFilter([[], [], []]);
  };

  const searchFilter = () => {
    let filteredResults = data;

    if (selectionFilter[0].length > 0) {
      // size filter
      filteredResults = filteredResults.filter((product) =>
        product.colors.some((color) =>
          selectionFilter[0].some((productSize) => color.sizes[productSize] > 0)
        )
      );
    }

    if (selectionFilter[1].length > 0) {
      // color filter
      filteredResults = filteredResults.filter((product) =>
        product.colors.some((color) =>
          selectionFilter[1].some((name) => color.colorName === name)
        )
      );
    }

    if (selectionFilter[2].length > 0) {
      // type filter
      filteredResults = filteredResults.filter((product) =>
        selectionFilter[2].some(
          (productName) => product.category === productName
        )
      );
    }
    setProgressiveArray(filteredResults);
  };

  const filters = {
    "title-ascending": () => alphabeticFilter(data, setProgressiveArray, true),
    "title-descending": () =>
      alphabeticFilter(data, setProgressiveArray, false),
    "price-ascending": () => priceFilter(data, setProgressiveArray, true),
    "price-descending": () => priceFilter(data, setProgressiveArray, false),
    default: () => setProgressiveArray(data),
  };

  useEffect(() => {
    if (data) {
      setLoadingData(true);
      let changeArray = nextCards(numberArray[0], numberArray[1], data);
      setProgressiveArray(changeArray);
      setNumberArray([0, 8]);
      setDataButton(true);
      setLoadingData(false);
    }

    if (selectedOption) {
      filters[selectedOption]();
    }
  }, [data, selectedOption]);

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      <ShopFilter
        toggleGrid={gridChangeToggle}
        booleanGrid={toggleGrid}
        {...{ handleSelect, handleExtendFilter, selectionFilter }}
        filterButtons={arrayForFilters}
        handleDeletetag={deleteFilterTag}
        handleCleanFilters={cleanFilters}
        handleSearchFilter={searchFilter}
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
                  category={category}
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
