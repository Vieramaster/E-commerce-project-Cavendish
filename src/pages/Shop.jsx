// HOOKS
import { useState, useEffect, Suspense } from "react";
// COMPONENTS
import { useRouteLoaderData } from "react-router-dom";
import { FilterMobile } from "../components/mobile/FilterMobile";
import { DescriptionShopCard } from "../components/cards/card_components/DescriptionShopCard";
import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { ShopCard } from "../components/cards/ShopCard";
import { useResizeWindow } from "../components/hooks/useResizeWindow";
import { LoaderCircle } from "../components/loaders/LoaderCircle";
import "../components/types";

const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";

export const Shop = () => {
  /** @type {{ data?: ObjectClothes[] }} */
  // @ts-ignore
  const { data } = useRouteLoaderData("shop-loader");

  const [toggleGrid, setToggleGrid] = useState(true);
  const [loading, setLoading] = useState(true);
  const [progressiveArray, setProgesiveArray] = useState([]);

  const cloneData = data ? [...data] : [];
  useResizeWindow(976, setToggleGrid);

  /** @param {number} prevNumber @param {number} newNumber @param {ObjectClothes[]} array @returns {ObjectClothes[]} */
  const nexCards = (prevNumber, newNumber, array) => {
    return array.slice(prevNumber, newNumber);
  };

  const gridChangeToggle = () => {
    setToggleGrid((prevState) => !prevState);
  };
  let cardNumber = [0, 8];
  let gato = nexCards(cardNumber[0], cardNumber[1], cloneData);


  const handleScroll = () => {
    console.log("heigth:", document.documentElement.scrollHeight);
    console.log("top:", document.documentElement.scrollTop);
    console.log("window:", window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(progressiveArray);
  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      <FilterMobile toggleGrid={gridChangeToggle} booleanGrid={toggleGrid} />
      <div
        className={`h-full w-5/6 mx-auto min-w-80 py-10 grid gap-x-5 gap-y-14 ${
          toggleGrid ? gridCompact : gridGiant
        }`}
      >
        <Suspense>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <ShopCard toggleSize={toggleGrid} key={index}>
                  <LoaderCircle />
                </ShopCard>
              ))
            : progressiveArray?.map((item) => (
                <ShopCard toggleSize={toggleGrid} key={item.idProduct}>
                  <ImagesShopSlider array={item} maxSizeArrows={toggleGrid} />
                  <DescriptionShopCard array={item} toggleSize={toggleGrid} />
                </ShopCard>
              ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Shop;

/**
 * @param {import('react-router-dom').LoaderFunctionArgs} props
 * @returns {Promise<{data?: ObjectClothes[]}>}
 */
export const LoaderShop = async ({ params }) => {
  const category = params.category;
  const res = await fetch(`/public/data/${category}.json`);
  const data = await res.json();
  return { data };
};
