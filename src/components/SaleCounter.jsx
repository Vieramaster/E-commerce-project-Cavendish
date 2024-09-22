export default function SaleCounter({ time, text }) {
  return (
    <div className="flex gap-5 h-32 w-auto">
      <div className=" h-24 w-16 flex flex-col justify-center items-center gap-2 ">
        <div className="bg-darkEsmerald h-4/6 w-full grid place-content-center rounded-lg">
          <p className="font- text-white text-3xl">{time}</p>
        </div>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
}
