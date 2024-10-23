//Components
import { HoverButton } from "../buttons/HoverButton";
import { TopButtonCard } from "../buttons/TopButtonCard";

//Icos
import { HeartIco } from "../SVGs/icons/HeartIco";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";

/**
 * @typedef {object[]} BestSellersColors
 * @property {string} hex
 * @property {string} nameColor
 * @property {Array<string>} imagesColor
 *
 */

/**
 * @typedef {Object[]} BestSellersArray
 * @property {string} idProduct
 * @property {string} price
 * @property {string} name
 * @property {boolean} discount
 * @property {BestSellersColors} colors
 */

/**
 * @param {{title:string, shopArray:BestSellersArray | null  }} props
 * @returns {JSX.Element}
 */
export const ShoppingCards = ({ title, shopArray }) => {
  return (
    <section className="w-full h-auto py-16 bg-white flex items-center justify-center">
      <div className="flex flex-col gap-10  w-5/6 items-center lg:items-start">
        <h2 className=" text-carbon font-semibold text-3xl text-center lg:text-start lg:text-5xl">
          {title}
        </h2>
        <div className="w-full grid grid-cols-1 gap-10  justify-items-center lg:justify-items-end lg:grid-cols-2 lg: 2xl:flex 2xl:justify-between">
          {shopArray?.map((item, index) => (
            <div
              key={item.idProduct}
              className={`relative w-[20rem] h-[30rem] rounded-xl flex flex-col  items-center lg:w-[24rem] lg:h-[34rem] xl:w-[30rem] 2xl:w-1/4 2xl:h-[35rem] ${
                index === 0 || index === 2
                  ? "lg:justify-self-start lg:self-start"
                  : ""
              }`}
            >
              <div className=" bg-darkGrey h-5/6 w-full rounded-2xl  relative flex flex-col justify-end items-center overflow-hidden group">
                <img
                  src={item.colors[0].imagesColor[0]}
                  alt={item.name}
                  className=" w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out "
                />
                <TopButtonCard aria-label="Favorite" background={false}>
                  <HeartIco className="size-10 stroke-esmerald stroke-1 hover:fill-esmerald" />
                </TopButtonCard>
              </div>
              <div className="flex justify-between w-full h-1/6 items-center">
                <div>
                  <h3 className="text-xl 2xl:text-xl">{item.name}</h3>
                  <p className="lg:text-xl  ">{item.price}</p>
                </div>

                <HoverButton toPage="/">
                  <ShoppingCartIco
                    className={"size-6 stroke-carbon group-hover:stroke-white "}
                  />
                </HoverButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
