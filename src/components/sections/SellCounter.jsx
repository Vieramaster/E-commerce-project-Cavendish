import { useCountdown } from "../../hooks/useCountdown";
import { CountdownCard } from "../cards/CountdownCard";

const textStyles =
  "font-alternative  font-semibold text-xl lg:text-2xl 2xl:text-3xl";

/** @param {{discount:string, afterPrice:string, beforePrice:string, image:string, timeDate:string, imageAlt:string}} props*/
export const SellCounter = ({
  discount,
  afterPrice,
  beforePrice,
  image,
  timeDate,
  imageAlt,
}) => {
  
  // Countdown hook to get the time left until the specified date
  const countDown = useCountdown(timeDate);

  return (
    <section className="w-full py-6 bg-mainColor flex justify-center lg:h-72 2xl:h-80">
      <div className="w-80 h-full flex flex-col gap-8 lg:flex-row lg:w-5/6 lg:justify-around lg:gap-5">
        <div className="w-full flex flex-col gap-3 text-white lg:w-96 2xl:w-[30rem]">
          <img src={image} alt={imageAlt} className="w-full" />
          <div className="flex justify-center items-center gap-5 lg:justify-start">
            <div className="flex gap-3 border border-background px-3 py-1 rounded-md">
              <p className={`${textStyles} line-through`}>{afterPrice}</p>
              <p className={textStyles}>{beforePrice}</p>
            </div>
            <p className={textStyles}>{discount}</p>
          </div>
        </div>

        <div className="w-full h-1/2 flex flex-col justify-start items-center gap-3 lg:w-auto lg:h-60 lg:justify-center lg:items-start 2xl:gap-5">
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
