import ShoppingButton from "../buttons/ShoppingButton";
import CountdownCard from "../cards/CountdownCard";
import useCountdown from "../hooks/useCountdown";

const titleClass =
  "font-semibold text-4xl text-center lg:text-start xl:text-5xl 2xl:text-6xl";

export default function SellCounter({
  discount,
  afterPrice,
  beforePrice,
  image,
  timedate
}) {
  const { days, hours, minutes, seconds } = useCountdown(timedate);

  return (
    <section className="w-full h-auto py-10 bg-sellCounter flex justify-center 2xl:py-14">
      <div className="h-full w-full flex flex-col gap-10 justify-start items-center lg:w-5/6 lg:flex-row lg:justify-between lg:items-start">
        <div className="w-80 flex flex-col gap-5 lg:w-2/5">
          <h3 className={`${titleClass} text-carbon font-normal pr-6 lg:pr-0`}>
            {discount}
          </h3>
          <img src={image} alt="shoes" />
          <div className="flex gap-5 justify-center lg:justify-start">
            <p className="border border-white text-white rounded-lg py-2 px-5 font-semibold text-xl lg:border-carbon lg:text-carbon lg:text-2xl 2xl:text-3xl">
              <span className="font-semibold line-through">{afterPrice}</span>{" "}
              {beforePrice}
            </p>
            <ShoppingButton
              background="bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald"
              SVGclass="size-5 stroke-carbon lg:stroke-white lg:size-8"
            />
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
}
