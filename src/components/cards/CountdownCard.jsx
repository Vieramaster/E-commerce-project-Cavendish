/**
 * @param {{ count: number, label: string }} props
 */
export const CountdownCard = ({ count, label }) => {
  return (
    <div className="size-16 lg:size-24 2xl:size-28 ">
      <div className="bg-background w-full h-5/6 flex justify-center items-center rounded-md">
        <p className="text-2xl text-textColor font-alternative lg:text-4xl 2xl:text-5xl">
          {count}
        </p>
      </div>
      <div className="w-full h-1/6 text-md text-center lg:text-xl lg:mt-4 2xl:text-2xl text-white">
        <p>{label}</p>
      </div>
    </div>
  );
};
