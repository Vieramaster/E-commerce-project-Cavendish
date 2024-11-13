import { ImagesShopSlider } from "../components/sliders/ImagesShopSlider";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ColorButton } from "../components/buttons/ColorButton";
import { ShopSizeButton } from "../components/buttons/ShopSizeButton";
import { FastWatchIco } from "../components/SVGs/icons/FastWatchIco";
import { TruckIco } from "../components/SVGs/icons/TruckIco";
import { ReplaceIco } from "../components/SVGs/icons/ReplaceIco";
import "../types";

const informationLi = [
  {
    Component: FastWatchIco,
    text: "Order by 2pm for next day delivery",
    key: "fastWatch",
  },
  {
    Component: TruckIco,
    text: "Free Standard delivery orders over $125+",
    key: "delivery",
  },
  {
    Component: ReplaceIco,
    text: "Free, quick and easy returns",
    key: "replace",
  },
];

const ShopProduct = () => {
  const { idProduct: idClothes, category: categoryProduct } = useParams();

  const { data: dataCategory } = useFetch(categoryProduct);

  const dataProduct = dataCategory?.find(
    (item) => item.idProduct === idClothes
  );

  console.log(dataProduct?.colors[0]);
  console.log();

  return (
    <section className="bg-offWhite w-full min-h-screen h-auto pt-24 lg:pt-28">
      {dataProduct ? (
        <div className="w-5/6 h-auto mx-auto py-10 lg:flex gap-10 ">
          <div className="w-full h-auto py-5 lg:h-full lg:w-1/2 lg:py-0">
            <ImagesShopSlider
              maxSizeArrows={true}
              itsALink={false}
              category=""
              array={dataProduct}
            />
          </div>
          <div className="w-full h-auto  flex flex-col gap-5  lg:px-20  lg:w-1/2 ">
            <article className="text-textColor flex flex-col gap-3">
              <h2 className="font-semibold text-3xl lg:text-4xl">
                {dataProduct.name}
              </h2>
              <p className="italic lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                ratione quibusdam aspernatur beatae fugiat.
              </p>
              <h3 className="font-bold text-4xl lg:text-5xl">
                ${dataProduct.price}
              </h3>
            </article>
            <ul className="flex gap-3">
              {dataProduct.colors.map((color, index) => {
                return (
                  <li
                    className="w-16 h-8 hover:border-b-black"
                    key={index + color.colorName}
                  >
                    <ColorButton
                      hex={color.hex}
                      name={color.colorName}
                      mainProduct={true}
                    />
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-3 h-auto w-full flex-wrap">
              {Object.entries(dataProduct?.colors[0].sizes).map(
                (item, index) => {
                  return (
                    <li key={item[0] + index}>
                      <ShopSizeButton
                        disabled={item[1] === 0}
                        borderButton={item[1] > 0}
                        aria-label={`${item[0]} size button`}
                        id={item[0]}
                        onClick={() => "void"}
                        data-id="sizeButton"
                        selected={false}
                      >
                        {item[0]}
                      </ShopSizeButton>
                    </li>
                  );
                }
              )}
            </ul>
            <button className="w-full max-w-96 h-10 bg-darkEsmerald text-white mx-auto rounded-md hover:bg-esmerald active:opacity-90 duration-200 ease-out ">
              Add to bag
            </button>
            <ul className=" text-lightCarbon flex flex-col justify-start mt-5 gap-2">
              {informationLi.map(({ Component, key, text }) => {
                return (
                  <li
                    className="text-lg items-center w-fit h-auto min-h-12 inline-flex gap-6"
                    key={key}
                  >
                    <Component className="size-8 fill-lightCarbon" />
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <p>no se encontro nada we</p>
      )}
    </section>
  );
};

export default ShopProduct;
