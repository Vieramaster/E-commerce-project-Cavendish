import { CountdownCard } from "../CountdownCard";

/**
 * @param {{
 * countDown: CounterTime
 * }} props
 */
export const SellCounterTime = ({ countDown }) => {
  if (!countDown || Object.keys(countDown).length === 0) {
    return <div>No countdown available</div>;
  }

  return (
    <div className="w-full h-1/2 flex flex-col justify-start items-center gap-3 lg:w-auto lg:h-60 lg:justify-center lg:items-start 2xl:gap-5 2xl:mt-5">
      <h3 className="font-semibold text-4xl text-center lg:text-start xl:text-4xl 2xl:text-5xl text-white lg:translate-y-1/2">
        Sale ends soon
      </h3>
      <div className="flex justify-center items-center gap-5 w-full h-4/5">
        {Object.entries(countDown).map(([label, count]) => (
          <CountdownCard
            key={label}
            count={count}
            label={label}
            aria-live="assertive"
          />
        ))}
      </div>
    </div>
  );
};
