import { useRouteLoaderData } from "react-router-dom";
import { FilterMobile } from "../components/FilterMobile";
import { ShopCard } from "../components/cards/ShopCard";
import "../components/types";

export const Shop = () => {
  /** @type {{ data?: ObjectClothes[] }} */
  const { data } = useRouteLoaderData("shop-loader");

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      <FilterMobile />
      <div className="h-full w-5/6 mx-auto min-w-80 grid gap-8 grid-cols-1 p-10">
        {data?.map((item) => {
          return (
            <ShopCard
              key={item.idProduct}
              link={item.idProduct}
              imagesArray={item.colors[0].imagesColor}
              name={item.name}
              price={item.price}
              colorsArray={item.colors}
            />
          );
        })}
      </div>
    </section>
  );
};

/**
 * @param {import('react-router-dom').LoaderFunctionArgs} args
 * @returns {Promise<{data?: ObjectClothes}>}
 */
export const LoaderShop = async ({ params }) => {
  const category = params.category;
  const res = await fetch(`/public/data/${category}.json`);
  const data = await res.json();
  return { data };
};
/**
 *
 */
