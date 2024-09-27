export default function CountdownCard({ count, label }) {
  return (
    <div className="size-16 lg:size-28 xl:size-36 2xl:size-40">
      <div className="bg-semiEsmerald w-full h-5/6 flex justify-center items-center rounded-xl">
        <p className="  text-3xl text-white lg:text-6xl 2xl:text-[5rem]">
          {count}
        </p>
      </div>
      <div className="mt-2 w-full h-1/6 text-sm text-center lg:text-xl lg:mt-4 2xl:text-2xl text-white">
        <p>{label}</p>
      </div>
    </div>
  );
}
