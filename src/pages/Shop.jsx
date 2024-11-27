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
  defaultFilter,
} from "../hooks/useSelectFilters";
import "../types";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

export const Shop = () => {
  const { category } = useParams();
  const [toggleGrid, setToggleGrid] = useState(false);
  const [loadCards, setLoadCards] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    /** @type {FiltersString} */ ("default")
  );

  /** @type {[ExtendFilters, React.Dispatch<React.SetStateAction<ExtendFilters>>]} */
  const [extendFilters, setExtendFilters] = useState(
    /** @type {ExtendFilters} */ ({
      size: [],
      color: [],
      type: [],
    })
  );
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
  const minCut = data.slice(0, Math.min(8, data.length));


  // data is subtracted to create filter buttons
  /**@type {ProductAttributes} */
  const arrayForFilters = [
    sizesFilter(data),
    colorFilter(data),
    typeFilter(data),
  ];

  //Filter select
  /** @type {React.ChangeEventHandler<HTMLSelectElement>} */
  const changeFilter = ({ target }) => {
    setSelectedOption(/** @type {FiltersString} */ (target.value));
  };


  const pageReset = () => {
    setLoadingData(true);
    setProgressiveArray(minCut);
    setLoadCards(true);
    setLoadingData(false);
  };

  /** @param {React.MouseEvent<HTMLButtonElement>} event */
  const handleExtendfilter = ({ target }) => {
    const {
      value: buttonValue,
      dataset: { id: buttonData },
    } = /** @type {HTMLButtonElement} */ (target);

    setExtendFilters((prev) => {
      /**@type {"size" | "color" | "type"} */
      let filterKey;

      if (buttonData === "sizeButton") {
        filterKey = "size";
      } else if (buttonData === "colorButton") {
        filterKey = "color";
      } else if (buttonData === "typeButton") {
        filterKey = "type";
      } else return prev;

      const updatedFilter = prev[filterKey].includes(buttonValue)
        ? prev[filterKey].filter((item) => item !== buttonValue)
        : [...prev[filterKey], buttonValue];

      return {
        ...prev,
        [filterKey]: updatedFilter,
      };
    });
  };

  const handleCleanFilter = () => {
    setExtendFilters({
      size: [],
      color: [],
      type: [],
    });
    setProgressiveArray(minCut);
  };

  /** @param {React.FormEvent<HTMLFormElement>} event */
  const handleFormData = (event) => {
    event.preventDefault();

    let filteredResults = data;

    const {
      size: sizeFilter,
      color: colorFilter,
      type: typeFilter,
    } = extendFilters;

    if (sizeFilter.length > 0) {
      filteredResults = filteredResults.filter((product) => {
        return product.colors.some((color) => {
          return sizeFilter.some((size) => color.sizes[size] > 0);
        });
      });
    }

    if (colorFilter.length > 0) {
      filteredResults = filteredResults.filter((product) => {
        return product.colors.some((color) =>
          colorFilter.includes(color.colorName)
        );
      });
    }

    if (typeFilter.length > 0) {
      filteredResults = filteredResults.filter((product) => {
        return typeFilter.includes(product.name);
      });
    }
    setProgressiveArray(filteredResults);
    

  };

    // add more cards
    const handleMoreData = () => {
      if (progressiveArray.length < data.length) {
        const nextCards = data.slice(
          progressiveArray.length,
          progressiveArray.length +  Math.min(8, data.length)
        );
        setProgressiveArray((prev) => [...prev, ...nextCards]);
      } else setLoadCards(false);
    };
  
  /**@type {Filters} */
  const filters = {
    title_ascending: () => alphabeticFilter(data, true),
    title_descending: () => alphabeticFilter(data, false),
    price_ascending: () => priceFilter(data, false),
    price_descending: () => priceFilter(data, true),
    default: () => defaultFilter(data),
  };

  console.log(progressiveArray)
  useEffect(() => {
    if (data) {
      pageReset();
    }
    if (selectedOption) {
      
      filters[selectedOption]();
      setProgressiveArray(minCut);
    }
  }, [data, selectedOption]);

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-28">
      <ShopFilter
        onChangeFilter={changeFilter}
        toggleGrid={gridChangeToggle}
        booleanGrid={toggleGrid}
        filterButtons={arrayForFilters}
        selectedButton={extendFilters}
        {...{
          handleFormData,
          handleCleanFilter,
          handleExtendfilter,
        }}
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
          disabled={!loadCards}
        >
          {loadCards ? "More clothes..." : "No more products"}
        </DefaultButton>
      </div>
    </section>
  );
};

export default Shop;
