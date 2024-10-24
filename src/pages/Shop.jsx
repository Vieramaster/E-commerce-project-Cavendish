import { useRouteLoaderData } from "react-router-dom";

/**
 * @typedef {object} BestSellersColor
 * @property {string} hex
 * @property {string} nameColor
 * @property {Array<string>} imagesColor
 */

/**
 * @typedef {object} ObjectClothes
 * @property {string} idProduct
 * @property {string} price
 * @property {string} name
 * @property {boolean} discount
 * @property {BestSellersColor} colors
 * @property {string} category
 * @property {boolean} newArrival
 * @property {boolean} outlet
 */

export const Shop = () => {
  /** @type {{ data?: ObjectClothes[] }} */
  const { data } = useRouteLoaderData("shop-loader");
  console.log(data);
  return (
    <section>
      {data?.map((item) => {
        return <h1 key={item.idProduct}>{item.idProduct}</h1>;
      })}
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
