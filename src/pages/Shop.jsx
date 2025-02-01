import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ShopFilter } from "../components/ShopFilter";
import { DefaultButton } from "../components/buttons/DefaultButton";
import { ShopCard } from "../components/cards/ShopCard";
import { DescriptionShopCard } from "../components/cards/card_components/DescriptionShopCard";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { useFetch } from "../hooks/useFetch";
import { useResizeWindow } from "../hooks/useResizeWindow";
import {
  alphabeticFilter,
  colorFilter,
  defaultFilter,
  priceFilter,
  sizesFilter,
  typeFilter,
} from "../hooks/useSelectFilters";
import "../types";
import { useSearchValue } from "../hooks/useZustand";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

const sorts = {
  title_ascending: /** @param {ClothesObject[]} data */ (data) =>
    alphabeticFilter(data, true),
  title_descending: /** @param {ClothesObject[]} data */ (data) =>
    alphabeticFilter(data, false),
  price_ascending: /** @param {ClothesObject[]} data */ (data) =>
    priceFilter(data, true),
  price_descending: /** @param {ClothesObject[]} data */ (data) =>
    priceFilter(data, false),
  default: /** @param {ClothesObject[]} data */ (data) => defaultFilter(data),
};

const skip = () => true;

const filters = {
  /** @param {string[]} values */
  size: (values) =>
    values.length === 0
      ? skip
      : /** @param {ClothesObject} product */ (product) =>
          product.colors.some((color) =>
            values.some((size) => color.sizes[size] > 0)
          ),
  /** @param {string[]} values */
  color: (values) =>
    values.length === 0
      ? skip
      : /** @param {ClothesObject} product */ (product) =>
          product.colors.some((color) => values.includes(color.colorName)),
  /** @param {string[]} values */
  type: (values) =>
    values.length === 0
      ? skip
      : /** @param {ClothesObject} product */ (product) =>
          values.includes(product.category),
};

const PAGE_SIZE = 8;

export const Shop = () => {
  const { category, search } = useParams();

  const [toggleGrid, setToggleGrid] = useState(false);
  const [sort, setSort] = useState(/** @type {FiltersString} */ ("default"));
  const [extendFilters, setExtendFilters] = useState(
    /** @type {ExtendFilters} */ ({ size: [], color: [], type: [] })
  );
  const [page, setPage] = useState(1);
  const resetPagination = useCallback(() => setPage(1), []);

  // restart the grid for screen changes
  useResizeWindow(976, setToggleGrid);

  const gridChangeToggle = useCallback(
    () => setToggleGrid((prevState) => !prevState),
    []
  );
  const { searchValue } = useSearchValue();
  const {} = useLocation();
  const totalCategories = [
    "sweatshirts_and_hoodies",
    "jackets_and_coats",
    "t-shirts_and_polos",
    "pants_and_jeans",
    "sweaters",
    "shirts",
    "shoes",
  ];
  const resultCategories =
    category && totalCategories.includes(category) ? category : undefined;

  const { data } = useFetch(
    "/data/clothes_for_e-commerse.json",
    resultCategories,
    searchValue ?? null
  );

  // data is subtracted to create filter buttons
  /** @type {ProductAttributes} */
  const arrayForFilters = useMemo(
    () => [sizesFilter(data), colorFilter(data), typeFilter(data)],
    [data]
  );

  // Filter select
  /** @type {React.ChangeEventHandler<HTMLSelectElement>} */
  const changeFilter = useCallback(({ currentTarget }) => {
    setSort(/** @type {FiltersString} */ (currentTarget.value));
  }, []);

  /** @type {React.MouseEventHandler<HTMLButtonElement>} */
  const handleExtendfilter = useCallback(
    ({ currentTarget }) => {
      resetPagination();
      const {
        value: buttonValue,
        dataset: { id: buttonData },
      } = /** @type {HTMLButtonElement} */ (currentTarget);

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
    },
    [resetPagination]
  );

  const handleCleanFilter = useCallback(() => {
    setExtendFilters({ size: [], color: [], type: [] });
    setPage(1);
  }, []);

  const filteredResults = useMemo(
    () =>
      Object.entries(extendFilters).reduce(
        (result, [filterName, filterValues]) =>
          result.filter(
            filters[/** @type {keyof typeof filters} */ (filterName)](
              filterValues
            )
          ),
        sort ? sorts[sort](data) : data
      ),
    [extendFilters, data, sort]
  );

  const filteredResultsSliced = useMemo(
    () => filteredResults.slice(0, page * PAGE_SIZE),
    [filteredResults, page]
  );

  const loadCards = useMemo(
    () => filteredResultsSliced.length < filteredResults.length,
    [filteredResults.length, filteredResultsSliced.length]
  );
  useEffect(() => {
    if (data) {
      resetPagination();
    }
  }, [data]);
  // add more cards
  const handleMoreData = useCallback(() => () => setPage(page + 1), [page]);

  console.log("categoria :", category);
  console.log("buscador:", search);
  console.log("lala:", searchValue);
  return (
    <section className="bg-offWhite w-full min-h-screen">
      <ShopFilter
        onChangeFilter={changeFilter}
        toggleGrid={gridChangeToggle}
        booleanGrid={toggleGrid}
        filterButtons={arrayForFilters}
        selectedButton={extendFilters}
        {...{
          handleCleanFilter,
          handleExtendfilter,
        }}
      />
      <div
        className={`h-full w-5/6 mx-auto min-w-80 py-10 grid gap-x-5 gap-y-14 ${
          toggleGrid ? gridGiant : gridCompact
        }`}
      >
        {filteredResultsSliced.length === 0 ? (
          <p>No se encontró nada</p>
        ) : (
          filteredResultsSliced.map((item) => (
            <ShopCard toggleSize={toggleGrid} key={item.idProduct}>
              <ImagesShopSlider
                changeClothesColor={0}
                array={item}
                maxSizeArrows={toggleGrid}
                itsALink={true}
              />
              <DescriptionShopCard array={item} toggleSize={toggleGrid} />
            </ShopCard>
          ))
        )}
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
