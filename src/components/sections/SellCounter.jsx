import { useCountdown } from "../../hooks/useCountdown";
import { CountdownCard } from "../cards/CountdownCard";
import { DefaultButtonLink } from "../links/DefaultButtonLink";
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";

const textStyles =
  "font-alternative  font-semibold text-2xl lg:text-3xl 2xl:text-3xl";

/** @param {{discount:number, afterPrice:number, beforePrice:number, image:string, timeDate:string, imageAlt:string, page:string}} props*/
export const SellCounter = ({
  discount,
  afterPrice,
  beforePrice,
  image,
  timeDate,
  imageAlt,
  page
}) => {
  // Countdown hook to get the time left until the specified date
  const countDown = useCountdown(timeDate);

  return (
    <section className="w-full py-6 bg-mainColor flex justify-center lg:h-80 2xl:h-96 ">
      <div className="w-80 h-full flex  flex-col gap-8 lg:flex-row lg:w-5/6 lg:justify-around lg:gap-5 ">
        <div className="w-full flex flex-col gap-3 text-white lg:w-96 2xl:w-[30rem] ">
          <p className="font-alternative font-bold text-4xl text-center lg:text-start 2xl:text-5xl">
            {discount}
          </p>
          <img src={image} alt={imageAlt} className="w-full" />
          <div className="flex justify-center  items-center gap-5 lg:justify-start 2xl:gap-8">
            <div className="flex gap-3 border border-background px-3 py-1 rounded-md">
              <p className="font-alternative font-bold line-through text-2xl 2xl:text-3xl ">
                $ {afterPrice}
              </p>
              <p className=" font-alternative font-bold text-2xl   2xl:text-3xl">
                $ {beforePrice}
              </p>
            </div>

            <DefaultButtonLink color="banner" toPage={page}>
              <ShoppingCartIco />
            </DefaultButtonLink>
          </div>
        </div>

        <div className="w-full h-1/2 flex flex-col justify-start items-center gap-3 lg:w-auto lg:h-60 lg:justify-center lg:items-start 2xl:gap-5 2xl:mt-5">
          <h3 className="font-semibold text-4xl text-center lg:text-start xl:text-4xl 2xl:text-5xl text-white lg:translate-y-1/2">
            Sale ends soon
          </h3>
          <div className="flex justify-center items-center gap-5 w-full h-4/5">
            {Object.entries(countDown).map(([label, count], index) => (
              <CountdownCard key={index} count={count} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
