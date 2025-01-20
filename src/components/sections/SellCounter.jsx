import { useCountdown } from "../../hooks/useCountdown";
import { SellCounterImage } from "../cards/card_components/SellCounterImage";
import { SellCounterTime } from "../cards/card_components/SellCounterTime";

/** @param {{discount:number, afterPrice:number, beforePrice:number, image:string, timeDate:string, imageAlt:string, page:string}} props*/
export const SellCounter = ({
  discount,
  afterPrice,
  beforePrice,
  image,
  timeDate,
  imageAlt,
  page,
}) => {
  // Countdown hook to get the time left until the specified date
  const countDown = useCountdown(timeDate);

  return (
    <section className="w-full py-6 bg-mainColor lg:h-80 2xl:h-96 " aria-label="offer of the month">
      <div className="w-80 h-full flex mx-auto flex-col gap-8 lg:flex-row lg:w-5/6 lg:justify-around lg:gap-5 ">
        <SellCounterImage
          {...{ discount, image, imageAlt, afterPrice, beforePrice, page }}
        />

        <SellCounterTime {...{ countDown }} />
      </div>
    </section>
  );
};
