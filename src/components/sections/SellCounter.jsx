import { useCountdown } from "../hooks/useCountdown";
//components
import { CountdownCard } from "../cards/CountdownCard";
import { HoverButton } from "../buttons/HoverButton";
//icos
import { ShoppingCartIco } from "../SVGs/icons/ShoppingCartIco";

const titleClass =
  "font-semibold text-4xl text-center lg:text-start xl:text-5xl 2xl:text-6xl";

/** @param {{discount:string, afterPrice:string, beforePrice:string, image:string, timeDate:string, imageAlt:string}} props*/

export const SellCounter = ({
  discount,
  afterPrice,
  beforePrice,
  image,
  timeDate,
  imageAlt,
}) => {
  const { days, hours, minutes, seconds } = useCountdown(timeDate);

  return (
    <section className="w-full h-auto py-10 bg-sellCounter flex justify-center 2xl:py-14">
      <div className="h-full w-full flex flex-col gap-10 justify-start items-center lg:w-5/6 lg:flex-row lg:justify-between lg:items-start">
        <div className="w-80 flex flex-col gap-5 lg:w-2/5">
          <h3 className={`${titleClass} text-carbon font-normal pr-6 lg:pr-0`}>
            {discount}
          </h3>
          <img src={image} alt={imageAlt} />
          <div className="flex gap-5 justify-center lg:justify-start">
            <p className="border rounded-lg py-2 px-5 font-semibold text-xl lg:text-2xl 2xl:text-3xl border-white text-white lg:border-carbon lg:text-carbon">
              <span className="font-semibold line-through">{afterPrice}</span>
              {beforePrice}
            </p>
            <HoverButton color="secondary" aria-label="add to cart" toPage="/">
              <ShoppingCartIco className="size-5 stroke-carbon lg:stroke-white lg:size-8" />
            </HoverButton>
          </div>
        </div>
        <div className="w-80 flex flex-col gap-8 lg:w-1/2 lg:justify-between lg:h-52 xl:h-68 2xl:h-72 xl:gap-20">
          <h3 className={`${titleClass} text-white`}>Sale ends soon</h3>
          <div className="flex gap-5 justify-between">
            <CountdownCard label="Days" count={days} />
            <CountdownCard label="Hours" count={hours} />
            <CountdownCard label="Minutes" count={minutes} />
            <CountdownCard label="Seconds" count={seconds} />
          </div>
        </div>
      </div>
    </section>
  );
};
