//HOOKS
import { useEffect, useState } from "react";
//COMPONENTS
import { useRouteLoaderData } from "react-router-dom";
import { FilterMobile } from "../components/mobile/FilterMobile";
import { ShopCard } from "../components/cards/ShopCard";
import { useResizeWindow } from "../components/hooks/useResizeWindow";
import "../components/types";
export const Shop = () => {
  /** @type {{ data?: ObjectClothes[] }} */
  const { data } = useRouteLoaderData("shop-loader");

  const [showGrid, setShowGrid] = useState(false);

  const gridChangeToggle = () => {
    setShowGrid((prevState) => !prevState);
  };

  useResizeWindow(976, setShowGrid);


  const gridCompact = "grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]";
  const gridGiant = "grid-cols-[repeat(auto-fill,_minmax(40rem,_1fr))]";
  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      <FilterMobile toggleGrid={gridChangeToggle} booleanGrid={showGrid} />

      <div
        className={`h-full w-5/6 mx-auto min-w-80 py-10 grid gap-x-5 gap-y-14 ${
          showGrid ? gridCompact : gridGiant
        }`}
      >
        {data?.map((item) => {
          return (
            <ShopCard
              key={item.idProduct}
              arrayObject={item}
              toggleSize={showGrid}
            />
          );
        })}
      </div>
    </section>
  );
};

/**
 * @param {import('react-router-dom').LoaderFunctionArgs} props @returns {Promise<{data?: ObjectClothes[]}>}*/

export const LoaderShop = async ({ params }) => {
  const category = params.category;
  const res = await fetch(`/public/data/${category}.json`);
  const data = await res.json();
  return { data };
};
